import React, { useEffect } from 'react'
import resume from '../resume/MarikannanResumePort.pdf'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
const Resume = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        const t2=gsap.timeline({scrollTrigger:{
            trigger:'#resume',
            start:'top center',
            end:'100% bottom',
            scrub:true,
        }})
            t2.to('#road',{
                height:'100px'
            })
            t2.from('#ug',{
                y:200,
                opacity:0,
                duration:2,
                stagger:5
            })
            t2.to('#road',{
                height:'260px'
            })
            t2.from('#hsc',{
                y:200,
                opacity:0,
                duration:2,
                stagger:5
            })
            t2.to('#road',{
                height:'420px'
            })
            t2.from('#sslc',{
                y:200,
                opacity:0,
                duration:2,
                stagger:5

            })
            t2.from('#download',{
                y:100,
                opacity:0,
                duration:2,
                stagger:5
            })
        })
    const downloadcv = () => {
        
        const link = document.createElement("a");
        link.href = resume; 
        link.download = "Marikannan Resume.pdf"; 
        link.click();
    }
    return (
        <div className='w-full lg:max-h-full h-full p-10 relative' id='resume'>
            <h1 className='lg:text-5xl text-center text-black font-bold text-2xl'>Resume</h1><br />
            <div className='h-full w-full rounded-2xl shadow-xl border bg-white '><br />
                <h1 className='lg:text-2xl text-xl text-center text-black font-bold'>Education</h1><br />

                <div className="w-full px-4 text-black relative">
                    <div className='absolute h-0 w-0.5 bg-black left-44 top-96 lg:top-0 lg:visible lg:left-[39.5rem] invisible' id="road"></div>
                    <div className="tree-wrapper relative md:w-[10px] min-h-[50vh] md:mx-auto ">
                        <div
                            className="flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]" >
                            <div id='ug'
                                className="pointer p-2  bg-teal-200 aspect-square w-10 h-10 flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>

                            </div>
                            <div className="details md:max-w-96 p-5 h-full border shadow-lg  rounded-md my-3" id='ug'>
                                <p className='text-lg text-black font-bold mb-2'>Under Graduate - 2020-2024 </p>
                                <div className='h-[1px] w-full bg-black mb-2'></div>
                                <div className='text-md text-black '>Completed my <b>UnderGraduate degree</b> in <b>Computer Science and Engineering</b> at Sree Sowdambika College of
                                    Engineering with <br /> <b>CGPA 8.00</b>.
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex md:flex-row flex-col justify-center items-center lg:place-items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]" >
                            <div id='hsc'
                                className="pointer p-2  bg-teal-200 aspect-square w-10 h-10 flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                </svg>

                            </div>
                            <div className="details md:max-w-96 lg:h-32 h-full  p-5 border shadow-xl  rounded-md my-3" id='hsc'>
                                <p className='text-lg text-black font-bold mb-2'>HSC - 2018-2020 </p>
                                <div className='h-[1px] w-full bg-black mb-2'></div>
                                <div className='text-md text-black '>Completed <b>HSC</b> in <b>Computer Science</b> at Nadar Higher Secondary School.
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]" >
                            <div className="pointer p-2 bg-teal-200 aspect-square w-10 h-10 flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0" id='sslc'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                </svg>

                            </div>
                            <div className="details md:max-w-96 lg:h-32 h-full  p-5 border shadow-lg  rounded-md my-3" id='sslc'>
                                <p className='text-lg text-black font-bold mb-2'>SSLC - 2018 </p>
                                <div className='h-[1px] w-full bg-black mb-2'></div>
                                <div className='text-md text-black '>Completed my <b>SSLC</b> at Nadar Higher Secondary School.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className='flex justify-center items-center' id='download'>
                    <button className="cursor-pointer group/download relative flex gap-1 h-10 w-48 lg:h-12 lg:w-56 bg-[#5c5fe9] text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 font-semibold shadow-xl active:shadow-inner transition-all duration-300 justify-center items-center lg:text-lg text-sm" onClick={downloadcv}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
                            <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                            <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
                            <g id="SVGRepo_iconCarrier">
                                <g id="Interface / Download">
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector" />
                                </g>
                            </g>
                        </svg>
                        Download Resume
                        <div className="absolute text-xs uppercase scale-0 rounded-md py-2 px-2 bg-[#5c5fe9] left-auto mb-3 bottom-full group-hover/download:scale-100 origin-bottom transition-all duration-300 shadow-lg before:content-[''] before:absolute before:top-full before:left-2/4 before:w-3 before:h-3 before:border-solid before:bg-[#5c5fe9] before:rotate-45 before:-translate-y-2/4 before:-translate-x-2/4">
                            Download
                        </div>
                    </button>
                    <br />
                </div>
                <br />
            </div>

        </div>
    )
}

export default Resume