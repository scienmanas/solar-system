import * as THREE from 'three';

export function createAsteroidBelt(numAsteroids = 500, innerRadius, outerRadius ) {
    const asteroidBelt = new THREE.Group();
    
    for (let i = 0 ; i < numAsteroids, i++) {
        const asterodGeometry = new THREE.IcosahedronGeometry(Math.random() * 0.03, 1); // Random small size
        const astroidGeometry = new THREE.MeshStandardMaterial({
            color: 0x888888, // gray colour
        })

        // Random position in range
        const radius = THREE.MathUtils.lerp(innerRadius, outerRadius, Math.random();)
    }
}