$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$outputPath = "C:/Users/BOne/.gemini/antigravity-ide/brain/eac7515e-eb79-41b3-8d22-785454c8e49f/page.png"
Start-Process -FilePath $chromePath -ArgumentList "--headless=old", "--disable-gpu", "--screenshot=$outputPath", "--window-size=1280,4000", "http://localhost:3000" -Wait
Write-Host "Chrome screenshot done"
