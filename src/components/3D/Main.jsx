import { Canvas } from '@react-three/fiber'
import React from 'react'
import ThreeD from './ThreeD'
import { Model } from './Mymodel'
import { OrbitControls } from '@react-three/drei'

const Main = () => {
  return (
    <div className='w-full h-screen'>
      <Canvas
      camera={{
        position: [0, 1,1], // Move the camera to center the model
        fov: 50, // Adjust field of view
      }}
    >
      <ThreeD/>
      </Canvas>
    </div>
  )
}

export default Main