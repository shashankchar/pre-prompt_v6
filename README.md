# PrePrompt

PrePrompt is a full local project that combines:
- **PromptTyper** (Python text automation tool running in background)
- **Prompt Bank** (Netflix-style web UI to browse/manage prompts)

Users can search prompts, open details, and click **Save to PromptTyper** to send prompt content into PromptTyper workflow.

## Features

- Cinematic hero slider with dots/arrows
- Search by title/category/tagline/content
- Quick filters: All, Pinned, Favorites, Recent
- Add/Edit/Delete prompt support
- Optional image support for slider cards
- PromptTyper bridge connection status
- Intro overlay with audio segment + fallback tap behavior

## Project Structure

- `index.html` - main UI layout
- `styles.css` - full styling and responsive layout
- `script.js` - app logic, filtering, slider, bridge API calls
- `prompt_bank_data.json` - local prompt storage snapshot
- `*.mp3`, `*.jpeg` - media assets used by UI

## Requirements

### Required to run Prompt Bank UI
- Modern browser (Chrome / Edge)
- PromptTyper bridge app running at `http://127.0.0.1:8765`

### Required for optional PPT generation scripts
- Python 3.10+
- `python-pptx` package (see `requirements.txt`)

## How to Run

### Easiest for normal users

1. Double-click `PrePrompt.vbs`
2. It auto starts bundled `bin/PromptTyper.exe` (if available)
3. It opens Prompt Bank (`index.html`)
4. No terminal steps required

### Manual method

1. Start your PromptTyper app/bridge first.
2. Open this folder:
   - `C:\Users\LENOVO\Desktop\prompt bank`
3. Open `index.html` in browser.
4. If bridge is active, top status shows:
   - `PromptTyper connection: active`

## GitHub Use (for Friends)

Your friends can:
1. Download ZIP from GitHub repo
2. Extract folder
3. Start PromptTyper bridge on their system
4. Open `index.html`

If bridge is not running, Prompt Bank still opens with fallback data, but **Save to PromptTyper** won’t work.

## Notes

- Title + Prompt are mandatory when adding records.
- Images are optional.
- Large base64 images can increase file size significantly.
