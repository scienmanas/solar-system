export const speed = {
    rotationSpeeds: {
        mercury: (2 * Math.PI) / 58.646,      // 58.646 Earth days
        venus: -(2 * Math.PI) / 243.025,      // 243.025 days (retrograde)
        earth: (2 * Math.PI) / 0.997,         // 23.93 hours
        mars: (2 * Math.PI) / 1.026,          // 24.62 hours
        jupiter: (2 * Math.PI) / 0.414,       // 9.93 hours
        saturn: (2 * Math.PI) / 0.445,        // 10.68 hours
        uranus: -(2 * Math.PI) / 0.718,       // 17.23 hours (retrograde)
        neptune: (2 * Math.PI) / 0.671        // 16.11 hours
    },
    
    revolutionSpeeds: {
        mercury: (2 * Math.PI) / 87.97,       // 87.97 Earth days
        venus: (2 * Math.PI) / 224.70,        // 224.70 days
        earth: (2 * Math.PI) / 365.26,        // 365.26 days
        mars: (2 * Math.PI) / 686.98,         // 686.98 days
        jupiter: (2 * Math.PI) / 4332.59,     // 11.86 Earth years
        saturn: (2 * Math.PI) / 10759.22,     // 29.46 years
        uranus: (2 * Math.PI) / 30688.5,      // 84.02 years
        neptune: (2 * Math.PI) / 60182        // 164.79 years
    }
};