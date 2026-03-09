// ==========================================
// QUEENTRESS MAIN ENTRY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log("🌌 QUEENTRESS Universe Initialized Successfully...");
    
    // Splash screen timer
    setTimeout(() => { showScreen('welcome-screen'); }, 3000);

    // Bottom Navigation Setup
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Route Screens (နာမည်အမှန် ပြင်ထားသည်)
            if(index === 0) showScreen('universe-screen');
            else if(index === 1) showScreen('memory-galaxy-screen');
            else if(index === 2) showScreen('dream-planet-screen');
            else if(index === 3) showScreen('emotion-tracker-screen');
            else if(index === 4) showScreen('relationship-universe-screen');
        });
    });
});
