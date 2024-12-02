// Base unit (Mercury's distance from Sun)
const BASE_DISTANCE = 1.75;

export const orbitalParameters = {
  mercury: {
    radius: BASE_DISTANCE * 1,
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 0.3,
    tilt: 2 * Math.PI / 180,  // 2 degrees
  },
  venus: {
    radius: BASE_DISTANCE * 1.87,
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 0.4,
    tilt: 177.3 * Math.PI / 180,  // 177.3 degrees
  },
  earth: {
    radius: BASE_DISTANCE * 2.58,
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 0.42,
    tilt: 23.4 * Math.PI / 180,  // 23.4 degrees
  },
  mars: {
    radius: BASE_DISTANCE * 3.94,
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 0.35,
    tilt: 25.2 * Math.PI / 180,  // 25.2 degrees
  },
  asteroidBelt: {
    innerRadius: BASE_DISTANCE * 4.7,  // ~2.2 AU (astronomical units)
    outerRadius: BASE_DISTANCE * 7.0,  // ~3.2 AU
  },
  jupiter: {
    radius: BASE_DISTANCE * 13.44,
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 1.2,
    tilt: 3.1 * Math.PI / 180,  // 3.1 degrees
  },
  saturn: {
    radius: BASE_DISTANCE * 24.67,
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 1.0,
    tilt: 26.7 * Math.PI / 180,  // 26.7 degrees
  },
  uranus: {
    radius: BASE_DISTANCE * 49.56,
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 0.7,
    tilt: 97.8 * Math.PI / 180,  // 97.8 degrees
  },
  neptune: {
    radius: BASE_DISTANCE * 100.46,
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 0.6,
    tilt: 28.3 * Math.PI / 180,  // 28.3 degrees
  }
};

export const orbitColors = {
  mercury: 0x9C9C9C, // Silver gray
  venus: 0xE6B800,   // Golden yellow
  earth: 0x4169E1,   // Royal blue
  mars: 0xDE3232,    // Red
  jupiter: 0xFFA500, // Orange
  saturn: 0xDAA520,  // Golden brown
  uranus: 0x40E0D0,  // Turquoise
  neptune: 0x0066CC  // Deep blue
};