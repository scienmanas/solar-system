import * as THREE from 'three';

export function createAsteroidBelt({ numAsteroids = 500, innerRadius, outerRadius } = {}) {
    const asteroidBelt = new THREE.Group();

    for (let i = 0; i < numAsteroids; i++) {
        const asteroidGeometry = new THREE.IcosahedronGeometry(Math.random() * 0.05, 1); // Random small size
        const astroidMaterial = new THREE.MeshStandardMaterial({
            color: 0x888888, // gray colour
        })

        // Make asteroid
        const asteroid = new THREE.Mesh(asteroidGeometry, astroidMaterial);

        // Random position in range
        const radius = THREE.MathUtils.lerp(innerRadius, outerRadius, Math.random());
        const theta = Math.random() * Math.PI * 2 // Rnadom azimuthal angle
        const inclination = (Math.random() - 0.5) * 0.1 // Slight inclination

        // Set the position
        asteroid.position.setFromSpherical(
            new THREE.Spherical(
                radius,
                inclination + Math.PI / 2,
                theta
            )
        );

        // Random rotation
        asteroid.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

        // Add the asteroid to the group
        asteroidBelt.add(asteroid);
    }

    // Fnnction to animate the asteroids
    function animateAsteroids() {
        asteroidBelt.children.forEach(asteroid => {
            // Get the current coordinates
            const spherical = new THREE.Spherical();
            spherical.setFromVector3(asteroid.position);

            // Increment the azimuthal angle for a smooth orbit
            spherical.theta += 0.001;
            asteroid.position.setFromSpherical(spherical);
        })
    }

    return {
        asteroidBelt,
        animateAsteroids
    };
}