import { AiFillHtml5 } from 'react-icons/ai'
import { SiJavascript, SiTailwindcss, SiBootstrap } from 'react-icons/si'
import { DiReact, DiGit, DiCss3, DiSass } from 'react-icons/di'
import './Skills.css'

const Skills = () => {
    return (
        <div id='skills' className="skills-container">
           <div className="top-half"></div>
           <div className="skills-content">
               <div className="skills-title-wrapper">
               <h2>Skills</h2>
               </div>
               <div className="skills-icon-wrapper">
               <AiFillHtml5 className='skills-icons' />
               <DiCss3 className='skills-icons' />
               <SiJavascript className='skills-icons' /> 
               <SiTailwindcss  className='skills-icons' color='mediumTurquoise' /> 
               <DiReact className='skills-icons' />
               <DiGit className='skills-icons' />
               <DiSass className='skills-icons' />
               <SiBootstrap className='skills-icons' /> 

               </div>
           </div>
           <div className="bottom-half"></div>
       </div>
    )
}

export default Skills
