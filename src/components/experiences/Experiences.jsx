import React from 'react'
import "./experiences.css"
import lampe from "../../assets/lampe.png"
import valise from "../../assets/valise.png"
import Fade from 'react-reveal/Fade';




const Experiences = () => {
  return (
    <div className='experiences'>
        <div className="exp-container">
            <div className="exp-left">
                <div className="left-top">
                   <img src={lampe} alt="" />
                   <h2>Skills</h2>
                </div>
                <div className="left-bottom">
                <Fade left>
                    <p>Regarding my skills, I learned
                       to handle a lot of software to ensure the
                       good image and the satisfaction of my cliients.
                       So as it is marked above, I could
                       work well in a lot of positions and I site
                        for example : <br />
                       - Web writing <br />
                       - the infographic <br />
                       - UI and UX design <br />
                       - web development <br />
                       - motion design <br />
                       - video editing <br />
                       - 3d modeling <br />
                       And as I am an ambitious person, I am
                        always learning new
                          technologies.</p>
                </Fade>
                </div>
            </div>
            <div className="exp-right">
                <div className="right-top">
                    <img src={valise} alt="" />
                    <Fade right>
                    <h2>Experiences</h2>
                    </Fade>
                </div>
                <div className="right-bottom">
                  <Fade right>
                    <p>Well we are already talking about my
                       experiences, in a few lines I would say that
                       my career as a Freelancer and really full of
                       difficulties that really helped me sharpen my
                       talents, because you have to know that working in a
                        company or a startup in my opinion will be much more
                        comfortable than being a freelancer, because everything is 
                       there : <br />
                       a whole team that manages problems together,
                       but being alone in many situations
                       like managing stress, ensuring delivery in
                       time, client meetings, issues
                         equipment and much more, in short, to be everything
                        alone and take care of everything at the same time, and 
                      that's what I like in my work “taking up challenges”.</p>
                  </Fade>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experiences