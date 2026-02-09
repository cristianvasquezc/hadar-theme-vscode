# Change Log

All notable changes to the "hadar-theme-vscode" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [1.0.2] - 2026-02-09

- **New Feature:** Enabled **Semantic Highlighting** for richer and more accurate code coloring. Variables, parameters, interfaces, and properties now have distinct colors based on code intelligence.
- **New Feature:** Added native Bracket Pair Colorization support (`editorBracketHighlight`). Nested brackets now cycle through the theme's vibrant palette for better code readability.
- **New Feature:** Added Rainbow Indentation Guides. Indent lines now match the bracket colors, with subtle transparency for depth and vibrant highlighting for the active block.
- **Improvement:** Enhanced language support for **CSS/SCSS** (distinct colors for property names, values, units, and selectors) and **JSON**.
- **Improvement:** Refined syntax highlighting for better contrast and readability across all supported languages.
- **Improvement:** Professional Markdown styling. Headings now use a dynamic color scheme: H1 matches the theme's accent color (e.g., Mint, Golden), H2 is Purple, H3 is Orange, H4 is Cyan, etc.
- **Improvement:** Enhanced Status Bar visibility. "Debugging" mode now uses a standard Red background for better alert visibility, and "No Folder" mode now matches the theme's Accent Color for consistent branding.
- **Improvement:** Customized Quick Input (Command Palette) styling. The command palette now integrates seamlessly with a dark background and bordered focus state.
- **Fix:** Resolved file naming case sensitivity issue causing theme load failure on VS Code Web (`Hadar-color-theme.json` -> `hadar-color-theme.json`).

## [1.0.1] - 2026-02-08

- Added support for VS Code Web (vscode.dev & github.dev) by including `extensionKind` in `package.json`.

## [1.0.0] - 2026-02-06

- Initial release of Hadar Theme.
- Includes two high-contrast dark theme variants: "Hadar" (borderless) and "Hadar Bordered".
- Features "Hadar: Change Theme Color" command to customize accent colors (Mint, Cherry, Golden, Lime, or Custom Hex).
- Optimized for long coding sessions with carefully selected syntax highlighting colors.
