import './Projects.css'
import 'aos/dist/aos.css'

import { BsGithub } from 'react-icons/bs'

import raceTrackerImage from './images/race-tracker.png'
import clockAppImage from './images/clock-app.png'
import todoListImage from './images/todo-list.png'
import blurred from './images/blurred.png'

const ProjectPreview = ({ image, text, tech }) => {
  
    return (
        <div className='projects-container' >
            <div
                className="project-preview">
                <img src={image} alt="" />
                    <div className="hover-container">
                        <p>{text}</p>
                        <p>{tech}</p>
                    </div>
                </div>
        </div>
    );
};



const Projects = () => {

    return (
        <div id='projects' className='projects-container'>
            <div className="projects-title-wrapper">
                <h2>Projects</h2>
            </div>
            <div className="project-wrapper"  data-aos='fade-right' data-aos-once>

                <div className="boxes-wrapper">
                <div className="box" >
                     <ProjectPreview text={"Developed a web app that tracks imported data for race car drivers based in Finland, which can store their names, number, splits and total time in a table, which can be sorted in ascending or descending order. It can also be exported to CSV"} tech={"Tech used: React, CSS"} image={raceTrackerImage} /> 
                    <div className="live-git">
                      <a href="https://github.com/SampsaKaskela/race-timing-app" target="_blank" rel="noreferrer"><BsGithub className='projects-icon'/></a>  
                    </div>
                </div>

                <div className="box">
                <ProjectPreview text={"Clock app using an API to display different quotes every minute. Background image changes depending on whether it's day or evening"} tech={"Tech used: HTML, CSS, JS"} image={clockAppImage} /> 
                    <div className="live-git">
                    <a href="https://viktoryordanov-clock.netlify.app" target="_blank" rel="noreferrer"><span className='live-btn'>Live</span></a> 
                    
                    <a href="https://github.com/VicKLyo/Clock" target="_blank" rel="noreferrer"><BsGithub className='projects-icon'/></a>  
                    </div>
                </div>

                <div className="box">
                <ProjectPreview text={"A todolist in which the user can add, delete and sort tasks by completed or uncompleted and the website saves the tasks using Local Storage."} tech={"Tech used: HTML, CSS, JS"} image={todoListImage} /> 
                    <div className="live-git">
                    {/* <a href="" target="_blank"><span className='live-btn'>Live</span></a>  */}
                    <a href="https://github.com/VicKLyo/Todolist" target="_blank" rel="noreferrer"><BsGithub className='projects-icon'/></a>  
                    </div>
                </div>
                    
                <div className="box">
                <ProjectPreview text={"Coming soon!"} image={blurred} /> 
                    <div className="live-git">
                    </div>
                </div>

                <div className="box">
                <ProjectPreview text={"Coming soon!"} image={blurred} /> 
                    <div  className="live-git">
                    </div>
                </div>

                <div className="box">
                <ProjectPreview text={"Coming soon!"} image={blurred} /> 
                    <div className="live-git">
                    </div>
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default Projects
