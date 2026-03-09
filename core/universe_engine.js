// ==========================================
// CORE: UNIVERSE ENGINE
// ==========================================
function handleAuth(event) { 
    event.preventDefault(); 
    showScreen('profile-setup-screen'); 
}

function updateAvatar() {
    const nameInput = document.getElementById('display-name').value;
    document.getElementById('avatar-initial').innerText = nameInput ? nameInput.charAt(0).toUpperCase() : '🌌';
}

function handleProfileSetup(event) {
    event.preventDefault();
    const displayName = document.getElementById('display-name').value;
    const dob = document.getElementById('dob').value;
    
    document.getElementById('dash-username').innerText = displayName;
    document.getElementById('dash-avatar-initial').innerText = displayName.charAt(0).toUpperCase();
    document.getElementById('my-relation-avatar').innerText = displayName.charAt(0).toUpperCase();
    
    calculateOrbitAge(dob);
    showScreen('universe-dashboard-screen');
    
    // Show Nav Bar ONLY after login success
    document.getElementById('main-bottom-nav').classList.remove('nav-hidden');
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(nav => nav.classList.remove('active'));
    navItems[0].classList.add('active');
}

function calculateOrbitAge(dobString) {
    const dob = new Date(dobString);
    setInterval(() => {
        const diffTime = Math.abs(new Date() - dob);
        document.getElementById('dash-orbit-time').innerText = (diffTime / (1000 * 60 * 60 * 24 * 365.25)).toFixed(8);
    }, 100);
}
