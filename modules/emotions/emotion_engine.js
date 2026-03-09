function selectEmotion(type, element) {
    document.querySelectorAll('.emotion-orb').forEach(orb => orb.classList.remove('active'));
    element.classList.add('active');
    document.getElementById('selected-emotion').value = type;
}

function saveEmotion() {
    const emotion = document.getElementById('selected-emotion').value;
    const note = document.getElementById('emotion-note').value;
    if(!emotion) { alert("Please select an emotion star first! 🌟"); return; }
    
    const moodData = {
        'happy': { emoji: '😊', color: '#ffd700' }, 'calm':  { emoji: '😌', color: '#00ffff' },
        'sad':   { emoji: '😢', color: '#6495ed' }, 'angry': { emoji: '😡', color: '#ff4500' }
    };
    const data = moodData[emotion];
    const now = new Date();
    const timeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.style.borderLeftColor = data.color;
    item.innerHTML = `<div class="timeline-emoji">${data.emoji}</div><div class="timeline-content"><div class="timeline-date">${timeString}</div><div class="timeline-note">${note || 'Felt ' + emotion + ' in the universe.'}</div></div>`;
    
    const timeline = document.getElementById('emotion-timeline');
    timeline.insertBefore(item, timeline.firstChild);
    
    document.getElementById('selected-emotion').value = ''; 
    document.getElementById('emotion-note').value = '';
    document.querySelectorAll('.emotion-orb').forEach(orb => orb.classList.remove('active'));
    alert("Emotion Logged Successfully! ❤️");
}
