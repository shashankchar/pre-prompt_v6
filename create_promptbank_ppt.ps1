$ErrorActionPreference = "Stop"

$outPath = "C:\Users\LENOVO\Desktop\prompt bank\PromptBank_Project_Presentation.pptx"

function Add-TitleContentSlide {
  param(
    [Parameter(Mandatory = $true)] $Presentation,
    [Parameter(Mandatory = $true)] [int] $Index,
    [Parameter(Mandatory = $true)] [string] $Title,
    [Parameter(Mandatory = $true)] [string[]] $Lines
  )

  $ppLayoutText = 2
  $slide = $Presentation.Slides.Add($Index, $ppLayoutText)
  $slide.Shapes.Title.TextFrame.TextRange.Text = $Title
  $slide.Shapes.Placeholders.Item(2).TextFrame.TextRange.Text = ($Lines -join "`r")
}

$ppt = New-Object -ComObject PowerPoint.Application
$ppt.Visible = -1

$presentation = $ppt.Presentations.Add()

# Slide 1 - Title
$ppLayoutTitle = 1
$slide1 = $presentation.Slides.Add(1, $ppLayoutTitle)
$slide1.Shapes.Title.TextFrame.TextRange.Text = "Prompt Bank Project"
$slide1.Shapes.Placeholders.Item(2).TextFrame.TextRange.Text = "Netflix-style Prompt Library + PromptTyper Integration`rFinal Project Presentation"

# Slide 2 - Problem
Add-TitleContentSlide -Presentation $presentation -Index 2 -Title "Problem Statement" -Lines @(
  "Prompts were scattered in random files/notes",
  "Searching and reusing prompts was slow",
  "Every new prompt add cheyyali ante manual code edits",
  "PromptTyper software integration was not direct"
)

# Slide 3 - Solution
Add-TitleContentSlide -Presentation $presentation -Index 3 -Title "Our Solution" -Lines @(
  "Built a centralized Prompt Bank web app",
  "Cinematic browsing with featured slider",
  "Search + category + quick filters for fast discovery",
  "One-click Save to PromptTyper for workflow speed"
)

# Slide 4 - Objectives
Add-TitleContentSlide -Presentation $presentation -Index 4 -Title "Project Objectives" -Lines @(
  "Make prompt management easy for non-technical users",
  "Allow add/edit/delete without touching code",
  "Connect web prompts to existing Python PromptTyper",
  "Keep system local-first and offline-friendly"
)

# Slide 5 - Tech Stack
Add-TitleContentSlide -Presentation $presentation -Index 5 -Title "Tech Stack" -Lines @(
  "Frontend: HTML, CSS, Vanilla JavaScript",
  "Integration: Local HTTP bridge (127.0.0.1:8765)",
  "Storage: prompt_bank_data.json + browser localStorage",
  "Media: Local images + intro audio"
)

# Slide 6 - Architecture
Add-TitleContentSlide -Presentation $presentation -Index 6 -Title "Architecture Overview" -Lines @(
  "UI Layer -> Home, search, detail, admin panels",
  "Logic Layer -> render, filters, slider engine, validations",
  "Bridge Layer -> health, load/save, import endpoints",
  "Data Layer -> local JSON prompt records + user meta"
)

# Slide 7 - Key Features
Add-TitleContentSlide -Presentation $presentation -Index 7 -Title "Key Features" -Lines @(
  "Netflix-style hero carousel (arrows + dots + auto-slide)",
  "Smart search across title/category/tagline/content",
  "Quick filters: All, Pinned, Favorites, Recent",
  "Prompt details: copy + Save to PromptTyper"
)

# Slide 8 - Admin Module
Add-TitleContentSlide -Presentation $presentation -Index 8 -Title "Add Prompt / Admin Module" -Lines @(
  "Mandatory fields: Title + Prompt content",
  "Optional: Image for slider appearance",
  "Edit and Delete from saved prompts list",
  "Poster preview + slider featured toggle"
)

# Slide 9 - Database Build
Add-TitleContentSlide -Presentation $presentation -Index 9 -Title "Database - How We Built It" -Lines @(
  "Local JSON database model for rapid deployment",
  "Schema: id, title, category, tagline, prompt, images, mainImage, featuredInSlider",
  "Normalization step ensures consistent records",
  "Meta state (pinned/favorite/recent) in localStorage"
)

# Slide 10 - API Flow
Add-TitleContentSlide -Presentation $presentation -Index 10 -Title "API / Bridge Flow" -Lines @(
  "GET /health -> connection status",
  "GET /prompt-bank-data -> load library",
  "POST /prompt-bank-data -> persist updates",
  "POST /import-prompt -> send selected prompt to PromptTyper"
)

# Slide 11 - Intro Experience
Add-TitleContentSlide -Presentation $presentation -Index 11 -Title "Intro Experience & Audio" -Lines @(
  "Intro overlay preloads visuals",
  "Audio plays segment from 5s to 10s",
  "Smooth fade-in and fade-out effect",
  "Fallback: Tap anywhere to play intro if autoplay blocked"
)

# Slide 12 - Issues and Fixes
Add-TitleContentSlide -Presentation $presentation -Index 12 -Title "Challenges We Solved" -Lines @(
  "No style issue -> fixed structure and CSS binding",
  "Slider drift bug -> stable transform calculation",
  "Failed fetch errors -> bridge health checks + timeout",
  "Layout space waste -> optimized hero and control placement"
)

# Slide 13 - Testing
Add-TitleContentSlide -Presentation $presentation -Index 13 -Title "Testing Checklist" -Lines @(
  "Slider movement and dot sync validated",
  "Search/filter combinations tested",
  "Add/Edit/Delete prompt CRUD tested",
  "Online/Offline PromptTyper state handling tested"
)

# Slide 14 - Future Scope
Add-TitleContentSlide -Presentation $presentation -Index 14 -Title "Future Improvements" -Lines @(
  "Move to SQLite/PostgreSQL for scale",
  "Image storage optimization (avoid heavy base64)",
  "User roles and cloud sync",
  "Analytics dashboard for prompt usage"
)

# Slide 15 - Conclusion
Add-TitleContentSlide -Presentation $presentation -Index 15 -Title "Conclusion" -Lines @(
  "Prompt Bank transforms prompt chaos into structured workflow",
  "Usable for both technical and non-technical users",
  "Direct integration with PromptTyper improves productivity",
  "Project is complete, practical, and ready for extension"
)

$ppSaveAsOpenXMLPresentation = 24
$presentation.SaveAs($outPath, $ppSaveAsOpenXMLPresentation)
$presentation.Close()
$ppt.Quit()

Write-Output "PPT_CREATED: $outPath"
