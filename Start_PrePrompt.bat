@echo off
setlocal EnableExtensions

set "ROOT_DIR=%~dp0"
set "BRIDGE_DIR=%APPDATA%\espanso\config\text_automation_tool"
set "BRIDGE_STARTED=0"

where python >nul 2>nul
if errorlevel 1 (
  echo [PrePrompt] Python is not installed. Please install Python first.
  echo [PrePrompt] Opening Prompt Bank UI only...
  start "" "%ROOT_DIR%index.html"
  pause
  exit /b 1
)

if exist "%BRIDGE_DIR%" (
  pushd "%BRIDGE_DIR%" >nul

  if exist "app.py" (
    start "" /min pythonw "app.py"
    set "BRIDGE_STARTED=1"
  ) else if exist "main.py" (
    start "" /min pythonw "main.py"
    set "BRIDGE_STARTED=1"
  ) else if exist "bridge.py" (
    start "" /min pythonw "bridge.py"
    set "BRIDGE_STARTED=1"
  ) else if exist "server.py" (
    start "" /min pythonw "server.py"
    set "BRIDGE_STARTED=1"
  )

  popd >nul
)

if "%BRIDGE_STARTED%"=="1" (
  echo [PrePrompt] PromptTyper bridge start command sent.
) else (
  echo [PrePrompt] PromptTyper bridge script not found in:
  echo             %BRIDGE_DIR%
  echo [PrePrompt] Prompt Bank will open in offline/fallback mode.
)

start "" "%ROOT_DIR%index.html"
echo [PrePrompt] Prompt Bank opened.
timeout /t 2 >nul
exit /b 0
