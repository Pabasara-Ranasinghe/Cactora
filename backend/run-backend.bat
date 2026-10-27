
@echo off

title Cactora Backend

echo ==============================
echo Stopping existing backend...
echo ==============================

for /f "tokens=5" %%a in ('netstat -ano ^| findstr :8081 ^| findstr LISTENING') do (
    taskkill /PID %%a /F >nul 2>&1
)

echo.
echo ==============================
echo Starting Cactora backend...
echo ==============================
echo.

set "DB_USERNAME=root"

if not defined DB_PASSWORD (
    set /p DB_PASSWORD=Enter MySQL root password:
)

if not defined GEMINI_API_KEY (
    echo Loading Gemini API key...
    for /f "delims=" %%a in ('powershell -NoProfile -Command "[Environment]::GetEnvironmentVariable('GEMINI_API_KEY','User')"') do set "GEMINI_API_KEY=%%a"
)

if not defined GEMINI_API_KEY (
    echo ERROR: GEMINI_API_KEY is missing.
    echo Configure it in your Windows User environment variables.
    pause
    exit /b 1
)

call mvn spring-boot:run

pause
