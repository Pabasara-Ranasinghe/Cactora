
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

set /p DB_PASSWORD=Enter MySQL root password:
set "DB_USERNAME=root"

echo.
echo Checking JWT secret...

if not defined JWT_SECRET (
    echo ERROR: JWT_SECRET is not configured.
    echo Please configure a secure JWT secret before starting.
    pause
    exit /b 1
)

call mvn spring-boot:run

pause