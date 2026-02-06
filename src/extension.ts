import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { generateTheme as getThemeObject } from './themeGenerator';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'hadar.changeTheme',
    async () => {
      const options: vscode.QuickPickItem[] = [
        {
          label: 'Hadar Mint',
          description: '#00B09C',
          detail: 'Refreshing & Balanced',
        },
        {
          label: 'Hadar Cherry',
          description: '#D64045',
          detail: 'Energetic & Bold',
        },
        {
          label: 'Hadar Golden',
          description: '#FF9F1C',
          detail: 'Warm & High Contrast',
        },
        {
          label: 'Hadar Lime',
          description: '#AACC00',
          detail: 'Vibrant & Sharp',
        },
        {
          label: 'Custom Color...',
          description: 'Enter a custom hex color',
          detail: 'Define your unique style',
        },
      ];

      const selection = await vscode.window.showQuickPick(options, {
        placeHolder: 'Select a theme color for Hadar',
      });

      if (!selection) {
        return;
      }

      let selectedColor = '';

      if (selection.label === 'Custom Color...') {
        const input = await vscode.window.showInputBox({
          prompt: 'Enter a Hex color code (e.g., #123456)',
          placeHolder: '#RRGGBB',
          validateInput: (text) => {
            const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
            return hexRegex.test(text) ? null : 'Invalid Hex color code';
          },
        });

        if (!input) {
          return;
        }
        selectedColor = input;
      } else {
        selectedColor = selection.description!;
      }

      // Normalize color to 6 hex digits if 3 are provided
      if (selectedColor.length === 4) {
        selectedColor =
          '#' +
          selectedColor[1] +
          selectedColor[1] +
          selectedColor[2] +
          selectedColor[2] +
          selectedColor[3] +
          selectedColor[3];
      }

      selectedColor = selectedColor.toUpperCase();

      try {
        await updateThemeFiles(context, selectedColor);
        const reload = await vscode.window.showInformationMessage(
          `Hadar Theme updated to ${selectedColor}. Reload window to apply changes?`,
          'Reload',
        );
        if (reload === 'Reload') {
          vscode.commands.executeCommand('workbench.action.reloadWindow');
        }
      } catch (error: any) {
        vscode.window.showErrorMessage(
          `Failed to generate theme: ${error.message}`,
        );
      }
    },
  );

  context.subscriptions.push(disposable);

  let disposableSwitch = vscode.commands.registerCommand(
    'hadar.switchVariant',
    async () => {
      const options: vscode.QuickPickItem[] = [
        {
          label: 'Hadar',
          description: 'Standard version',
          detail: 'Borderless, immersive experience',
        },
        {
          label: 'Hadar Bordered',
          description: 'Bordered version',
          detail: 'With borders for better separation',
        },
      ];

      const selection = await vscode.window.showQuickPick(options, {
        placeHolder: 'Select Hadar Theme Variant',
      });

      if (selection) {
        await vscode.workspace
          .getConfiguration()
          .update(
            'workbench.colorTheme',
            selection.label,
            vscode.ConfigurationTarget.Global,
          );
      }
    },
  );

  context.subscriptions.push(disposableSwitch);
}

async function updateThemeFiles(
  context: vscode.ExtensionContext,
  color: string,
) {
  // Update standard theme (borderless)
  const targetPathStandard = path.join(
    context.extensionPath,
    'themes',
    'hadar-color-theme.json',
  );
  const themeObjectStandard = getThemeObject(color, false);
  fs.writeFileSync(
    targetPathStandard,
    JSON.stringify(themeObjectStandard, null, 2),
    'utf8',
  );

  // Update bordered theme
  const targetPathBordered = path.join(
    context.extensionPath,
    'themes',
    'hadar-bordered-color-theme.json',
  );
  const themeObjectBordered = getThemeObject(color, true);
  fs.writeFileSync(
    targetPathBordered,
    JSON.stringify(themeObjectBordered, null, 2),
    'utf8',
  );
}

export function deactivate() {}
