import { OrbitControls, RoundedBox } from '@react-three/drei'
import React from 'react'
import { Model } from './Mymodel'

const ThreeD = () => {
  return (
    <>
    <ambientLight/>
    <OrbitControls/>
    <Model/>
    </>

)
}

export default ThreeD