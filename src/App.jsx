import React from 'react'
import Home from './Pages/Home'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Projects from './Pages/Projects'
import Nav from './Pages/Nav'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div className='relative'>
      <Hero/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
      <span className='absolute top-[44rem] left-0.5 lg:top-[38rem] lg:left-[32rem] z-50'>
        <span className='fixed'>
        <Nav/>
        </span>
      </span>
    </div>
  ) 
}

export default App