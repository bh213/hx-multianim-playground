@echo off

echo Building project with demo-js.hxml...
CALL haxe demo-js.hxml

if %ERRORLEVEL% EQU 0 (
    echo Build successful! 

    if %ERRORLEVEL% EQU 0 (
        echo Starting web server on localhost:8080...
        npx serve -s . -l 8080
    ) else (
        echo Failed to copy FileLoader.js

    )
) else (
    echo Build failed with error code %ERRORLEVEL%

) 