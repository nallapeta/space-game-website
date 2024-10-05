const solarSystemContainer = document.getElementById('solar-system-container');

function createPlanet(name, size, color, distance) {
    const planet = document.createElement('div');
    planet.classList.add('planet');
    planet.style.width = size + 'px';
    planet.style.height = size + 'px';
    planet.style.backgroundColor = color;
    planet.style.position = 'absolute';
    planet.style.borderRadius = '50%';
    planet.style.top = (distance * 5) + 'px';
    planet.style.left = '50%';
    solarSystemContainer.appendChild(planet);

    planet.addEventListener('click', () => {
        alert(`You clicked on planet ${name}!`);
    });
}

// Create planets
createPlanet('Mercury', 30, '#b0b0b0', 1);
createPlanet('Venus', 50, '#f5a623', 2);
createPlanet('Earth', 60, '#0077be', 3);
createPlanet('Mars', 40, '#e44d2e', 4);
createPlanet('Jupiter', 100, '#f7b236', 5);
createPlanet('Saturn', 80, '#f9c74f', 6);
createPlanet('Uranus', 60, '#76d7c4', 7);
createPlanet('Neptune', 60, '#5271ff', 8);
