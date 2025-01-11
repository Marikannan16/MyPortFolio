import React from 'react'
import profile from '../images/profile.png'
import About2 from './About2'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
const About = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        const t1=gsap.timeline({scrollTrigger:{
            trigger:'#canvas',
            start:'top 40%',
            end:'70% bottom',
            scrub:true,
        }})
    t1.from('#head',{
        y:200,
        opacity:0
    })
    t1.from('#profile',{
        x:-200,
        opacity:0
    })
    t1.from('#summary',{
        y:500,
        opacity:0
    })
    t1.from('#personal',{
        y:500,
        opacity:0
    })
    })
    return (
        <div className='h-full w-full p-8' id='canvas'>
            <h1 className='lg:text-5xl text-center text-black font-bold text-2xl' id='head'> About Me !</h1>
            <div className='flex lg:flex-row flex-col justify-center items-center gap-10 rounded-xl shadow-lg border lg:p-4 p-1 mt-5'>
                <div className='w-full h-full flex justify-center items-center'>
                    <img src={profile} alt="hero" className='lg:h-[20rem] lg:w-[20rem] w-64 h-64 rounded-full border-white border-4' id='profile' />
                </div>
                <div className='h-full w-full p-3' id='summary'>
                    <p className='lg:text-3xl text-xl text-center text-black font-bold mb-4' id='summary'>Summary</p>
                    <p className='lg:text-lg text-[15px] text-left text-black ' id='summarytext'>
                        Python Fullstack Developer with experience in building scalable web applications using Django, Flask, and RESTful APIs.
                        Skilled in frontend development with React and Tailwind CSS. Focused on creating efficient, user-friendly software
                        solutions.
                    </p><br />
                    <p className='lg:text-3xl text-xl text-center text-black font-bold mt-2' id='personal'>Personal Details</p><br />
                    <table className='mt-2 mx-auto' id='personal'>
                        <tr id='details'>
                            <td className='flex items-center gap-3 lg:text-[15px] text-[12px] font-bold px-2 lg:px-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-teal-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>

                                Name</td>
                            <td className='lg:text-[15px] text-[12px] px-2 lg:px-10'>Marikannan</td>
                        </tr><br />
                        <tr id='details'>
                            <td className='flex items-center gap-3 lg:text-[15px] text-[12px] font-bold px-2 lg:px-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-teal-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                                Address</td>
                            <td className='lg:text-[15px] text-[12px] px-2 lg:px-10'>93/A Vakkil Street,kovilpatti -628 501</td>
                        </tr><br />

                        <tr id='details'>
                            <td className='flex items-center gap-3 lg:text-[15px] text-[12px] font-bold px-2 lg:px-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-teal-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                Email</td>
                            <td className='lg:text-[15px] text-[12px] px-2 lg:px-10'>capkannan16@gmail.com</td>
                        </tr><br />
                        <tr id='details'>
                            <td className='flex items-center gap-3 lg:text-[15px] text-[12px] font-bold px-2 lg:px-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-teal-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>

                                Phone</td>
                            <td className='lg:text-[15px] text-[12px] px-2 lg:px-10'>+91 9789586078</td>
                        </tr>
                    </table>
                    <br />
                </div>
            </div>
            <br />
            <About2/>
        </div>

    )
}

export default About