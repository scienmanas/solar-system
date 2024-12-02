import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import getStarfield from './src/getStars';
import { getSun } from './src/getSun';
import { planetsConfig } from './src/getPlanetsConfig';
import { createAsteroidBelt } from './src/getAsteroidBelt';
import { orbitalParameters } from './src/data/orbitalParamerts';

// Add scene & loader
const scene = new THREE.Scene();

// Add camera
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000000000);
camera.position.z = 5;

// Add renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.5;

// Add canvas to the body
document.body.appendChild(renderer.domElement);

// Add controls and make all allowed, true by default except damping
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true

// Add stars first
const stars = getStarfield({ numStars: 1000 })
scene.add(stars);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.13)
scene.add(ambientLight)

// Add spherical sunlight (point light)
const sunlight = new THREE.PointLight(0xffffff, 2.5, 1000, 0.6);
sunlight.position.set(0, 0, 0);
scene.add(sunlight);
sunlight.castShadow = true
sunlight.shadow.bias = -0.0001;
sunlight.shadow.normalBias = 0.0001;

//----------- All the model code of solar system /----------- 

const solarSystemGroup = new THREE.Group();
scene.add(solarSystemGroup);

// Sun
const sun = getSun();
solarSystemGroup.add(sun)

// Add planets
const { planets, orbits, animatePlanets } = planetsConfig();
planets.forEach(planet => {
  solarSystemGroup.add(planet)
});
orbits.forEach(orbit => {
  solarSystemGroup.add(orbit)
})

// Add asteroid belt
const { asteroidBelt, animateAsteroids } = createAsteroidBelt({
  innerRadius: orbitalParameters.asteroidBelt.innerRadius,
  outerRadius: orbitalParameters.asteroidBelt.outerRadius,
  numAsteroids: 500,
})
solarSystemGroup.add(asteroidBelt);

// ----------- ----------- ----------- ----------- ----------- 

// Add event listener for window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})

// Add animation for orbital motion
function animate() {
  requestAnimationFrame(animate);
  animatePlanets();
  animateAsteroids()
  controls.update();
  renderer.render(scene, camera);
}
animate()