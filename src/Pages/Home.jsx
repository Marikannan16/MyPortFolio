import React from 'react'
import mobile from '../images/mobile.png'
import logo from '../images/hero.jpg'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import profile from '../images/profile.png'
gsap.registerPlugin(ScrollTrigger)
const Home = () => {
  useGSAP(()=>{
    gsap.from("#canvas",{
      y:300,
      opacity:0,
      duration:1
    })
    const timeline1=gsap.timeline({
      delay:2,
      scrollTrigger:{
        trigger:'#canvas',
        scrub:true,
        start:'30% center',
        end:'150% bottom',
        markers:true
      }
    })
    timeline1.to('#call',{
      opacity:0,
      duration:1
    })
    timeline1.to('#end',{
      opacity:1,
      duration:0.6
    })
    timeline1.to('#logo',{
      x:-340,
      y:700,
      rotation:360,
      scale:2,
      duration:30
    })
    

  },[])
  return (
    <div className='h-screen w-full' id='canvas'>
      <div className='w-full h-screen flex justify-center items-center gap-2 '>
        <div className='flex flex-col justify-center items-start w-1/2 h-3/4 ms-36 bg-yellow-400 p-5'>
         <h1 className='text-6xl font-bold text-black text-left'>Hi!</h1> 
         <h1 className='text-xl font-bold text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident minima corrupti nulla magnam doloribus deserunt tempore officiis, eum sint voluptatibus, dolore nihil explicabo inventore molestiae voluptatem odio veritatis qui tenetur!</h1> 
        </div>
      <div className='h-screen w-full flex justify-center items-center lg:p-16 p-5  relative'>
          <img src={mobile} alt="" className='w-[35rem] h-[25rem] lg:w-[40rem] lg:h-[40rem] ms-36' />
        <span className='absolute  h-full w-full'>
          <div className='flex flex-col absolute top-[9.5rem] lg:top-[3.3rem] gap-5 pt-16 items-center left-32 lg:left-[21rem] bg-gradient-to-r from-purple-400 to-pink-300  h-[23rem] w-[10.5rem] lg:w-[17rem] lg:h-[36.1rem] -z-40 rounded-2xl'>
            <p className='lg:text-3xl ms-1 lg:ms-0 text-lg font-bold text-black'>Mari Kannan</p>
            <img src={logo} alt="" className='absolute top-24 lg:top-32 lg:w-36 lg:h-36 h-24 w-24 rounded-full z-50 border border-black' id="logo" />
            <span className='flex justify-between gap-10 mt-16 lg:mt-40 lg:gap-24 ms-1 rounded-full p-1'>
              <div className='absolute w-10 h-10 lg:top-[30rem] top-72 lg:w-14 lg:h-14 bg-green-600 rounded-full animate-bounce'id="call">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  strokeWidth={1}
                  className='lg:h-8 lg:w-8 lg:m-3 h-5 w-5 m-2.5 text-white'
                >
                  <path d="M13.04 14.69l1.07-2.14a1 1 0 011.2-.5l6 2A1 1 0 0122 15v5a2 2 0 01-2 2h-2A16 16 0 012 6V4c0-1.1.9-2 2-2h5a1 1 0 01.95.68l2 6a1 1 0 01-.5 1.21L9.3 10.96a10.05 10.05 0 003.73 3.73zM8.28 4H4v2a14 14 0 0014 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 01-1.3.46 12.04 12.04 0 01-6.02-6.01 1 1 0 01.46-1.3l2.26-1.14L8.28 4z" />
                </svg>
              </div>
              <div className='w-10 h-10 lg:w-14 lg:h-14 mt-40 bg-red-600 rounded-full opacity-0' id='end'>
                <svg
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  strokeWidth={1}
                  className='lg:h-8 lg:w-8 lg:m-3 h-5 w-5 m-2.5 text-white'
                  
                >
                  <path d="M6 7.49a1 1 0 001-1V5.9l2.88 2.88a3 3 0 004.24 0l4.59-4.59a1 1 0 000-1.41 1 1 0 00-1.42 0l-4.58 4.58a1 1 0 01-1.42 0L8.41 4.49H9a1 1 0 000-2H6a1 1 0 00-.92.61 1.09 1.09 0 00-.08.39v3a1 1 0 001 1zm15.94 7.36a16.27 16.27 0 00-19.88 0 2.69 2.69 0 00-1 2 2.66 2.66 0 00.78 2.07l1.76 1.8a2.68 2.68 0 003.46.28l.47-.32a8.13 8.13 0 011-.55 1.85 1.85 0 001-2.3l-.09-.24a10.49 10.49 0 015.22 0l-.09.24a1.85 1.85 0 001 2.3 8.13 8.13 0 011 .55l.47.32a2.58 2.58 0 001.54.5 2.72 2.72 0 001.92-.79l1.81-1.82a2.66 2.66 0 00.69-2.06 2.69 2.69 0 00-1.06-1.98zm-1.14 2.64L19 19.3a.68.68 0 01-.86.1c-.19-.14-.38-.27-.59-.4a11.65 11.65 0 00-1.09-.61l.4-1.09a1 1 0 00-.6-1.28 12.42 12.42 0 00-8.5 0 1 1 0 00-.6 1.28l.4 1.1a9.8 9.8 0 00-1.1.6l-.58.4a.66.66 0 01-.88-.1l-1.8-1.81A.67.67 0 013 17a.76.76 0 01.28-.53 14.29 14.29 0 0117.44 0A.76.76 0 0121 17a.67.67 0 01-.2.49z" />
                </svg>
              </div>
            </span>
          </div>
        </span>
      </div>
      </div>
      <div className='w-full h-screen sticky'>
        <h1 className='text-5xl font-bold text-black mt-10 text-center'>About Me</h1>
        <div className='flex justify-center items-center'>
        <img src={profile} alt="" className='mt-10 ms-1 border border-black rounded-full w-[18.5rem] h-[18.5] ' />
        </div>
      </div>
      <div className='w-full h-screen'></div>
      <div className='w-full h-screen'></div>
    </div>
  )
}

export default Home