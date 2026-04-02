@echo off
setlocal EnableExtensions

set "SHORTCUT=%USERPROFILE%\Desktop\PrePrompt.lnk"

if exist "%SHORTCUT%" (
  del "%SHORTCUT%"
  echo [PrePrompt] Desktop icon removed.
) else (
  echo [PrePrompt] Desktop icon not found.
)

pause
exit /b 0
