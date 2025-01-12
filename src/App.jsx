import React from 'react'
import Home from './Pages/Home'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Projects from './Pages/Projects'
import Nav from './Pages/Nav'
import Contact from './Pages/Contact'
import './App.css'
import amongus from './images/amongus.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
const App = () => {
  useGSAP(()=>{
    
    gsap.to('#among',{
      y:770,
      duration:0.2,
      rotation:360,
      x:-1000,
      scrollTrigger:{
        trigger:'#port',
        start:'top top',
        end:'25% 50%',
        scrub:true
      }
    })

  })

  return (
    <div className='relative ' id='port'>
      <img src={amongus} alt="" className='absolute size-36 top-96 right-16 lg:visible invisible' id='among' />
      <Hero/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
      <span className='fixed top-[90%] lg:left-[38%] right-2  z-50'>
        <span className='fixed'>
        <Nav/>
        </span>
      </span>
    </div>
  ) 
}

export default App