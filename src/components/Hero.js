import { Link } from 'react-router-dom'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import './Hero.css'



const Hero = () => {
    return (
     <div className="hero-container">
        <div className="name-wrapper"> <h1><span>Viktor</span> Yordanov</h1></div>
        <div className="under-name-wrapper">Front End Web Developer
                <div className="icon-container">
                    <a target='_blank' href="https://github.com/VicKLyo"> <BsGithub className='icon' > </BsGithub></a> 
                    <a target='_blank' href="https://www.linkedin.com/in/viktor-yordanov-b01370221/y"><BsLinkedin className='icon'></BsLinkedin> </a>
                </div>
                </div>
       </div>
    
        
    )
}

export default Hero
