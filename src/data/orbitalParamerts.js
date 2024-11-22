// Base unit (Mercury's distance from Sun)
const BASE_DISTANCE = 1.75;

export const orbitalParameters = {
  mercury: {
    radius: BASE_DISTANCE * 1, // 1.00 (base unit)
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 0.3,
    orbitSpeed: 0.002
  },
  venus: {
    radius: BASE_DISTANCE * 1.87, // 1.87 times Mercury's distance
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 0.4,
    orbitSpeed: 0.0015
  },
  earth: {
    radius: BASE_DISTANCE * 2.58, // 2.58 times Mercury's distance
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 0.42,
    orbitSpeed: 0.001
  },
  mars: {
    radius: BASE_DISTANCE * 3.94, // 3.94 times Mercury's distance
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 0.35,
    orbitSpeed: 0.0008
  },
  jupiter: {
    radius: BASE_DISTANCE * 13.44, // 13.44 times Mercury's distance
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 1.2,
    orbitSpeed: 0.0004
  },
  saturn: {
    radius: BASE_DISTANCE * 24.67, // 24.67 times Mercury's distance
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 1.0,
    orbitSpeed: 0.0003
  },
  uranus: {
    radius: BASE_DISTANCE * 49.56, // 49.56 times Mercury's distance
    theta: Math.random() * 2 * Math.PI,
    phi: Math.PI / 2,
    size: 0.7,
    orbitSpeed: 0.0002
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