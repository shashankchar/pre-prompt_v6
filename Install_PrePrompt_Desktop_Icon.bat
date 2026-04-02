@echo off
setlocal EnableExtensions

set "ROOT_DIR=%~dp0"
set "VBS_PATH=%ROOT_DIR%Start_PrePrompt_Hidden.vbs"
set "PS1_PATH=%ROOT_DIR%_create_shortcut.ps1"
set "SHORTCUT_NAME=PrePrompt.lnk"

if not exist "%VBS_PATH%" (
  echo [PrePrompt] Start_PrePrompt_Hidden.vbs not found.
  pause
  exit /b 1
)

> "%PS1_PATH%" echo $desktop = [Environment]::GetFolderPath('Desktop')
>> "%PS1_PATH%" echo $shortcutPath = Join-Path $desktop '%SHORTCUT_NAME%'
>> "%PS1_PATH%" echo $wsh = New-Object -ComObject WScript.Shell
>> "%PS1_PATH%" echo $sc = $wsh.CreateShortcut($shortcutPath)
>> "%PS1_PATH%" echo $sc.TargetPath = 'wscript.exe'
>> "%PS1_PATH%" echo $sc.Arguments = '"' + '%VBS_PATH%' + '"'
>> "%PS1_PATH%" echo $sc.WorkingDirectory = '%ROOT_DIR%'
>> "%PS1_PATH%" echo $sc.IconLocation = 'shell32.dll,220'
>> "%PS1_PATH%" echo $sc.Description = 'Launch PrePrompt'
>> "%PS1_PATH%" echo $sc.Save()

powershell -ExecutionPolicy Bypass -File "%PS1_PATH%"
set "PS_EXIT=%ERRORLEVEL%"
del "%PS1_PATH%" >nul 2>nul

if not "%PS_EXIT%"=="0" (
  echo [PrePrompt] Failed to create desktop icon.
  pause
  exit /b 1
)

echo [PrePrompt] Desktop icon created: %SHORTCUT_NAME%
pause
exit /b 0
