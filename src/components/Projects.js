import './Projects.css'
import { BsGithub } from 'react-icons/bs'



const Projects = () => {
    return (
        <div className='projects-container'>
            <div className="projects-title-wrapper">
                <h2>Projects</h2>
            </div>
            <div className="project-wrapper">

                <div className="boxes-wrapper">

                <div className="box">
                    <div className="project-preview"></div>
                    <div className="live-git">
                        <span>Live</span>
                        <BsGithub/>
                    </div>
                </div>

                <div className="box">
                    <div className="project-preview"></div>
                    <div className="live-git">
                    <span>Live</span>
                        <BsGithub/>
                    </div>
                </div>

                <div className="box">
                    <div className="project-preview"></div>
                    <div className="live-git">
                    <span>Live</span>
                        <BsGithub/>
                    </div>
                </div>
                    
                <div className="box">
                    <div className="project-preview"></div>
                    <div className="live-git">
                    <span>Live</span>
                        <BsGithub/>
                    </div>
                </div>

                <div className="box">
                    <div className="project-preview"></div>
                    <div  className="live-git">
                    <span>Live</span>
                        <BsGithub/>
                    </div>
                </div>

                <div className="box">
                    <div className="project-preview"></div>
                    <div className="live-git">
                    <span>Live</span>
                        <BsGithub/>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default Projects
