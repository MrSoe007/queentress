// ==========================================
// MODULE: DREAM PLANETS
// ==========================================
function openDreamCreator() { document.getElementById('dream-modal').classList.add('active'); }
function closeDreamCreator() { document.getElementById('dream-modal').classList.remove('active'); document.getElementById('dream-form').reset(); }

function saveDream(event) {
    event.preventDefault();
    const title = document.getElementById('dream-title').value;
    const type = document.getElementById('dream-type').value;
    const planet = document.createElement('div');
    planet.className = `dream-sphere planet-${type}`;
    const label = document.createElement('div');
    label.className = 'dream-sphere-label';
    label.innerText = title;
    planet.appendChild(label);
    planet.onclick = () => alert(`🪐 Planet: ${title}\nType: ${type.toUpperCase()}`);
    document.getElementById('planet-container').appendChild(planet);
    closeDreamCreator();
}
