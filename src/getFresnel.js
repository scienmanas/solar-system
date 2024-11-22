import * as THREE from 'three';

// Ring generation
export function getFresnelMat({ rimHex = 0x0088ff, facingHex = 0x000000 } = {}) {
    const uniforms = {
        color1: { value: new THREE.Color(rimHex) },
        color2: { value: new THREE.Color(facingHex) },
        fresnelBias: { value: 0.1 },
        fresnelScale: { value: 1.0 },
        fresnelPower: { value: 4.0 },
    };
    const vs = `
    uniform float fresnelBias;
    uniform float fresnelScale;
    uniform float fresnelPower;
    
    varying float vReflectionFactor;
    
    void main() {
      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
    
      vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
    
      vec3 I = worldPosition.xyz - cameraPosition;
    
      vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
    
      gl_Position = projectionMatrix * mvPosition;
    }
    `;
    const fs = `
    uniform vec3 color1;
    uniform vec3 color2;
    
    varying float vReflectionFactor;
    
    void main() {
      float f = clamp( vReflectionFactor, 0.0, 1.0 );
      gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
    }
    `;
    const fresnelMat = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vs,
        fragmentShader: fs,
        transparent: true,
        blending: THREE.AdditiveBlending,
        // wireframe: true,
    });
    return fresnelMat;
}

// Starts generation
function getStarfield({ numStars = 500 } = {}) {
    // Function for getting random points
    function randomSpherePoint() {
        const radius = Math.random() * 25 + 25;
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        // Coordinate system in spherical format making the a  spehrical spehere of points at r distance
        let x = radius * Math.sin(phi) * Math.cos(theta);
        let y = radius * Math.sin(phi) * Math.sin(theta);
        let z = radius * Math.cos(phi);

        return {
            pos: new THREE.Vector3(x, y, z),
            hue: 0.6,
            minDist: radius,
        };
    }

    const verts = [];
    const colors = [];
    const positions = [];
    let col;

    for (let i = 0; i < numStars; i += 1) {
        let p = randomSpherePoint();
        const { pos, hue } = p;
        positions.push(p);
        col = new THREE.Color().setHSL(hue, 0.2, Math.random());
        verts.push(pos.x, pos.y, pos.z)
        colors.push(col.r, col.g, col.b)
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
    });
    const points = new THREE.Points(geo, mat);
    return points;
}