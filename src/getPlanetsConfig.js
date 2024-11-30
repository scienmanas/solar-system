import * as THREE from 'three';
import { imageSources } from './data/imageSources';
import { orbitalParameters, orbitColors } from './data/orbitalParamerts';
import { speed } from './data/rotationAndRevolution';
import { getFresnelMat } from './getFresnel';

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
    mercuryGroup.rotation.z = orbitalParameters.mercury.tilt;

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
    venusGroup.rotation.z = orbitalParameters.venus.tilt;

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
    const fresnelMat = getFresnelMat();
    const earthGlowMesh = new THREE.Mesh(earthGeometry, fresnelMat);
    earthGlowMesh.scale.setScalar(1.02);
    earthGroup.add(earthGlowMesh);
    earthGroup.rotation.z = orbitalParameters.earth.tilt;


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
    marsGroup.rotation.z = orbitalParameters.mars.tilt;

    // Jupiter
    const jupiterGroup = new THREE.Group()
    const jupiterGeometry = new THREE.IcosahedronGeometry(orbitalParameters.jupiter.size, 12);
    const jupiterMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load(imageSources.jupiter.img),
    })
    const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    jupiterGroup.add(jupiter);
    jupiterGroup.position.setFromSpherical(
        new THREE.Spherical(
            orbitalParameters.jupiter.radius,
            orbitalParameters.jupiter.phi,
            orbitalParameters.jupiter.theta
        )
    )
    jupiterGroup.rotation.z = orbitalParameters.jupiter.tilt;

    // Saturn 
    const saturnGroup = new THREE.Group();
    const saturnGeometry = new THREE.IcosahedronGeometry(orbitalParameters.saturn.size, 12);
    const saturnMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load(imageSources.saturn.img),
    })
    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    saturnGroup.add(saturn);
    saturnGroup.position.setFromSpherical(
        new THREE.Spherical(
            orbitalParameters.saturn.radius,
            orbitalParameters.saturn.phi,
            orbitalParameters.saturn.theta,
        )
    )
    saturnGroup.rotation.z = orbitalParameters.saturn.tilt;

    // Uranus
    const uranusGroup = new THREE.Group();
    const uranusGeometry = new THREE.IcosahedronGeometry(orbitalParameters.uranus.size, 12);
    const uranusMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load(imageSources.uranus.img),
    })
    const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
    uranusGroup.add(uranus);
    uranusGroup.position.setFromSpherical(
        new THREE.Spherical(
            orbitalParameters.uranus.radius,
            orbitalParameters.uranus.phi,
            orbitalParameters.uranus.theta,
        )
    )
    uranusGroup.rotation.z = orbitalParameters.uranus.tilt;

    // Neptune
    const neptuneGroup = new THREE.Group();
    const neptuneGeometry = new THREE.IcosahedronGeometry(orbitalParameters.neptune.size, 12);
    const neptuneMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load(imageSources.neptune.img),
    })
    const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    neptuneGroup.add(neptune);
    neptuneGroup.position.setFromSpherical(
        new THREE.Spherical(
            orbitalParameters.neptune.radius,
            orbitalParameters.neptune.phi,
            orbitalParameters.neptune.theta,
        )
    )
    neptuneGroup.rotation.z = orbitalParameters.neptune.tilt;


    const mercuryOrbit = addRevolutionLine(orbitalParameters.mercury.radius, orbitColors.mercury);
    const venusOrbit = addRevolutionLine(orbitalParameters.venus.radius, orbitColors.venus);
    const earthOrbit = addRevolutionLine(orbitalParameters.earth.radius, orbitColors.earth);
    const marsOrbit = addRevolutionLine(orbitalParameters.mars.radius, orbitColors.mars);
    const jupiterOrbit = addRevolutionLine(orbitalParameters.jupiter.radius, orbitColors.jupiter);
    const saturnOrbit = addRevolutionLine(orbitalParameters.saturn.radius, orbitColors.saturn);
    const uranusOrbit = addRevolutionLine(orbitalParameters.uranus.radius, orbitColors.uranus);
    const neptuneOrbit = addRevolutionLine(orbitalParameters.neptune.radius, orbitColors.uranus);


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

        // Mars
        mars.rotation.y += speed.rotationSpeeds.mars * rotationBaseSpeed;
        marsGroup.position.setFromSpherical(
            new THREE.Spherical(
                orbitalParameters.mars.radius,
                orbitalParameters.mars.phi,
                orbitalParameters.mars.theta += speed.revolutionSpeeds.mars * revolutionBaseSpeed
            )
        );

        // Jupiter
        jupiter.rotation.y += speed.rotationSpeeds.jupiter * rotationBaseSpeed;
        jupiterGroup.position.setFromSpherical(
            new THREE.Spherical(
                orbitalParameters.jupiter.radius,
                orbitalParameters.jupiter.phi,
                orbitalParameters.jupiter.theta += speed.revolutionSpeeds.jupiter * revolutionBaseSpeed
            )
        );

        // Saturn
        saturn.rotation.y += speed.rotationSpeeds.saturn * rotationBaseSpeed;
        saturnGroup.position.setFromSpherical(
            new THREE.Spherical(
                orbitalParameters.saturn.radius,
                orbitalParameters.saturn.phi,
                orbitalParameters.saturn.theta += speed.revolutionSpeeds.saturn * revolutionBaseSpeed
            )
        );

        // Uranus
        uranus.rotation.y += speed.rotationSpeeds.uranus * rotationBaseSpeed;
        uranusGroup.position.setFromSpherical(
            new THREE.Spherical(
                orbitalParameters.uranus.radius,
                orbitalParameters.uranus.phi,
                orbitalParameters.uranus.theta += speed.revolutionSpeeds.saturn * revolutionBaseSpeed
            )
        );

        // Neptune
        neptune.rotation.y += speed.rotationSpeeds.neptune * rotationBaseSpeed;
        neptuneGroup.position.setFromSpherical(
            new THREE.Spherical(
                orbitalParameters.neptune.radius,
                orbitalParameters.neptune.phi,
                orbitalParameters.neptune.theta += speed.revolutionSpeeds.neptune * revolutionBaseSpeed
            )
        );

    }

    // Return all the planets group
    return {
        planets: [mercuryGroup, venusGroup, earthGroup, marsGroup, jupiterGroup, saturnGroup, uranusGroup, neptuneGroup],
        orbits: [mercuryOrbit, venusOrbit, earthOrbit, marsOrbit, jupiterOrbit, saturnOrbit, uranusOrbit, neptuneOrbit],
        animatePlanets
    }
}


function addRevolutionLine(radius, color) {
    const material = new THREE.LineDashedMaterial({
        color: color,
        dashSize: 0.03,
        gapSize: 0.03,
    });
    const segments = 128;
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * 2 * Math.PI;  // Will distribute the line points following the theta angle as in spehrical coordinate system.
        vertices.push(radius * Math.cos(theta), 0, radius * Math.sin(theta)); // Convert from spehrical to catesian
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices.flat(), 3))
    const line = new THREE.LineLoop(geometry, material);
    line.computeLineDistances();
    return line;
}