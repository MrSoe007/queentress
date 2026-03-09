// ==========================================
// CORE: UI MANAGER
// ==========================================
let currentAuthMode = 'login'; 

function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    const activeScreen = document.getElementById(screenId);
    if (activeScreen) { activeScreen.classList.add('active'); }
}

// Auth UI Controls
function showAuth(mode) { showScreen('auth-screen'); setAuthMode(mode); }
function toggleAuthMode() { setAuthMode(currentAuthMode === 'login' ? 'register' : 'login'); }
function setAuthMode(mode) {
    currentAuthMode = mode;
    const isLogin = mode === 'login';
    document.getElementById('auth-title').innerText = isLogin ? "Enter Universe" : "Create Universe";
    document.getElementById('auth-subtitle').innerText = isLogin ? "Welcome back, traveler." : "Begin your cosmic journey.";
    document.getElementById('auth-submit-btn').innerText = isLogin ? "Login" : "Register";
    document.getElementById('auth-switch-text').innerText = isLogin ? "New traveler?" : "Already have a universe?";
    document.getElementById('auth-switch-link').innerText = isLogin ? "Create Universe" : "Enter Universe";
}
