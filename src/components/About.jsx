import React from 'react'
import Full from '../img/full.jpg'

const About = () => {
  return (
    <div>
         <section id="about_me" className="p-5 bg-dark text-light">
        <div className="container d-lg-flex text-md-start justify-content-between">
            <img src={Full} id='grey' className="image-fluid img-thumbnail d-none d-lg-block px-3"  alt="Full Image of Josh" />
            <section className="px-3 flex-lg-grow-1">
                <h1 className="text-center">About the Dev</h1>
                <div className="lead">
                    <p>I am a semi-self-taught developer who is now focusing on front-end development to pursue as a career path.</p>
                    <p>I started my journey making simple web pages utilizing site building tools online.
                    I then spent some time with the hardware and networking side of computing, and pursued a BSIT at Colorado Tech. I earned that degree in May of 2000.</p>
                    <p>In college I learned C++ and wrote many small programs. After college I taught myself Python, planning to enter the market as a back-end developer.</p>
                    <p>However I found that I much preferred the visuals of front-end development, and the real-time feedback of being able to see the results as you code it.</p>
                    <p>Now I have taught myself a list of technologies and am looking to jump into the industry as a front-end programmer.</p>
                </div>
            </section>
            
        </div>
    </section>
    </div>
  )
}

export default About