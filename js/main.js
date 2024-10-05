const solarSystemContainer = document.getElementById('solar-system-container');

function createPlanet(name, size, color, distance, orbitTime) {
    const planet = document.createElement('div');
    planet.classList.add('planet');
    planet.style.width = size + 'px';
    planet.style.height = size + 'px';
    planet.style.backgroundColor = color;
    planet.style.animationDuration = orbitTime + 's'; // Make orbit time unique
    planet.style.borderRadius = '50%';
    planet.style.transformOrigin = distance + 'px';

    solarSystemContainer.appendChild(planet);

    // Add interaction on click
    planet.addEventListener('click', () => {
        alert(`Upcoming fixtures for ${name}`);
    });
}

// Create planets with orbit times
createPlanet('Mercury', 30, '#b0b0b0', 100, 5);
createPlanet('Venus', 50, '#f5a623', 150, 7);
createPlanet('Earth', 60, '#0077be', 200, 9);
createPlanet('Mars', 40, '#e44d2e', 250, 11);
createPlanet('Jupiter', 100, '#f7b236', 300, 14);
createPlanet('Saturn', 80, '#f9c74f', 350, 17);
createPlanet('Uranus', 60, '#76d7c4', 400, 20);
createPlanet('Neptune', 60, '#5271ff', 450, 22);
