# Brainscape RTL Fixer

A Chrome extension that automatically fixes RTL (Right-to-Left) text display for RTL languages (Persian, Arabic, Hebrew, Urdu, etc.) on Brainscape.com.

## Features

- **Automatic Detection**: Intelligently detects RTL characters in flashcards
- **Smart RTL Application**: Applies right-to-left formatting only to RTL text, leaving LTR content untouched
- **Dynamic Support**: Works seamlessly with Brainscape's dynamic card loading
- **Zero Configuration**: Works automatically after installation - no settings required
- **Universal RTL Support**: Works with Persian (Farsi), Arabic, Hebrew, Urdu, and other RTL scripts

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top-right corner)
4. Click **Load unpacked**
5. Select the extension folder
6. Visit [Brainscape](https://www.brainscape.com) and study your RTL flashcards!

## How It Works

The extension monitors Brainscape's flashcard interface and:
1. Scans text content in question and answer cards
2. Detects RTL Unicode characters (Persian, Arabic, Hebrew, etc.)
3. Automatically applies RTL styling to RTL content
4. Preserves LTR formatting for English and other LTR languages

## Technical Details

- **Manifest Version**: 3
- **Permissions**: None required
- **Supported Sites**: brainscape.com only
- **Supported Languages**: All RTL scripts including Persian, Arabic, Hebrew, Urdu, Pashto, Sindhi, and more

## File Structure

```
├── manifest.json       # Extension configuration
├── content.js          # Main detection and RTL application logic
├── rtl-styles.css      # RTL styling rules
├── icon16.png          # Extension icon (16x16)
├── icon48.png          # Extension icon (48x48)
└── icon128.png         # Extension icon (128x128)
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - Feel free to use and modify.
