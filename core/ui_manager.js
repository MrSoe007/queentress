function showScreen(screenId) {
    // ပထမဆုံး screen အားလုံးကို ဖျောက်မည်
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // ရွေးချယ်လိုက်သော screen ကို ဖော်မည်
    const activeScreen = document.getElementById(screenId);
    if (activeScreen) {
        activeScreen.classList.add('active');
        console.log("Navigated to: " + screenId);
    }
}
