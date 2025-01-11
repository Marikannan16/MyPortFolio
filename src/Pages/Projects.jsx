import React from 'react'
import bot from '../images/ai.jpg'
import wallpaper from '../images/wallpaper.jpg'
import port from '../images/port.jpg'
import genai from '../images/genai.jpg'
import crud from '../images/crud.jpg'
import Type from '../images/type.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
const Projects = () => {
    useGSAP(() => {
        const t5 = gsap.timeline({
            scrollTrigger: {
                trigger: '#project',
                start: 'top center',
                end: 'bottom bottom',
                scrub: true,
            }
        })
        t5.from('#pro', {
            y: 300,
            opacity: 0
        })
        t5.from('#grid', {
            y: 300,
            opacity: 0,
            stagger: 1,
            rotationY: 180
        })
    })
    return (
        <div className=' h-full w-full lg:px-10 px-5' id='project'>
            <h1 className='lg:text-4xl text-center text-2xl font-bold text-black my-2' id='pro'>Projects</h1><br />
            <div className='h-full w-full border shadow rounded-xl'>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:p-20 p-6">
                    <div className='h-[27rem] w-full' id='grid'>
                        <div className=" w-full hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] h-full ">
                            <div className="w-full rounded-[10px] bg-white p-4 h-full sm:p-6 flex flex-col justify-center items-center gap-1.5 lg:gap-3">
                                <img src={bot} alt="bot" className='size-44 rounded-2xl' /><br />
                                <p className='text-xl text-center mb-1.5 font-bold text-black'>Ai Chatbot</p>
                                <p className='text-sm mb-3  text-black '>React chatbot that leverages the Grok API for natural language understanding. </p><br />
                                <span className='flex justify-between lg:gap-5 gap-4 items-center'>
                                    <button className="flex lg:gap-3 gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black lg:w-28 w-24 h-10 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 text-center justify-center items-center lg:p-4 p-1 lg:text-lg text-xs">
                                        <svg viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        Code
                                    </button>

                                    <button className="flex lg:gap-3 gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-pink-600 to-orange-400 lg:w-28 w-24 h-10 rounded-full border border-white hover:scale-105 duration-200 hover:text-black hover:border-white hover:from-cyan-300 hover:to-green-500 text-center justify-center items-center lg:p-4 p-1 lg:text-lg text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:size-6 size-4">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                        </svg>
                                        Demo
                                    </button>


                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='h-[27rem] w-full' id='grid'>
                        <div className=" w-full hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] h-full ">
                            <div className="w-full rounded-[10px] bg-white p-6 h-full sm:p-6 flex flex-col justify-center items-center gap-1.5 lg:gap-3">
                                <img src={wallpaper} alt="wallpaper" className='size-44 rounded-2xl' /><br />
                                <p className='text-xl text-center mb-1.5 font-bold text-black'>Wallpaper App</p>
                                <p className='text-sm mb-3  text-black '>User-friendly wallpaper app that allows users to easily discover stunning images.</p><br />
                                <span className='flex justify-between gap-5 items-center'>
                                    <a href="https://github.com/Marikannan16/HD-Wallpapers-app.git" target="_blank" rel="noopener noreferrer">
                                        <button className="flex lg:gap-3 gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black lg:w-28 w-24 h-10 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 text-center justify-center items-center lg:p-4 p-1 lg:text-lg text-xs">
                                            <svg viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            Code
                                        </button>
                                    </a>
                                    <a href="https://hd-wallpapers-app.vercel.app/" target='_blank'>
                                    <button className="flex lg:gap-3 gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-pink-600 to-orange-400 lg:w-28 w-24 h-10 rounded-full border border-white hover:scale-105 duration-200 hover:text-black hover:border-white hover:from-cyan-300 hover:to-green-500 text-center justify-center items-center lg:p-4 p-1 lg:text-lg text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                        </svg>
                                        Demo
                                    </button>
                                    </a>


                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='h-[27rem] w-full' id='grid'>
                        <div className=" w-full hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] h-full ">
                            <div className="w-full rounded-[10px] bg-white p-4 h-full sm:p-6 flex flex-col justify-center items-center gap-1.5 lg:gap-3">
                                <img src={port} alt="port" className='size-44 rounded-2xl' /><br />
                                <p className='text-xl text-center mb-1.5 font-bold text-black'>Portfolio</p>
                                <p className='text-sm mb-3 text-center  text-black'>Welcome to my portfolio !. Showcasing projects and growth and my passion.</p>
                                <span className='flex justify-between gap-5 items-center'>
                                    <button className="flex lg:gap-3 gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black lg:w-28 w-24 h-10 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 text-center justify-center items-center lg:p-4 p-1 lg:text-lg text-xs">
                                        <svg viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        Code
                                    </button>
                                    <button className="flex lg:gap-3 gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-pink-600 to-orange-400 lg:w-28 w-24 h-10 rounded-full border border-white hover:scale-105 duration-200 hover:text-black hover:border-white hover:from-cyan-300 hover:to-green-500 text-center justify-center items-center lg:p-4 p-1 lg:text-lg text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                        </svg>
                                        Demo
                                    </button>


                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='h-[27rem] w-full' id='grid'>
                        <div className=" w-full hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] h-full ">
                            <div className="w-full rounded-[10px] bg-white p-4 h-full sm:p-6 flex flex-col justify-center items-center gap-1.5 lg:gap-3">
                                <img src={genai} alt="ai" className='size-44 rounded-2xl' /><br />
                                <p className='text-xl text-center mb-1.5 font-bold text-black'>Ai Image Generator</p>
                                <p className='text-sm mb-3 text-center text-black'>A React App that use Hugging Face models for on-demand image generation. </p>
                                <span className='flex justify-between gap-5 items-center'>
                                    <a href="https://github.com/Marikannan16/Dream_Morph.git" target='_blank'>
                                    <button className="flex lg:gap-3 gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black lg:w-28 w-24 h-10 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 text-center justify-center items-center lg:p-4 p-1 lg:text-lg text-xs">
                                        <svg viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        Code
                                    </button>
                                    </a>
                                    <a href="https://dream-morph.vercel.app/" target='_blank'>
                                    <button className="flex lg:gap-3 gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-pink-600 to-orange-400 lg:w-28 w-24 h-10 rounded-full border border-white hover:scale-105 duration-200 hover:text-black hover:border-white hover:from-cyan-300 hover:to-green-500 text-center justify-center items-center lg:p-4 p-1 lg:text-lg text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                        </svg>
                                        Demo
                                    </button>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='h-[27rem] w-full' id='grid'>
                        <div className=" w-full hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] h-full ">
                            <div className="w-full rounded-[10px] bg-white p-4 h-full sm:p-6 flex flex-col justify-center items-center gap-1.5 lg:gap-3">
                                <img src={Type} alt="type" className='size-44 rounded-2xl' /><br />
                                <p className='text-xl text-center mb-1.5 font-bold text-black'>Typing Speed Tester</p>
                                <p className='text-sm mb-3 text-center text-black'>A React App that measures the speed and accuracy of your Typing. </p>
                                <span className='flex justify-between gap-5 items-center'>
                                    <a href="https://github.com/Marikannan16/TypingTestApp.git" target='_blank'>
                                    <button className="flex lg:gap-3 gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black lg:w-28 w-24 h-10 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 text-center justify-center items-center lg:p-4 p-1 lg:text-lg text-xs">
                                        <svg viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        Code
                                    </button>
                                    </a>
                                    <a href="https://type-tester-kappa.vercel.app/" target='_blank'>
                                    <button className="flex lg:gap-3 gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-pink-600 to-orange-400 lg:w-28 w-24 h-10 rounded-full border border-white hover:scale-105 duration-200 hover:text-black hover:border-white hover:from-cyan-300 hover:to-green-500 text-center justify-center items-center lg:p-4 p-1 lg:text-lg text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                        </svg>
                                        Demo
                                    </button>
                                    </a>


                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='h-[27rem] w-full' id='grid'>
                        <div className=" w-full hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] h-full ">
                            <div className="w-full rounded-[10px] bg-white p-4 h-full sm:p-6 flex flex-col justify-center items-center gap-1.5 lg:gap-3">
                                <img src={crud} alt="crud" className='size-44 rounded-2xl' /><br />
                                <p className='text-xl text-center mb-1.5 font-bold text-black'>Meal Planner CRUD App</p>
                                <p className='text-sm mb-3 text-center text-black'>The Django based Meal planner Crud app used for scheduling the Meals for Week.</p>
                                <span className='flex justify-between gap-5 items-center'>
                                    <a href="https://github.com/Marikannan16/CRUD-Meal_planner.git" target='_blank'>
                                    <button className="flex lg:gap-3 gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black lg:w-28 w-24 h-10 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 text-center justify-center items-center lg:p-4 p-1 lg:text-lg text-xs">
                                        <svg viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        Code
                                    </button>
                                    </a>
                                    <button className="flex lg:gap-3 gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-pink-600 to-orange-400 lg:w-28 w-24 h-10 rounded-full border border-white hover:scale-105 duration-200 hover:text-black hover:border-white hover:from-cyan-300 hover:to-green-500 text-center justify-center items-center lg:p-4 p-1 lg:text-lg text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                        </svg>
                                        Demo
                                    </button>


                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects