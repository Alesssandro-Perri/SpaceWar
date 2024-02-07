@echo off
setlocal
rem python -m SimpleHTTPServer 8080
start "" http://localhost:8000
set SCRIPT_PATH=%~dp0
cd SpaceWar\4_SpaceWar
rem cd SpaceWar\4_SpaceWar
"%SCRIPT_PATH%python38\python" server.py

endlocal