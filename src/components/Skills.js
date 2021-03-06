import { AiFillHtml5 } from 'react-icons/ai'
import { SiJavascript, SiTailwindcss, SiBootstrap } from 'react-icons/si'
import { DiReact, DiGit, DiCss3, DiSass } from 'react-icons/di'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Skills.css'

const Skills = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },   [])
    return (
        <div id='skills' className="skills-container" data-aos="fade-up" data-aos-once>
           <div className="top-half"></div>
           <div className="skills-content">
               <div className="skills-title-wrapper">
               <h2>Skills</h2>
               </div>
               <div className="skills-icon-wrapper">
               <AiFillHtml5 className='skills-icons' />
               <DiCss3 className='skills-icons' />
               <SiJavascript className='skills-icons' /> 
               <DiReact className='skills-icons' />
               <SiTailwindcss  className='skills-icons' color='mediumTurquoise' /> 
               <SiBootstrap className='skills-icons' /> 
               <DiSass className='skills-icons' />
               <DiGit className='skills-icons' />

               </div>
           </div>
           <div className="bottom-half"></div>
       </div>
    )
}

export default Skills
