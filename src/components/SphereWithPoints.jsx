
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

import {TextureLoader} from 'three';
import { useLoader } from '@react-three/fiber';


const SkillIcon = ({position, iconUrl}) =>{
    const texture = useLoader(TextureLoader, iconUrl);

    return (
        <mesh position={position}>
            <planeGeometry args={[0.1, 0.1]} />
            <meshBasicMaterial map={texture} transparent />
        </mesh>
    )
}


const SphereWithPoints = () => {
  const points = [
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, -1, 0),
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(0, 0, 1),
    new THREE.Vector3(0, 0, -1),
  ];

  const lines = [
    [points[0], points[2]],
    [points[0], points[4]],
    [points[1], points[3]],
    [points[1], points[5]],
    [points[2], points[4]],
    [points[3], points[5]],
  ];

  const intersections = [
    new THREE.Vector3(0.5, 0.5, 0.5),
    new THREE.Vector3(-0.5, -0.5, -0.5),
  ];

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#888888" wireframe />
      </mesh>

      {lines.map((line, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array([
                line[0].x, line[0].y, line[0].z,
                line[1].x, line[1].y, line[1].z
              ])}
              count={2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#ff0000" />
        </line>
      ))}

      {intersections.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshStandardMaterial color="#0000ff" />
          <SkillIcon key={index} position={position} iconUrl='../../public/icon.png' />
        </mesh>
      ))}

      <OrbitControls />
    </Canvas>
  );
};

export default SphereWithPoints;
