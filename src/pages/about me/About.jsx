import React from 'react'
import "./about.css"
import moi from '../../assets/mee.png'
import Fade from 'react-reveal/Fade';
import Socials from '../../components/socials/Socials';


const About = () => {
  return (
    <div className="about">
         
         <div className="aboutBg-title"> <h1 className="about1-bgTitle">About Me</h1></div>
      <div className="about-container">
        <div className="about1">
          <div className="about1-container">
          <div className="about1-left">
            <h2 className="about1-title">Web Developer And Designer</h2>
            <p className="about1-para">5 years ago, I decided to start a professional retraining in web dev, and starting in code, I realized that design was essential, so I took a short break of 3 years to learn graphics design, motion design and 2d and 3d animation, and returning to web dev was a big plus for my career in web development.</p>
            <button className="about1-btn">Download my CV</button>
            <Socials />
          </div>
          <div className="about1-right">
            <img src={moi} alt="" />
            <p className="about1-para2">everything that is very hard always costs more</p>
          </div>
          </div>
        </div>
        <div className="about2">

        </div>
      </div>
    </div>
    
  )
}

export default About