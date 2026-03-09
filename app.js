document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(s => s.classList.remove('active'));
        document.getElementById('profile-setup-screen').classList.add('active');
    }, 3000);
});
