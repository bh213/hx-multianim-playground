@echo off

echo Building project
CALL haxe playground.hxml

if %ERRORLEVEL% EQU 0 (
    echo Build successful! 
    echo Starting web server on localhost:8080...
    npx serve -s . -l 8080
    
) else (
    echo Build failed with error code %ERRORLEVEL%

) 