import './Navbar.css'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink



const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false)

    return (
       
        <>
             <div className="navbar-container">
             <div className="name">VY</div>

                 <div className="navbar">
                 <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars/>}
                        </div>
                    <ul   className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item" ><Link   to="home"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500} 
      
      className='nav-links' onClick={closeMobileMenu}> Home </Link> </li>
                        
    <li className="nav-item" > <Link to="about"
      spy={true}
      smooth={true}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500} spy={true} smooth={true} 

      className='nav-links' onClick={closeMobileMenu}> About </Link></li>

                        <li className="nav-item" > <Link to='projects' 
                        spy={true}
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                        offset={-100}
                        ignoreCancelEvents={false}
                        spyThrottle={500} 

                        className='nav-links' onClick={closeMobileMenu}> Projects </Link></li>

                        <li className="nav-item" > <Link to='skills'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-75}

                        isDynamic={true}
                        ignoreCancelEvents={false}
                        spyThrottle={500} 

                         className='nav-links' onClick={closeMobileMenu}> Skills </Link></li>

                        <li className="nav-item" > <Link to='contact'
                        spy={true}
                        smooth={true}
                        duration={500}                        
                        isDynamic={true}
                        ignoreCancelEvents={false}
                        spyThrottle={500} 

                         className='nav-links' onClick={closeMobileMenu}> Contact </Link></li>
                        <li className="nav-item"> <a className='cv' href="">CV</a> </li>
                  </ul>
                </div>
                
                <div className="icon-container">
                <a target='_blank' href="https://github.com/VicKLyo"> <BsGithub className='icon' > </BsGithub></a> 
                <a target='_blank' href="https://www.linkedin.com/in/viktor-yordanov-b01370221/y"><BsLinkedin className='icon'></BsLinkedin> </a> 
                </div>
                
              
                </div>
        </>
    )
}

export default Navbar
