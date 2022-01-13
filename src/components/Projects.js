import './Projects.css'
import { BsGithub } from 'react-icons/bs'
import image2 from './Screenshot_1.png'
import 'aos/dist/aos.css'


const ProjectPreview = ({ image, text }) => {
  
    return (
        <div className='projects-container' >
            <div
                className="project-preview">
                <img src={image} alt="" />
                    <div className="hover-container">
                        <p>{text}</p>
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
                     <ProjectPreview text={"My description"} image={image2} /> 
                    <div className="live-git">
                       <a href="" target="_blank"><span className='live-btn'>Live</span></a> 
                      <a href="" target="_blank"><BsGithub className='projects-icon'/></a>  
                    </div>
                </div>

                <div className="box">
                <ProjectPreview text={"My description"} image={image2} /> 
                    <div className="live-git">
                    <a href="" target="_blank"><span className='live-btn'>Live</span></a> 
                    <a href="" target="_blank"><BsGithub className='projects-icon'/></a>  
                    </div>
                </div>

                <div className="box">
                <ProjectPreview text={"My description"} image={image2} /> 
                    <div className="live-git">
                    <a href="" target="_blank"><span className='live-btn'>Live</span></a> 
                    <a href="" target="_blank"><BsGithub className='projects-icon'/></a>  
                    </div>
                </div>
                    
                <div className="box">
                <ProjectPreview text={"My description"} image={image2} /> 
                    <div className="live-git">
                    <a href="" target="_blank"><span className='live-btn'>Live</span></a> 
                    <a href="" target="_blank"><BsGithub className='projects-icon'/></a>  
                    </div>
                </div>

                <div className="box">
                <ProjectPreview text={"My description"} image={image2} /> 
                    <div  className="live-git">
                    <a href="" target="_blank"> <span className='live-btn'>Live</span> </a> 
                    <a href="" target="_blank"><BsGithub className='projects-icon'/></a>  
                    </div>
                </div>

                <div className="box">
                <ProjectPreview text={"My description"} image={image2} /> 
                    <div className="live-git">
                    <a href="" target="_blank"><span className='live-btn'>Live</span></a> 
                      <a href="" target="_blank"><BsGithub className='projects-icon'/></a>  
                    </div>
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default Projects
