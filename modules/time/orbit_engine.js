function saveCapsule(event) {
    event.preventDefault();
    const title = document.getElementById('capsule-title').value;
    const message = document.getElementById('capsule-message').value;
    const unlockDateStr = document.getElementById('capsule-date').value;
    if(!unlockDateStr) return;

    const unlockDate = new Date(unlockDateStr);
    const today = new Date();
    today.setHours(0,0,0,0); unlockDate.setHours(0,0,0,0);
    const isLocked = unlockDate > today;
    
    const item = document.createElement('div');
    item.className = `capsule-item ${isLocked ? 'locked' : ''}`;
    const icon = isLocked ? '🔒' : '🔓';
    const dateText = isLocked ? `Unlocks on: ${unlockDateStr}` : `Unlocked since: ${unlockDateStr}`;
    
    item.innerHTML = `<div class="capsule-info"><div class="capsule-title">${title}</div><div class="capsule-date">${dateText}</div></div><div class="capsule-icon">${icon}</div>`;
    item.onclick = () => {
        if (isLocked) alert(`⏱️ TIME VAULT LOCKED!\n\nThis capsule is sealed until ${unlockDateStr}. No peeking allowed!`);
        else alert(`🔓 ${title}\n\n${message}`);
    };
    
    const list = document.getElementById('capsule-list');
    list.insertBefore(item, list.firstChild);
    document.getElementById('capsule-form').reset();
    alert("Time Capsule Sealed! ⏳");
}
