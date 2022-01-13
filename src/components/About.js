import './About.css'
import 'aos/dist/aos.css'
import {ReactComponent as ReactImage} from './programming.svg';


const About = () => {
    return (
        <div id='about' className="about-container" data-aos="fade-right" data-aos-duration="2200" data-aos-once >
            <div className="about-image-container">
            <ReactImage className="about-image"/>
            </div>
            <div className="about-content-wrapper">
            <div className="about-title-wrapper">
                <h2>About</h2>
            </div>
            <div className="about-text-wrapper">
                <p>I'm an IT student at New Bulgarian University with love for the Front End. I also enjoy playing sports, working out and living a healthy lifestyle. Passionate, hard-working and hungry to learn more every day.</p>
            </div>
            </div>
        </div>
    )
}

export default About
