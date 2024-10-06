const solarSystemContainer = document.getElementById('solar-system-container');

// Function to create a planet with an orbit around the Sun
function createPlanet(name, size, imageUrl, orbitRadius, orbitTime, zIndex, targetUrl) {
    const planetContainer = document.createElement('div');
    planetContainer.classList.add('planet-container');
    planetContainer.style.width = orbitRadius * 2 + 'px';
    planetContainer.style.height = orbitRadius * 2 + 'px';
    planetContainer.style.animationDuration = orbitTime + 's'; // Set orbit time for rotation
    planetContainer.style.position = 'absolute';
    planetContainer.style.top = '50%';
    planetContainer.style.left = '50%';
    planetContainer.style.transform = 'translate(-50%, -50%)'; // Center the orbit container
    planetContainer.style.zIndex = zIndex; // Set z-index for the container

    // Create planet
    const planet = document.createElement('div');
    planet.classList.add('planet', name);
    planet.style.width = size + 'px';
    planet.style.height = size + 'px';
    planet.style.backgroundImage = `url(${imageUrl})`; // Set the background image of the planet
    planet.style.backgroundSize = 'contain'; // Ensure the image covers the entire div
    planet.style.backgroundPosition = 'center'; // Center the image in the div
    planet.style.zIndex = zIndex; // Set z-index for planet

    planet.style.position = 'absolute';
    planet.style.top = '50%';
    planet.style.left = '100%'; // Positioned at the edge of the orbit container
    planet.style.transform = 'translate(-50%, -50%)';

    // Redirect user to the specific page for each planet when clicked, opening it in a new tab
    planet.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent triggering the container click
        window.open(targetUrl, '_blank'); // Open the target URL in a new tab
    });

    planetContainer.appendChild(planet);
    solarSystemContainer.appendChild(planetContainer);
}


createPlanet('mercury', 20, './images/mercury.png', 70, 30, 8, './planet fixtures/mercury.html'); 
createPlanet('venus', 30, './images/venus.png', 95, 62, 7, './planet fixtures/venus.html');
createPlanet('earth', 35, './images/earth.png', 120, 91, 6, './planet fixtures/earth.html');
createPlanet('mars', 25, './images/mars.png', 145, 172, 5, './planet fixtures/mars.html');
createPlanet('jupiter', 50, './images/jupiter.png', 180, 271, 4, './planet fixtures/jupiter.html');
createPlanet('saturn', 85, './images/saturn.png', 220, 673, 3, './planet fixtures/saturn.html');
createPlanet('uranus', 50, './images/uranus.png', 260, 1918, 2, './planet fixtures/uranus.html');
createPlanet('neptune', 40, './images/neptune.png', 300, 3762, 1, './planet fixtures/neptune.html');


window.onload = function() {
    // Scroll down 50% of the page height when the page loads
    window.scrollTo(0, document.body.scrollHeight * 0.3);
};
