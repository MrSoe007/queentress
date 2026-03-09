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
function showAuth(mode) { 
    showScreen('auth-screen'); 
    setAuthMode(mode); 
}

function toggleAuthMode() { 
    setAuthMode(currentAuthMode === 'login' ? 'register' : 'login'); 
}

function setAuthMode(mode) {
    currentAuthMode = mode;
    const isLogin = mode === 'login';
    document.getElementById('auth-title').innerText = isLogin ? "Enter Universe" : "Create Universe";
    document.getElementById('auth-subtitle').innerText = isLogin ? "Welcome back, traveler." : "Begin your cosmic journey.";
    document.getElementById('auth-submit-btn').innerText = isLogin ? "Login" : "Register";
    document.getElementById('auth-switch-text').innerText = isLogin ? "New traveler?" : "Already have a universe?";
    document.getElementById('auth-switch-link').innerText = isLogin ? "Create Universe" : "Enter Universe";
}

// ==========================================
// 🚀 MISSING FUNCTIONS (ဒီအပိုင်းတွေ ပျောက်နေတာပါ)
// ==========================================

// Login / Register ခလုတ်ကို နှိပ်လျှင်
function handleAuth(event) {
    event.preventDefault(); // Page မပြောင်းသွားအောင် တားထားခြင်း
    
    if (currentAuthMode === 'register') {
        // အကောင့်သစ်ဆိုရင် Profile Setup ကိုသွားမည်
        showScreen('profile-setup-screen');
    } else {
        // Login ဝင်တာဆိုရင် Universe Map ကြီးဆီ တန်းသွားမည်
        showScreen('universe-screen');
        // အောက်ခြေက Menu Bar ကို ဖော်ပေးမည်
        document.getElementById('main-bottom-nav').classList.remove('nav-hidden');
    }
}

// Ignite Universe (Profile Setup) ခလုတ်ကို နှိပ်လျှင်
function handleProfileSetup(event) {
    event.preventDefault(); 
    
    // Universe Map အလန်းကြီးဆီ သွားမည်
    showScreen('universe-screen');
    
    // အောက်ခြေက Menu Bar ကို ဖော်ပေးမည်
    document.getElementById('main-bottom-nav').classList.remove('nav-hidden');
    
    console.log("Universe Ignited successfully!");
}

// နာမည်ရိုက်ထည့်တဲ့အခါ ပုံလေးပြောင်းရန် (Optional)
function updateAvatar() {
    const nameInput = document.getElementById('display-name').value;
    const avatarPlaceholder = document.getElementById('avatar-initial');
    if(nameInput.length > 0) {
        avatarPlaceholder.innerText = nameInput.charAt(0).toUpperCase();
    } else {
        avatarPlaceholder.innerText = "🌌";
    }
}
