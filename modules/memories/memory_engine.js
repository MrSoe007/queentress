// ==========================================
// MODULE: MEMORY GALAXY
// ==========================================
function openMemoryCreator() { document.getElementById('memory-modal').classList.add('active'); }
function closeMemoryCreator() { document.getElementById('memory-modal').classList.remove('active'); document.getElementById('memory-form').reset(); }

function saveMemory(event) {
    event.preventDefault();
    const title = document.getElementById('memory-title').value;
    const desc = document.getElementById('memory-desc').value;
    
    const star = document.createElement('div');
    star.className = 'memory-star';
    star.innerText = '⭐'; // Adds the actual star shape
    
    star.style.left = Math.floor(Math.random() * 80) + 10 + '%';
    star.style.top = Math.floor(Math.random() * 60) + 20 + '%';
    
    const label = document.createElement('div');
    label.className = 'memory-star-label';
    label.innerText = title;
    star.appendChild(label);
    
    star.onclick = () => alert(`🌟 Memory: ${title}\n\n${desc}`);
    document.getElementById('star-container').appendChild(star);
    closeMemoryCreator();
}
