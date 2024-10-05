const solarSystemContainer = document.getElementById('solar-system-container');

// Function to create planets in different orbits
function createPlanet(className, size, color, orbitRadius, orbitTime) {
    const planet = document.createElement('div');
    planet.classList.add('planet', className);
    planet.style.width = size + 'px';
    planet.style.height = size + 'px';
    planet.style.backgroundColor = color;
    planet.style.transformOrigin = orbitRadius + 'px'; // Orbit distance from the Sun
    planet.style.animationDuration = orbitTime + 's'; // Orbit speed

    solarSystemContainer.appendChild(planet);
}

// Create planets with different orbits and times
createPlanet('mercury', 20, 'grey', 70, 8);    // Orbiting closest to the Sun
createPlanet('venus', 30, 'orange', 100, 10);  // Second orbit
createPlanet('earth', 35, 'blue', 130, 12);    // Third orbit
createPlanet('mars', 25, 'red', 160, 14);      // Fourth orbit
createPlanet('jupiter', 50, 'brown', 200, 18); // Fifth orbit
createPlanet('saturn', 45, 'goldenrod', 250, 20); // Sixth orbit
createPlanet('uranus', 40, 'lightblue', 300, 22); // Seventh orbit
createPlanet('neptune', 40, 'royalblue', 350, 24); // Eighth orbit
