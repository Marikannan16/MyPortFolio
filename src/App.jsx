import React from 'react'
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
    gsap.from('#among',{
      y:-700,
      duration:5,
    })
    const timeline1=gsap.timeline({
      scrollTrigger:{
        trigger:'#port',
        start:'top top',
        end:'25% 50%',
        scrub:true
      }
    })
    const timeline2=gsap.timeline({
      scrollTrigger:{
        trigger:'#port',
        start:'29% center',
        end:'45% bottom',
        scrub:true
      }
    })
    const timeline3=gsap.timeline({
      scrollTrigger:{
        trigger:'#port',
        start:'37% center',
        end:'60% bottom',
        scrub:true
      }
    })
    const timeline4=gsap.timeline({
      scrollTrigger:{
        trigger:'#port',
        start:'56% 20%',
        end:'85% bottom',
        scrub:true
      }
    })
    const timeline5=gsap.timeline({
      scrollTrigger:{
        trigger:'#port',
        start:'79% 20%',
        end:'99% bottom',
        scrub:true
      }
    })
    timeline1.to('#among',{
      y:700,
      x:-1000,
      rotation:360
    })
    timeline2.to('#among',{
      y:1260,
      x:-540,
      rotation:720,
      scale:0.3,
      duration:1000
    })

    timeline3.to('#among',{
      y:1900,
      duration:1
    })
    timeline4.to('#among',{
      y:3120,
      x:-1000,
      scale:0.5,
      rotation:1080,
    })
    timeline5.to('#among',{
      x:-829,
      y:3600,
      scale:2.8,
      rotation:1080
    })
    // gsap.to('#among',{
    //   y:770,
    //   duration:0.2,
    //   rotation:360,
    //   x:-1000,
    //   scrollTrigger:{
    //     trigger:'#port',
    //     start:'top top',
    //     end:'25% 50%',
    //     scrub:true
    //   }
    // })

  })

  return (
    <div className='relative ' id='port'>
      <img src={amongus} alt="" className='absolute lg:size-36 lg:top-96 top-[20rem] right-16 size-16 z-50 lg:visible invisible' id='among' />
      <Hero/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
      <span className='fixed top-[90%] h-full w-full flex justify-center  z-50'>
        <span className='fixed'>
        <Nav/>
        </span>
      </span>
    </div>
  ) 
}

export default App