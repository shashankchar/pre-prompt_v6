Option Explicit

Dim shell, fso, projectDir, hiddenLauncher, cmd
Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

projectDir = fso.GetParentFolderName(WScript.ScriptFullName)
hiddenLauncher = projectDir & "\Start_PrePrompt_Hidden.vbs"

If fso.FileExists(hiddenLauncher) Then
  cmd = "wscript.exe """ & hiddenLauncher & """"
  shell.Run cmd, 0, False
Else
  MsgBox "Launcher file not found: Start_PrePrompt_Hidden.vbs", vbExclamation, "PrePrompt"
End If
