function showScreen(screenId) {
    console.log("Navigating to: " + screenId);
    // Screen အားလုံးကို ဖျောက်မည်
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // ရွေးချယ်ထားသော Screen ကို ဖော်မည်
    const activeScreen = document.getElementById(screenId);
    if (activeScreen) {
        activeScreen.classList.add('active');
    }
}
