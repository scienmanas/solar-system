import * as THREE from 'three';
import { imageSources } from './data/imageSources';


const textureLoader = new THREE.TextureLoader();
export function getSun () {
    const sunGroup = new THREE.Group()
    const sunGeometry = new THREE.IcosahedronGeometry(1.25, 12);
    const sunMaterial = new THREE.MeshBasicMaterial({
        opacity: 0.7,
        map: textureLoader.load(imageSources.sun.img)
    })
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sunGroup.add(sun);
    sunGroup.position.setFromSpherical(
        new THREE.Spherical(0, 0, 0)
    )
    return sunGroup;
}  