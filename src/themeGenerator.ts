import { palette, withAlpha } from './palette';

export function generateTheme(accentColor: string, bordered: boolean = false) {
  const p = palette;
  const a = accentColor;

  const structuralBorder = bordered ? p.border : p.bgDark;

  const tabHeaderBorder = structuralBorder;

  const activeTabBottomBorder = bordered ? p.bgEditor : a;
  const activeTabTopBorder = bordered ? a : p.bgEditor;

  return {
    name: bordered ? 'Hadar Bordered' : 'Hadar',
    type: 'dark',
    colors: {
      focusBorder: withAlpha(p.fgSecondary, '77'),
      foreground: p.fgSecondary,
      'widget.shadow': p.bgWidget,
      'selection.background': withAlpha(p.fgSecondary, '77'),
      descriptionForeground: p.fgSecondary,
      errorForeground: p.error,
      'textBlockQuote.background': p.border,
      'textBlockQuote.border': p.border,
      'textCodeBlock.background': p.bgDark,
      'textLink.activeForeground': a,
      'textLink.foreground': a,
      'textPreformat.foreground': p.fgSecondary,
      'textSeparator.foreground': p.fgSecondary,
      'button.background': a,
      'button.foreground': p.bgDark,
      'button.hoverBackground': withAlpha(a, '99'),
      'dropdown.background': p.bgDark,
      'dropdown.listBackground': p.bgDark,
      'dropdown.border': p.border,
      'dropdown.foreground': p.fgSecondary,
      'input.background': p.bgEditor,
      'input.border': p.border,
      'input.foreground': p.fgSecondary,
      'input.placeholderForeground': withAlpha(p.fgSecondary, '77'),
      'inputOption.activeBorder': p.border,
      'inputValidation.errorBackground': p.bgEditor,
      'inputValidation.errorForeground': p.error,
      'inputValidation.errorBorder': p.error,
      'inputValidation.infoBackground': p.bgEditor,
      'inputValidation.infoForeground': p.info,
      'inputValidation.infoBorder': p.info,
      'inputValidation.warningBackground': p.bgEditor,
      'inputValidation.warningForeground': p.warning,
      'inputValidation.warningBorder': p.warning,
      'scrollbar.shadow': a,
      'scrollbarSlider.activeBackground': a,
      'scrollbarSlider.background': withAlpha(a, '33'),
      'scrollbarSlider.hoverBackground': withAlpha(a, '55'),
      'badge.foreground': p.bgEditor,
      'badge.background': a,
      'progressBar.background': a,
      'list.activeSelectionBackground': p.border,
      'list.activeSelectionForeground': p.fgSecondary,
      'list.dropBackground': p.border,
      'list.focusBackground': withAlpha(p.border, '33'),
      'list.focusForeground': p.fgSecondary,
      'list.highlightForeground': a,
      'list.hoverBackground': withAlpha(p.border, '33'),
      'list.hoverForeground': p.fgSecondary,
      'list.inactiveSelectionBackground': withAlpha(p.border, '77'),
      'list.inactiveSelectionForeground': p.fgSecondary,
      'list.inactiveFocusBackground': p.border,
      'list.invalidItemForeground': p.error,
      'list.errorForeground': p.error,
      'list.warningForeground': p.warning,
      'listFilterWidget.background': p.border,
      'listFilterWidget.outline': p.border,
      'listFilterWidget.noMatchesOutline': p.error,
      'tree.indentGuidesStroke': p.border,
      'activityBar.background': p.bgDark,
      'activityBar.dropBorder': a,
      'activityBar.foreground': a,
      'activityBar.inactiveForeground': withAlpha(p.fgSecondary, '99'),
      'activityBar.border': structuralBorder,
      'activityBarBadge.background': a,
      'activityBarBadge.foreground': p.bgDark,
      'activityBarTop.foreground': a,
      'activityBarTop.activeBorder': a,
      'activityBarTop.inactiveForeground': withAlpha(p.fgSecondary, '99'),
      'sideBar.background': p.bgDark,
      'sideBar.foreground': p.fgSecondary,
      'sideBar.border': structuralBorder,
      'sideBarTitle.foreground': a,
      'sideBarSectionHeader.background': p.bgEditor,
      'sideBarSectionHeader.foreground': a,
      'sideBarSectionHeader.border': structuralBorder,
      'sideBarActivityBarTop.border': structuralBorder,
      'editorGroup.border': p.border,
      'editorGroup.dropBackground': p.border,
      'editorGroupHeader.noTabsBackground': p.bgEditor,
      'editorGroupHeader.tabsBackground': p.bgDark,
      'editorGroupHeader.tabsBorder': tabHeaderBorder,
      'editorGroup.focusedEmptyBorder': p.bgEditor,
      'tab.activeBackground': p.bgEditor,
      'tab.unfocusedActiveBackground': p.bgEditor,
      'tab.activeForeground': a,
      'tab.border': structuralBorder,
      'tab.activeBorder': activeTabBottomBorder,
      'tab.unfocusedActiveBorder': withAlpha(a, '77'),
      'tab.activeBorderTop': activeTabTopBorder,
      'tab.unfocusedActiveBorderTop': p.bgEditor,
      'tab.inactiveBackground': p.bgDark,
      'tab.inactiveForeground': p.fgSecondary,
      'tab.unfocusedActiveForeground': p.fgSecondary,
      'tab.unfocusedInactiveForeground': withAlpha(p.fgSecondary, '77'),
      'tab.hoverBackground': withAlpha(a, '22'),
      'tab.unfocusedHoverBackground': p.bgEditor,
      'tab.hoverBorder': a,
      'tab.unfocusedHoverBorder': withAlpha(a, '11'),
      'editorPane.background': p.bgEditor,
      'editor.background': p.bgEditor,
      'editor.foreground': p.fgEditor,
      'editorLineNumber.foreground': withAlpha(p.fgSecondary, '99'),
      'editorLineNumber.activeForeground': a,
      'editorCursor.background': p.bgEditor,
      'editorCursor.foreground': a,
      'editor.selectionBackground': withAlpha(p.border, '77'),
      'editor.selectionForeground': p.fgSecondary,
      'editor.inactiveSelectionBackground': withAlpha(p.fgSecondary, '55'),
      'editor.selectionHighlightBackground': withAlpha(p.border, '99'),
      'editor.selectionHighlightBorder': withAlpha(p.fgSecondary, '55'),
      'editor.wordHighlightBackground': withAlpha(p.fgSecondary, '55'),
      'editor.wordHighlightBorder': p.fgSecondary,
      'editor.wordHighlightStrongBackground': withAlpha(p.fgSecondary, '55'),
      'editor.wordHighlightStrongBorder': a,
      'editor.findMatchBackground': withAlpha(p.fgSecondary, '77'),
      'editor.findMatchHighlightBackground': withAlpha(p.fgSecondary, '55'),
      'editor.findRangeHighlightBackground': withAlpha(p.fgSecondary, '55'),
      'editor.findMatchBorder': a,
      'editor.findMatchHighlightBorder': withAlpha(a, '77'),
      'editor.findRangeHighlightBorder': withAlpha(a, '77'),
      'editor.hoverHighlightBackground': withAlpha(p.fgSecondary, '99'),
      'editor.lineHighlightBackground': withAlpha(p.border, '44'),
      'editor.lineHighlightBorder': withAlpha(p.border, '44'),
      'editorLink.activeForeground': a,
      'editor.rangeHighlightBackground': withAlpha(p.border, '44'),
      'editor.rangeHighlightBorder': withAlpha(p.fgSecondary, '55'),
      'editorWhitespace.foreground': withAlpha(p.fgSecondary, '77'),
      'editorIndentGuide.background1': withAlpha(p.purple, '33'),
      'editorIndentGuide.background2': withAlpha(p.cyan, '33'),
      'editorIndentGuide.background3': withAlpha(p.orange, '33'),
      'editorIndentGuide.background4': withAlpha(p.red, '33'),
      'editorIndentGuide.background5': withAlpha(p.blue, '33'),
      'editorIndentGuide.background6': withAlpha(p.green, '33'),
      'editorIndentGuide.activeBackground1': p.purple,
      'editorIndentGuide.activeBackground2': p.cyan,
      'editorIndentGuide.activeBackground3': p.orange,
      'editorIndentGuide.activeBackground4': p.red,
      'editorIndentGuide.activeBackground5': p.blue,
      'editorIndentGuide.activeBackground6': p.green,
      'editorRuler.foreground': p.border,
      'editorCodeLens.foreground': p.fgSecondary,
      'editorBracketMatch.background': withAlpha(p.fgSecondary, '55'),
      'editorBracketMatch.border': a,
      'editorOverviewRuler.border': p.border,
      'editorOverviewRuler.findMatchForeground': a,
      'editorOverviewRuler.rangeHighlightForeground': p.fgSecondary,
      'editorOverviewRuler.selectionHighlightForeground': p.fgSecondary,
      'editorOverviewRuler.wordHighlightForeground': p.fgSecondary,
      'editorOverviewRuler.wordHighlightStrongForeground': p.fgSecondary,
      'editorOverviewRuler.modifiedForeground': p.info,
      'editorOverviewRuler.addedForeground': p.success,
      'editorOverviewRuler.deletedForeground': p.error,
      'editorOverviewRuler.errorForeground': p.error,
      'editorOverviewRuler.warningForeground': p.warning,
      'editorOverviewRuler.infoForeground': p.info,
      'editorOverviewRuler.bracketMatchForeground': a,
      'editorError.foreground': p.error,
      'editorWarning.foreground': p.warning,
      'editorInfo.foreground': p.info,
      'editorHint.foreground': a,
      'editorGutter.background': p.bgEditor,
      'editorGutter.modifiedBackground': p.info,
      'editorGutter.addedBackground': p.success,
      'editorGutter.deletedBackground': p.error,
      'editorBracketHighlight.foreground1': p.purple,
      'editorBracketHighlight.foreground2': p.cyan,
      'editorBracketHighlight.foreground3': p.orange,
      'editorBracketHighlight.foreground4': p.red,
      'editorBracketHighlight.foreground5': p.blue,
      'editorBracketHighlight.foreground6': p.green,
      'editorBracketPairGuide.background1': withAlpha(p.purple, '33'),
      'editorBracketPairGuide.background2': withAlpha(p.cyan, '33'),
      'editorBracketPairGuide.background3': withAlpha(p.orange, '33'),
      'editorBracketPairGuide.background4': withAlpha(p.red, '33'),
      'editorBracketPairGuide.background5': withAlpha(p.blue, '33'),
      'editorBracketPairGuide.background6': withAlpha(p.green, '33'),
      'editorBracketPairGuide.activeBackground1': p.purple,
      'editorBracketPairGuide.activeBackground2': p.cyan,
      'editorBracketPairGuide.activeBackground3': p.orange,
      'editorBracketPairGuide.activeBackground4': p.red,
      'editorBracketPairGuide.activeBackground5': p.blue,
      'editorBracketPairGuide.activeBackground6': p.green,
      'diffEditor.insertedTextBackground': withAlpha(p.success, '22'),
      'diffEditor.insertedTextBorder': withAlpha(p.success, '44'),
      'diffEditor.removedTextBackground': withAlpha(p.error, '22'),
      'diffEditor.removedTextBorder': withAlpha(p.error, '44'),
      'diffEditor.border': p.border,
      'editorWidget.background': p.bgDark,
      'editorWidget.border': p.border,

      // Comments View & Widget (Pull Requests)
      'editorCommentsWidget.resolvedBorder': p.success,
      'editorCommentsWidget.unresolvedBorder': p.warning,
      'editorCommentsWidget.rangeBackground': withAlpha(p.border, '22'),
      'editorCommentsWidget.rangeActiveBackground': withAlpha(p.border, '44'),
      'editorCommentsWidget.replyInputBackground': p.bgEditor,
      'commentsView.resolvedIcon': p.success,
      'commentsView.unresolvedIcon': p.warning,
      'editorSuggestWidget.background': p.bgDark,
      'editorSuggestWidget.border': p.border,
      'editorSuggestWidget.foreground': p.fgSecondary,
      'editorSuggestWidget.highlightForeground': a,
      'editorSuggestWidget.selectedBackground': p.bgEditor,
      'editorHoverWidget.background': p.bgDark,
      'editorHoverWidget.border': p.border,
      'debugExceptionWidget.background': p.bgDark,
      'debugExceptionWidget.border': p.border,
      'editorMarkerNavigation.background': p.border,
      'editorMarkerNavigationError.background': p.error,
      'editorMarkerNavigationWarning.background': p.warning,
      'editorMarkerNavigationInfo.background': p.info,
      'peekView.border': a,
      'peekViewEditor.background': p.border,
      'peekViewEditorGutter.background': p.bgEditor,
      'peekViewEditor.matchHighlightBackground': p.fgSecondary,
      'peekViewEditor.matchHighlightBorder': a,
      'peekViewResult.background': p.border,
      'peekViewResult.fileForeground': p.fgSecondary,
      'peekViewResult.lineForeground': p.fgSecondary,
      'peekViewResult.matchHighlightBackground': withAlpha(a, '33'),
      'peekViewResult.selectionBackground': p.border,
      'peekViewResult.selectionForeground': p.fgSecondary,
      'peekViewTitle.background': p.border,
      'peekViewTitleDescription.foreground': p.fgSecondary,
      'peekViewTitleLabel.foreground': p.fgSecondary,
      'merge.currentHeaderBackground': withAlpha(p.info, '77'),
      'merge.currentContentBackground': withAlpha(p.info, '22'),
      'merge.incomingHeaderBackground': withAlpha(p.success, '77'),
      'merge.incomingContentBackground': withAlpha(p.success, '22'),
      'merge.border': p.fgSecondary,
      'merge.commonHeaderBackground': withAlpha(p.border, '77'),
      'merge.commonContentBackground': withAlpha(p.border, '55'),
      'editorOverviewRuler.currentContentForeground': p.info,
      'editorOverviewRuler.incomingContentForeground': p.success,
      'editorOverviewRuler.commonContentForeground': p.border,
      'panel.background': p.bgDark,
      'panel.border': structuralBorder,
      'panel.dropBorder': p.border,
      'panelTitle.activeBorder': a,
      'panelTitle.activeForeground': a,
      'panelTitle.inactiveForeground': p.fgSecondary,
      'panelInput.border': p.fgSecondary,
      'panelSection.border': p.border,
      'panelSection.dropBackground': p.border,
      'panelSectionHeader.background': p.bgEditor,
      'panelSectionHeader.foreground': a,
      'statusBar.background': p.bgDark,
      'statusBar.foreground': p.fgSecondary,
      'statusBar.border': structuralBorder,
      'statusBar.debuggingBackground': p.red,
      'statusBar.debuggingForeground': p.bgDark,
      'statusBar.noFolderBackground': a,
      'statusBar.noFolderForeground': p.bgDark,
      'statusBarItem.activeBackground': p.border,
      'statusBarItem.hoverBackground': p.bgHover,
      'statusBarItem.remoteBackground': p.bgDark,
      'statusBarItem.remoteForeground': p.fgSecondary,
      'titleBar.activeBackground': p.bgDark,
      'titleBar.activeForeground': p.fgSecondary,
      'titleBar.inactiveBackground': p.bgDark,
      'titleBar.inactiveForeground': p.fgSecondary,
      'titleBar.border': structuralBorder,
      'menubar.selectionForeground': p.fgSecondary,
      'menubar.selectionBackground': p.border,
      'menu.foreground': p.fgSecondary,
      'menu.background': p.bgDark,
      'menu.selectionForeground': p.fgSecondary,
      'menu.selectionBackground': p.border,
      'notificationCenter.border': p.bgDark,
      'notificationCenterHeader.foreground': p.fgSecondary,
      'notificationCenterHeader.background': p.bgDark,
      'notifications.foreground': p.fgSecondary,
      'notifications.background': p.bgDark,
      'notifications.border': p.bgDark,
      'notificationLink.foreground': a,
      'extensionButton.prominentBackground': a,
      'extensionButton.prominentForeground': p.bgEditor,
      'extensionButton.prominentHoverBackground': withAlpha(a, '99'),
      'pickerGroup.border': p.border,
      'pickerGroup.foreground': a,
      'quickInput.background': p.bgDark,
      'quickInput.foreground': p.fgSecondary,
      'quickInputList.focusBackground': p.border,
      'terminal.background': p.bgDark,
      'terminal.border': p.border,
      'terminal.foreground': p.fgEditor,
      'terminal.ansiBlack': p.border,
      'terminal.ansiBlue': p.info,
      'terminal.ansiBrightBlue': p.info,
      'terminal.ansiBrightCyan': p.info,
      'terminal.ansiBrightGreen': p.success,
      'terminal.ansiBrightBlack': p.syntax.comment,
      'terminal.ansiBrightMagenta': p.purple,
      'terminal.ansiBrightRed': p.error,
      'terminal.ansiBrightWhite': p.fgEditor,
      'terminal.ansiBrightYellow': a,
      'terminal.ansiCyan': p.info,
      'terminal.ansiGreen': p.success,
      'terminal.ansiMagenta': p.purple,
      'terminal.ansiRed': p.error,
      'terminal.ansiWhite': p.fgEditor,
      'terminal.ansiYellow': a,
      'terminal.selectionBackground': withAlpha(p.fgSecondary, '33'),
      'terminalCursor.background': p.bgDark,
      'terminalCursor.foreground': a,
      'debugToolBar.background': p.border,
      'debugToolBar.border': p.border,
      'debugIcon.breakpointForeground': p.error,
      'debugIcon.breakpointDisabledForeground': withAlpha(p.error, '77'),
      'debugIcon.breakpointUnverifiedForeground': withAlpha(p.error, '77'),
      'debugIcon.breakpointCurrentStackframeForeground': p.warning,
      'debugIcon.breakpointStackframeForeground': p.success,
      'debugIcon.startForeground': p.green,
      'debugIcon.pauseForeground': p.orange,
      'debugIcon.stopForeground': p.error,
      'debugIcon.disconnectForeground': p.error,
      'debugIcon.restartForeground': p.success,
      'debugIcon.stepOverForeground': p.blue,
      'debugIcon.stepIntoForeground': p.purple,
      'debugIcon.stepOutForeground': p.purple,
      'debugIcon.continueForeground': p.green,
      'debugIcon.stepBackForeground': p.blue,
      'debugConsole.infoForeground': p.info,
      'debugConsole.warningForeground': p.warning,
      'debugConsole.errorForeground': p.error,
      'debugConsole.sourceForeground': p.fgSecondary,
      'debugConsoleInputIcon.foreground': a,

      // Testing Colors (Test Explorer)
      'testing.iconPassed': p.success,
      'testing.iconFailed': p.error,
      'testing.iconErrored': p.error,
      'testing.iconSkipped': withAlpha(p.fgSecondary, '77'),
      'testing.iconQueued': p.warning,
      'testing.iconUnset': withAlpha(p.fgSecondary, '77'),
      'testing.runAction': p.success,
      'testing.peekBorder': p.error,
      'testing.message.error.decorationForeground': p.error,
      'testing.message.error.lineBackground': withAlpha(p.error, '22'),
      'testing.message.info.decorationForeground': p.info,
      'testing.message.info.lineBackground': withAlpha(p.info, '22'),

      // Chart Colors (Used in Settings editor, etc)
      'charts.foreground': p.fgSecondary,
      'charts.lines': withAlpha(p.fgSecondary, '55'),
      'charts.red': p.red,
      'charts.blue': p.blue,
      'charts.yellow': p.yellow,
      'charts.orange': p.orange,
      'charts.green': p.green,
      'charts.purple': p.purple,

      'walkThrough.embeddedEditorBackground': p.bgDark,

      // Settings Editor
      'settings.headerForeground': p.fgSecondary,
      'settings.modifiedItemIndicator': p.info,
      'settings.dropdownBackground': p.bgEditor,
      'settings.dropdownForeground': p.fgSecondary,
      'settings.dropdownBorder': p.border,
      'settings.dropdownListBorder': p.border,
      'settings.checkboxBackground': p.border,
      'settings.checkboxForeground': p.fgSecondary,
      'settings.checkboxBorder': p.border,
      'settings.textInputBackground': p.bgEditor,
      'settings.textInputForeground': p.fgSecondary,
      'settings.textInputBorder': p.border,
      'settings.numberInputBackground': p.border,
      'settings.numberInputForeground': p.fgSecondary,
      'settings.numberInputBorder': p.border,
      'breadcrumb.foreground': p.fgSecondary,
      'breadcrumb.background': p.bgEditor,
      'breadcrumb.focusForeground': p.fgSecondary,
      'breadcrumb.activeSelectionForeground': p.fgSecondary,
      'breadcrumbPicker.background': p.bgDark,

      // Sticky Scroll
      'editorStickyScroll.background': p.bgEditor,
      'editorStickyScrollHover.background': withAlpha(p.border, '33'),

      // Inlay Hints
      'editorInlayHint.foreground': withAlpha(p.fgSecondary, '99'),
      'editorInlayHint.background': withAlpha(p.border, '33'),
      'editorInlayHint.typeForeground': withAlpha(p.fgSecondary, '99'),

      // Minimap
      'minimap.findMatchHighlight': withAlpha(a, '55'),
      'minimap.selectionHighlight': withAlpha(p.fgSecondary, '33'),
      'minimap.errorHighlight': p.error,
      'minimap.warningHighlight': p.warning,

      // Command Center
      'commandCenter.background': p.bgDark,
      'commandCenter.border': p.border,
      'commandCenter.activeBackground': p.bgEditor,
      'commandCenter.foreground': p.fgSecondary,

      // Keybinding Label
      'keybindingLabel.background': withAlpha(p.fgSecondary, '22'),
      'keybindingLabel.foreground': p.fgSecondary,
      'keybindingLabel.border': withAlpha(p.fgSecondary, '44'),
      'keybindingLabel.bottomBorder': withAlpha(p.fgSecondary, '44'),

      // Source Control Graph (Nativo de VS Code - Nuevo)
      'scmGraph.historyItemHoverAdditionsForeground': p.success,
      'scmGraph.historyItemHoverDeletionsForeground': p.error,
      'scmGraph.historyItemRefColor': a,
      'scmGraph.historyItemRemoteRefColor': p.purple,
      'scmGraph.historyItemBaseRefColor': p.orange,
      'scmGraph.historyItemHoverLabelForeground': p.bgDark,
      'scmGraph.foreground1': a,
      'scmGraph.foreground2': p.purple,
      'scmGraph.foreground3': p.orange,
      'scmGraph.foreground4': p.blue,
      'scmGraph.foreground5': p.green,

      // Git Colors (Conflictos y estados)
      'gitDecoration.addedResourceForeground': p.success,
      'gitDecoration.modifiedResourceForeground': p.info,
      'gitDecoration.deletedResourceForeground': p.error,
      'gitDecoration.renamedResourceForeground': p.orange,
      'gitDecoration.stageModifiedResourceForeground': p.info,
      'gitDecoration.stageDeletedResourceForeground': p.error,
      'gitDecoration.untrackedResourceForeground': p.success,
      'gitDecoration.ignoredResourceForeground': withAlpha(p.fgSecondary, '55'),
      'gitDecoration.conflictingResourceForeground': p.red,
      'gitDecoration.submoduleResourceForeground': p.blue,
    },
    tokenColors: [
      // -----------------------------------------------------------------------
      // GLOBAL SETTINGS & PUNCTUATION
      // -----------------------------------------------------------------------
      {
        name: 'Comment',
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          foreground: p.syntax.comment,
        },
      },
      {
        name: 'Punctuation - Delimiters, Brackets, Separators',
        scope: [
          'punctuation',
          'punctuation.definition.string',
          'punctuation.definition.variable',
          'punctuation.definition.parameters',
          'punctuation.definition.array',
          'punctuation.definition.function-parameters',
          'punctuation.definition.block',
          'punctuation.separator',
          'punctuation.terminator',
          'punctuation.section',
        ],
        settings: {
          foreground: p.fgPrimary,
        },
      },
      {
        name: 'Punctuation - Accessors (Dots, Arrows)',
        scope: ['punctuation.accessor', 'keyword.operator.accessor'],
        settings: {
          foreground: p.red,
        },
      },
      {
        name: 'Punctuation - Template Expression',
        scope: [
          'punctuation.definition.template-expression',
          'punctuation.section.embedded',
        ],
        settings: {
          foreground: p.red,
        },
      },

      // -----------------------------------------------------------------------
      // LITERALS & CONSTANTS
      // -----------------------------------------------------------------------
      {
        name: 'String',
        scope: ['string', 'meta.embedded.assembly'],
        settings: {
          foreground: p.syntax.string,
        },
      },
      {
        name: 'Number',
        scope: 'constant.numeric',
        settings: {
          foreground: p.syntax.number,
        },
      },
      {
        name: 'Boolean',
        scope: 'constant.language.boolean',
        settings: {
          foreground: p.syntax.constant,
        },
      },
      {
        name: 'Null / Undefined',
        scope: 'constant.language.null',
        settings: {
          foreground: p.syntax.constant,
        },
      },
      {
        name: 'Built-in constant (this, super, self)',
        scope: ['constant.language', 'variable.language'],
        settings: {
          foreground: p.syntax.constant,
          fontStyle: 'italic',
        },
      },
      {
        name: 'User-defined constant',
        scope: ['constant.character', 'constant.other'],
        settings: {
          foreground: p.syntax.constant,
        },
      },
      {
        name: 'Escaped Character',
        scope: 'constant.character.escape',
        settings: {
          foreground: p.purple,
        },
      },
      {
        name: 'RegExp',
        scope: ['string.regexp', 'constant.character.escape.regexp'],
        settings: {
          foreground: p.syntax.string,
        },
      },
      {
        name: 'RegExp Groups',
        scope: [
          'punctuation.definition.group.regexp',
          'punctuation.definition.character-class.regexp',
        ],
        settings: {
          foreground: p.red,
        },
      },

      // -----------------------------------------------------------------------
      // VARIABLES & IDENTIFIERS
      // -----------------------------------------------------------------------
      {
        name: 'Variable',
        scope: ['variable', 'meta.definition.variable'],
        settings: {
          foreground: p.blue,
        },
      },
      {
        name: 'Variable - Readonly / Constant',
        scope: 'variable.other.constant',
        settings: {
          foreground: p.orange,
        },
      },
      {
        name: 'Object Property',
        scope: [
          'variable.other.property',
          'support.variable.property',
          'variable.object.property',
          'variable.other.object.property',
          'variable.other.constant.property',
        ],
        settings: {
          foreground: p.blue,
        },
      },
      {
        name: 'Object Key (JS/TS)',
        scope: ['meta.object-literal.key'],
        settings: {
          foreground: p.blue,
        },
      },

      // -----------------------------------------------------------------------
      // KEYWORDS & OPERATORS
      // -----------------------------------------------------------------------
      {
        name: 'Keyword',
        scope: ['keyword', 'keyword.control'],
        settings: {
          foreground: p.syntax.keyword,
        },
      },
      {
        name: 'Keyword Operator',
        scope: 'keyword.operator',
        settings: {
          foreground: p.red,
        },
      },
      {
        name: 'Logical/Arithmetic Operator',
        scope: [
          'keyword.operator.arithmetic',
          'keyword.operator.logical',
          'keyword.operator.comparison',
          'keyword.operator.assignment',
        ],
        settings: {
          foreground: p.red,
        },
      },
      {
        name: 'Keyword New',
        scope: 'keyword.control.new',
        settings: {
          foreground: p.cyan,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Storage (const, let, var, class, function)',
        scope: ['storage', 'storage.type', 'storage.modifier'],
        settings: {
          foreground: p.syntax.keyword,
          fontStyle: 'italic',
        },
      },

      // -----------------------------------------------------------------------
      // FUNCTIONS & METHODS
      // -----------------------------------------------------------------------
      {
        name: 'Function Declaration',
        scope: ['entity.name.function', 'meta.function-call.generic'],
        settings: {
          foreground: p.syntax.function,
        },
      },
      {
        name: 'Method Declaration',
        scope: 'entity.name.function.member',
        settings: {
          foreground: p.syntax.function,
        },
      },
      {
        name: 'Function Call',
        scope: ['variable.function', 'meta.function-call'],
        settings: {
          foreground: p.syntax.function,
        },
      },
      {
        name: 'Function Argument',
        scope: 'variable.parameter',
        settings: {
          foreground: p.syntax.parameter,
          fontStyle: 'italic',
        },
      },

      // -----------------------------------------------------------------------
      // CLASSES, TYPES & INTERFACES
      // -----------------------------------------------------------------------
      {
        name: 'Class Name',
        scope: ['entity.name.class', 'entity.name.type.class'],
        settings: {
          foreground: p.syntax.function,
          fontStyle: 'underline',
        },
      },
      {
        name: 'Inherited Class',
        scope: 'entity.other.inherited-class',
        settings: {
          foreground: p.syntax.function,
          fontStyle: 'italic underline',
        },
      },
      {
        name: 'Type Name / Interface',
        scope: ['entity.name.type', 'entity.name.type.interface'],
        settings: {
          foreground: p.blue,
        },
      },
      {
        name: 'Primitive Types (void, int, bool...)',
        scope: ['storage.type.primitive', 'support.type.primitive'],
        settings: {
          foreground: p.blue,
          fontStyle: 'italic',
        },
      },

      // -----------------------------------------------------------------------
      // LIBRARY / SUPPORT (Standard Library)
      // -----------------------------------------------------------------------
      {
        name: 'Library Function',
        scope: ['support.function', 'support.macro'],
        settings: {
          foreground: p.blue,
        },
      },
      {
        name: 'Library Constant',
        scope: 'support.constant',
        settings: {
          foreground: p.purple,
        },
      },
      {
        name: 'Library Class/Type',
        scope: ['support.type', 'support.class'],
        settings: {
          foreground: p.blue,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Library Variable',
        scope: 'support.other.variable',
        settings: {
          foreground: p.white,
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: HTML / XML
      // -----------------------------------------------------------------------
      {
        name: 'HTML Tag',
        scope: ['entity.name.tag', 'meta.tag.sgml'],
        settings: {
          foreground: p.red,
        },
      },
      {
        name: 'HTML Tag Brackets',
        scope: [
          'punctuation.definition.tag.begin',
          'punctuation.definition.tag.end',
          'punctuation.definition.tag.html',
          'punctuation.definition.tag.xml',
        ],
        settings: {
          foreground: p.red,
        },
      },
      {
        name: 'HTML Attribute',
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: p.green,
          fontStyle: 'italic',
        },
      },
      {
        name: 'HTML Entities',
        scope: ['constant.character.entity', 'punctuation.definition.entity'],
        settings: {
          foreground: p.purple,
        },
      },
      {
        name: 'HTML DOCTYPE',
        scope: 'meta.tag.sgml.doctype',
        settings: {
          foreground: p.syntax.comment,
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: CSS / SCSS / LESS
      // -----------------------------------------------------------------------
      {
        name: 'CSS Selector Tag',
        scope: 'entity.name.tag.css',
        settings: {
          foreground: p.red,
        },
      },
      {
        name: 'CSS Selector Class',
        scope: 'entity.other.attribute-name.class.css',
        settings: {
          foreground: p.green,
        },
      },
      {
        name: 'CSS Selector ID',
        scope: 'entity.other.attribute-name.id.css',
        settings: {
          foreground: p.orange,
        },
      },
      {
        name: 'CSS Property Name',
        scope: ['support.type.property-name.css', 'meta.property-name.css'],
        settings: {
          foreground: p.blue,
        },
      },
      {
        name: 'CSS Property Value',
        scope: [
          'support.constant.property-value.css',
          'meta.property-value.css',
        ],
        settings: {
          foreground: p.purple,
        },
      },
      {
        name: 'CSS Units',
        scope: ['keyword.other.unit.css', 'keyword.other.unit.px.css'],
        settings: {
          foreground: p.red,
        },
      },
      {
        name: 'CSS Pseudo-classes/elements',
        scope: 'entity.other.attribute-name.pseudo-class.css',
        settings: {
          foreground: p.green,
          fontStyle: 'italic',
        },
      },
      {
        name: 'CSS Media Rule',
        scope: 'keyword.control.at-rule.media.css',
        settings: {
          foreground: p.red,
          fontStyle: 'italic',
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: JSON
      // -----------------------------------------------------------------------
      {
        name: 'JSON Key',
        scope: [
          'support.type.property-name.json',
          'string.json.key.string',
          'meta.structure.dictionary.json > string.quoted.json',
        ],
        settings: {
          foreground: p.blue,
        },
      },
      {
        name: 'JSON Value String',
        scope: 'string.quoted.json',
        settings: {
          foreground: p.yellow,
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: MARKDOWN
      // -----------------------------------------------------------------------
      {
        name: 'Markdown Heading',
        scope: ['markup.heading', 'entity.name.section.markdown'],
        settings: {
          foreground: p.red,
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markdown Link Text',
        scope: [
          'string.other.link.title.markdown',
          'string.other.link.description.markdown',
        ],
        settings: {
          foreground: p.blue,
        },
      },
      {
        name: 'Markdown Link URL',
        scope: [
          'markup.underline.link.markdown',
          'markup.underline.link.image.markdown',
        ],
        settings: {
          foreground: p.purple,
        },
      },
      {
        name: 'Markdown Code Block',
        scope: ['markup.raw.block.markdown', 'markup.raw.inline.markdown'],
        settings: {
          foreground: p.green,
        },
      },
      {
        name: 'Markdown Quote',
        scope: 'markup.quote.markdown',
        settings: {
          foreground: p.syntax.comment,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Markdown List',
        scope: [
          'markup.list.unnumbered.markdown',
          'markup.list.numbered.markdown',
        ],
        settings: {
          foreground: p.red,
        },
      },
      {
        name: 'Markdown Bold',
        scope: 'markup.bold.markdown',
        settings: {
          fontStyle: 'bold',
          foreground: p.orange,
        },
      },
      {
        name: 'Markdown Italic',
        scope: 'markup.italic.markdown',
        settings: {
          fontStyle: 'italic',
          foreground: p.orange,
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: PYTHON
      // -----------------------------------------------------------------------
      {
        name: 'Python Decorator',
        scope: [
          'meta.function.decorator.python',
          'entity.name.function.decorator.python',
        ],
        settings: {
          foreground: p.orange,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Python Self/Cls',
        scope: 'variable.parameter.function.language.special.self.python',
        settings: {
          foreground: p.purple,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Python Magic Methods',
        scope: 'support.function.magic.python',
        settings: {
          foreground: p.blue,
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: JAVASCRIPT / TYPESCRIPT EXTRAS
      // -----------------------------------------------------------------------
      {
        name: 'JS/TS Import/Export',
        scope: [
          'keyword.control.import',
          'keyword.control.export',
          'keyword.control.from',
        ],
        settings: {
          foreground: p.red,
          fontStyle: 'italic',
        },
      },
      {
        name: 'JS/TS Decorator',
        scope: 'meta.decorator',
        settings: {
          foreground: p.orange,
        },
      },
      {
        name: 'TS Primitive Types',
        scope: 'support.type.primitive.ts',
        settings: {
          foreground: p.blue,
          fontStyle: 'italic',
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: GO
      // -----------------------------------------------------------------------
      {
        name: 'Go Storage/Type',
        scope: 'storage.type.go',
        settings: {
          foreground: p.blue,
          fontStyle: 'italic',
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: RUST
      // -----------------------------------------------------------------------
      {
        name: 'Rust Lifetime',
        scope: 'entity.name.lifetime.rust',
        settings: {
          foreground: p.orange,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Rust Macro',
        scope: 'support.macro.rust',
        settings: {
          foreground: p.blue,
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: SHELL / BASH
      // -----------------------------------------------------------------------
      {
        name: 'Shell Variable',
        scope: 'variable.other.normal.shell',
        settings: {
          foreground: p.fgPrimary,
        },
      },
      {
        name: 'Shell Builtin',
        scope: 'support.function.builtin.shell',
        settings: {
          foreground: p.blue,
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: SQL
      // -----------------------------------------------------------------------
      {
        name: 'SQL Keywords',
        scope: 'keyword.other.DML.sql',
        settings: {
          foreground: p.red,
          fontStyle: 'bold',
        },
      },
      {
        name: 'SQL Functions',
        scope: 'support.function.aggregate.sql',
        settings: {
          foreground: p.green,
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: CONFIG FILES (YAML, TOML, INI)
      // -----------------------------------------------------------------------
      {
        name: 'YAML/TOML Keys',
        scope: [
          'entity.name.tag.yaml',
          'keyword.key.toml',
          'keyword.other.definition.ini',
          'support.type.property-name.toml',
          'variable.other.key.toml',
          'entity.name.tag.toml',
          'source.toml keyword.key',
          'source.toml support.type.property-name',
        ],
        settings: {
          foreground: p.red,
        },
      },
      {
        name: 'YAML Anchors',
        scope: 'entity.name.type.anchor.yaml',
        settings: {
          foreground: p.orange,
        },
      },
      {
        name: 'TOML/INI Sections',
        scope: [
          'entity.name.section.group-title.toml',
          'entity.name.section.group-title.ini',
          'entity.name.section.table.toml',
          'source.toml entity.name.section',
        ],
        settings: {
          foreground: p.green,
          fontStyle: 'bold',
        },
      },
      {
        name: 'TOML Dates',
        scope: 'constant.other.date.toml',
        settings: {
          foreground: p.purple,
        },
      },
      {
        name: 'TOML Assignments',
        scope: 'punctuation.separator.key-value.toml',
        settings: {
          foreground: p.fgPrimary,
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: MAKEFILE
      // -----------------------------------------------------------------------
      {
        name: 'Makefile Target',
        scope: 'entity.name.function.target.makefile',
        settings: {
          foreground: p.green,
        },
      },
      {
        name: 'Makefile Prerequisite',
        scope: 'variable.other.makefile',
        settings: {
          foreground: p.orange,
        },
      },

      // -----------------------------------------------------------------------
      // GIT / DIFF
      // -----------------------------------------------------------------------
      {
        name: 'Diff Header',
        scope: ['meta.diff', 'meta.diff.header'],
        settings: {
          foreground: p.syntax.diffHeader,
        },
      },
      {
        name: 'Deleted',
        scope: 'markup.deleted',
        settings: {
          foreground: p.red,
        },
      },
      {
        name: 'Inserted',
        scope: 'markup.inserted',
        settings: {
          foreground: p.green,
        },
      },
      {
        name: 'Changed',
        scope: 'markup.changed',
        settings: {
          foreground: p.orange,
        },
      },

      // -----------------------------------------------------------------------
      // MARKDOWN & DOCUMENTATION
      // -----------------------------------------------------------------------
      {
        name: 'Markdown Heading 1',
        scope: [
          'heading.1.markdown',
          'markup.heading.1.markdown',
          'heading.1.markdown entity.name.section.markdown',
          'markup.heading.1.markdown entity.name.section.markdown',
          'heading.1.markdown punctuation.definition.heading.markdown',
          'markup.heading.1.markdown punctuation.definition.heading.markdown',
        ],
        settings: {
          foreground: a,
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markdown Heading 2',
        scope: [
          'heading.2.markdown',
          'markup.heading.2.markdown',
          'heading.2.markdown entity.name.section.markdown',
          'markup.heading.2.markdown entity.name.section.markdown',
          'heading.2.markdown punctuation.definition.heading.markdown',
          'markup.heading.2.markdown punctuation.definition.heading.markdown',
        ],
        settings: {
          foreground: p.purple,
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markdown Heading 3',
        scope: [
          'heading.3.markdown',
          'markup.heading.3.markdown',
          'heading.3.markdown entity.name.section.markdown',
          'markup.heading.3.markdown entity.name.section.markdown',
          'heading.3.markdown punctuation.definition.heading.markdown',
          'markup.heading.3.markdown punctuation.definition.heading.markdown',
        ],
        settings: {
          foreground: p.orange,
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markdown Heading 4',
        scope: [
          'heading.4.markdown',
          'markup.heading.4.markdown',
          'heading.4.markdown entity.name.section.markdown',
          'markup.heading.4.markdown entity.name.section.markdown',
          'heading.4.markdown punctuation.definition.heading.markdown',
          'markup.heading.4.markdown punctuation.definition.heading.markdown',
        ],
        settings: {
          foreground: p.red,
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markdown Heading 5',
        scope: [
          'heading.5.markdown',
          'markup.heading.5.markdown',
          'heading.5.markdown entity.name.section.markdown',
          'markup.heading.5.markdown entity.name.section.markdown',
          'heading.5.markdown punctuation.definition.heading.markdown',
          'markup.heading.5.markdown punctuation.definition.heading.markdown',
        ],
        settings: {
          foreground: p.blue,
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markdown Heading 6',
        scope: [
          'heading.6.markdown',
          'markup.heading.6.markdown',
          'heading.6.markdown entity.name.section.markdown',
          'markup.heading.6.markdown entity.name.section.markdown',
          'heading.6.markdown punctuation.definition.heading.markdown',
          'markup.heading.6.markdown punctuation.definition.heading.markdown',
        ],
        settings: {
          foreground: p.green,
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markdown Headings General',
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          foreground: a,
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markdown Bold',
        scope: ['markup.bold', 'punctuation.definition.bold.markdown'],
        settings: {
          foreground: p.orange,
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markdown Italic',
        scope: ['markup.italic', 'punctuation.definition.italic.markdown'],
        settings: {
          foreground: p.purple,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Markdown Inline Code',
        scope: 'markup.inline.raw',
        settings: {
          foreground: p.green,
          fontStyle: 'italic',
        },
      },
      {
        name: 'Markdown Blockquotes',
        scope: 'markup.quote',
        settings: {
          foreground: withAlpha(p.fgSecondary, 'cc'),
          fontStyle: 'italic',
        },
      },
      {
        name: 'Markdown Lists',
        scope: ['markup.list punctuation.definition.list_item', 'markup.list'],
        settings: {
          foreground: p.cyan,
        },
      },
      {
        name: 'Markdown Links',
        scope: ['markup.underline.link', 'string.other.link'],
        settings: {
          foreground: p.blue,
        },
      },
      {
        name: 'Markdown Link Text',
        scope: 'string.other.link.title',
        settings: {
          foreground: p.green,
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: CSS / SCSS / LESS
      // -----------------------------------------------------------------------
      {
        name: 'CSS/SCSS Property Name',
        scope: [
          'support.type.property-name.css',
          'support.type.property-name.scss',
          'support.type.property-name.less',
        ],
        settings: {
          foreground: p.blue,
        },
      },
      {
        name: 'CSS/SCSS Property Value',
        scope: [
          'support.constant.property-value.css',
          'support.constant.property-value.scss',
          'support.constant.property-value.less',
        ],
        settings: {
          foreground: p.orange,
        },
      },
      {
        name: 'CSS/SCSS Units',
        scope: [
          'keyword.other.unit.css',
          'keyword.other.unit.scss',
          'keyword.other.unit.less',
        ],
        settings: {
          foreground: p.red,
        },
      },
      {
        name: 'CSS/SCSS ID Selector',
        scope: 'entity.other.attribute-name.id.css',
        settings: {
          foreground: p.orange,
          fontStyle: 'bold',
        },
      },
      {
        name: 'CSS/SCSS Class Selector',
        scope: 'entity.other.attribute-name.class.css',
        settings: {
          foreground: p.green,
        },
      },
      {
        name: 'CSS/SCSS Tag Selector',
        scope: 'entity.name.tag.css',
        settings: {
          foreground: p.red,
        },
      },
      {
        name: 'CSS/SCSS Pseudo-Class',
        scope: 'entity.other.attribute-name.pseudo-class.css',
        settings: {
          foreground: p.purple,
          fontStyle: 'italic',
        },
      },

      // -----------------------------------------------------------------------
      // LANGUAGE SPECIFIC: JSON
      // -----------------------------------------------------------------------
      {
        name: 'JSON Property Name',
        scope: 'support.type.property-name.json',
        settings: {
          foreground: p.blue,
        },
      },
      {
        name: 'JSON Property Value (String)',
        scope: 'string.quoted.double.json',
        settings: {
          foreground: p.yellow,
        },
      },

      // -----------------------------------------------------------------------
      // INVALID / DEPRECATED
      // -----------------------------------------------------------------------
      {
        name: 'Invalid',
        scope: 'invalid',
        settings: {
          fontStyle: 'strikethrough',
          foreground: p.error,
        },
      },
      {
        name: 'Deprecated',
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'strikethrough',
          foreground: p.orange,
        },
      },
    ],
    semanticHighlighting: true,
    semanticTokenColors: {
      class: p.syntax.function,
      interface: p.blue,
      enum: p.purple,
      function: p.syntax.function,
      variable: p.fgPrimary,
      'variable.readonly': p.orange,
      parameter: p.syntax.parameter,
      property: p.blue,
      comment: p.syntax.comment,
      string: p.syntax.string,
      keyword: p.syntax.keyword,
      number: p.syntax.number,
      regexp: p.syntax.string,
      operator: p.red,
      namespace: p.blue,
      type: p.blue,
      struct: p.purple,
      macro: p.blue,
      event: p.yellow,
      'property.readonly': p.blue,
      'parameter.label': p.orange,
    },
  };
}
