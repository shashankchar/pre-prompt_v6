Option Explicit

Dim shell, fso, projectDir, batPath, cmd
Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

projectDir = fso.GetParentFolderName(WScript.ScriptFullName)
batPath = projectDir & "\Start_PrePrompt.bat"

If Not fso.FileExists(batPath) Then
  MsgBox "Start_PrePrompt.bat not found in project folder.", vbExclamation, "PrePrompt"
  WScript.Quit 1
End If

cmd = "cmd.exe /c """ & batPath & """"
shell.Run cmd, 0, False
