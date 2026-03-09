document.addEventListener('DOMContentLoaded', () => {
    console.log("App Started...");
    // Force move from Splash to Welcome after 3 seconds
    setTimeout(() => {
        showScreen('welcome-screen');
    }, 3000);
});
