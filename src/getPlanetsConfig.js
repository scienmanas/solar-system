import * as THREE from 'three';
import { imageSources } from './data/imageSources';
import { orbitalParameters } from './data/orbitalParamerts';
import { speed } from './data/rotationAndRevolution';

const textureLoader = new THREE.TextureLoader();
export function planetsConfig() {
    // Mercury
    const mercuryGroup = new THREE.Group()
    const mercuryGeometry = new THREE.IcosahedronGeometry(orbitalParameters.mercury.size, 12);
    const mercuryMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load(imageSources.mercury.img)
    })
    const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
    mercuryGroup.add(mercury);
    mercuryGroup.position.setFromSpherical(
        new THREE.Spherical(
            orbitalParameters.mercury.radius,
            orbitalParameters.mercury.phi,
            orbitalParameters.mercury.theta
        )
    );

    // Venus
    const venusGroup = new THREE.Group()
    const venusGeometry = new THREE.IcosahedronGeometry(orbitalParameters.venus.size, 12);
    const venusMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load(imageSources.venus.img)
    });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venusGroup.add(venus);

    const venusAtmosphere = new THREE.MeshStandardMaterial({
        opacity: 0.6,
        map: textureLoader.load(imageSources.venus.atmosphere),
        blending: THREE.AdditiveBlending,
    })
    const venusAtmosphereMesh = new THREE.Mesh(venusGeometry, venusAtmosphere);
    venusGroup.add(venusAtmosphereMesh);
    venusGroup.position.setFromSpherical(
        new THREE.Spherical(
            orbitalParameters.venus.radius,
            orbitalParameters.venus.phi,
            orbitalParameters.venus.theta
        )
    );

    // Earth
    const earthGroup = new THREE.Group();
    const earthGeometry = new THREE.IcosahedronGeometry(orbitalParameters.earth.size, 12);
    const earthMaterial = new THREE.MeshPhongMaterial({
        map: textureLoader.load(imageSources.earth.img),
        specular: textureLoader.load(imageSources.earth.specular),
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earthGroup.add(earth)

    // lights - for night
    const earthNightlightsMaterials = new THREE.MeshStandardMaterial({
        map: textureLoader.load(imageSources.earth.night),
        blending: THREE.AdditiveBlending,
    })
    const earthNightlightsMesh = new THREE.Mesh(earthGeometry, earthNightlightsMaterials);
    earthGroup.add(earthNightlightsMesh)

    // Add clouds
    const earthCloudsMaterial = new THREE.MeshStandardMaterial({
        opacity: 0.6,
        map: textureLoader.load(imageSources.earth.clouds),
        blending: THREE.AdditiveBlending
    })
    const earthCloudsMesh = new THREE.Mesh(earthGeometry, earthCloudsMaterial)
    earthCloudsMesh.scale.setScalar(1.005)
    earthGroup.add(earthCloudsMesh)
    earthGroup.position.setFromSpherical(
        new THREE.Spherical(
            orbitalParameters.earth.radius,
            orbitalParameters.earth.phi,
            orbitalParameters.earth.theta
        )
    )
    earthGroup.rotation.z = -23.4 * Math.PI / 100;

    // Mars
    const marsGroup = new THREE.Group()
    const marsGeometry = new THREE.IcosahedronGeometry(orbitalParameters.mars.size, 12);
    const marsMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load(imageSources.mars.img)
    });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);
    marsGroup.add(mars);
    marsGroup.position.setFromSpherical(
        new THREE.Spherical(
            orbitalParameters.mars.radius,
            orbitalParameters.mars.phi,
            orbitalParameters.mars.theta
        )
    );

    const mercuryOrbit = addRevolutionLine(orbitalParameters.mercury.radius);
    const venusOrbit = addRevolutionLine(orbitalParameters.venus.radius);
    const earthOrbit = addRevolutionLine(orbitalParameters.earth.radius);
    const marsOrbit = addRevolutionLine(orbitalParameters.mars.radius);


    const rotationBaseSpeed = 0.002
    const revolutionBaseSpeed = 0.02
    function animatePlanets() {

        // Mercury
        mercury.rotation.y += speed.rotationSpeeds.mercury * rotationBaseSpeed;
        mercuryGroup.position.setFromSpherical(
            new THREE.Spherical(
                orbitalParameters.mercury.radius,
                orbitalParameters.mercury.phi,
                orbitalParameters.mercury.theta += speed.revolutionSpeeds.mercury * revolutionBaseSpeed
            )
        );

        // Venus
        venus.rotation.y += speed.rotationSpeeds.venus * rotationBaseSpeed;
        venusAtmosphereMesh.rotation.y += speed.rotationSpeeds.venus * rotationBaseSpeed;
        venusGroup.position.setFromSpherical(
            new THREE.Spherical(
                orbitalParameters.venus.radius,
                orbitalParameters.venus.phi,
                orbitalParameters.venus.theta += speed.revolutionSpeeds.venus * revolutionBaseSpeed
            )
        );

        // Earth
        earth.rotation.y += speed.rotationSpeeds.earth * rotationBaseSpeed;
        earthNightlightsMesh.rotation.y += speed.rotationSpeeds.earth * rotationBaseSpeed;
        earthCloudsMesh.rotation.y += 1.5 * speed.rotationSpeeds.earth * rotationBaseSpeed;
        earthGroup.position.setFromSpherical(
            new THREE.Spherical(
                orbitalParameters.earth.radius,
                orbitalParameters.earth.phi,
                orbitalParameters.earth.theta += speed.revolutionSpeeds.earth * revolutionBaseSpeed
            )
        );

        mars.rotation.y += speed.rotationSpeeds.mars * rotationBaseSpeed;
        marsGroup.position.setFromSpherical(
            new THREE.Spherical(
                orbitalParameters.mars.radius,
                orbitalParameters.mars.phi,
                orbitalParameters.mars.theta += speed.revolutionSpeeds.mars * revolutionBaseSpeed
            )
        );

    }

    // Return all the planets group
    return {
        planets: [mercuryGroup, venusGroup, earthGroup, marsGroup
        ],
        orbits: [mercuryOrbit, venusOrbit, earthOrbit, marsOrbit],
        animatePlanets
    }
}


function addRevolutionLine(radius) {
    const material  = new THREE.LineBasicMaterial( { color: 0xffffff } );
    const segments = 128;
    const geometry = new THREE.BufferGeometry();
    const vertices = [];


    for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * 2 * Math.PI;
        vertices.push(radius * Math.cos(theta), 0, radius * Math.sin(theta)); // X, Y, Z
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices.flat(), 3));
    return new THREE.LineLoop(geometry, material);
}