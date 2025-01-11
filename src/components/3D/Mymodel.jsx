import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('src/model/low-poly_truck_car_drifter.glb');
  const { actions } = useAnimations(animations, group);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, 0, 0]} // Centering the model
      rotation={[-Math.PI / 2, 0, 0]} // Adjusting orientation
      scale={[0.01, 0.01, 0.01]} // Adjusting scale to fit
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, 0]}>
          <group name="7f09d404031140d78a7bb6db74b81fa4fbx">
            <group name="Object_2">
              <group name="RootNode">
                {/* Front Wheels */}
                <group
                  name="Front_wheel"
                  position={[1.56, 0.092, -1.27]}
                  rotation={[0, 0, -1.403]}
                  scale={[0.05, 0.05, 0.027]}
                >
                  <mesh
                    name="Front_wheel_Black_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Front_wheel_Black_0.geometry}
                    material={materials.Black}
                  />
                  <mesh
                    name="Front_wheel_Light_black_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Front_wheel_Light_black_0.geometry}
                    material={materials.Light_black}
                  />
                </group>
                {/* Additional groups and meshes */}
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('src/model/low-poly_truck_car_drifter.glb');
