import React from 'react'
import Cartoon from '../images/laptopcartoon.png'

const About = () => {
    return (
        <section id="about">
          <div className="container">
            <div className="left">
            <h1 className="about-title">Hello! I'm Rasheeda <br/> - a Front End Developer.</h1>
            <p className="about-body">
            My main focus is to offer insightful ways to build a digital presence.
            And I enjoy leveraging my love of learning to help people show their value.
            <br/>
            Helping others help themselves brings me fulfillment.
            </p>
            </div>
            <div className="right">
            <img className="cartoon" src={Cartoon} width="400" alt="headshot" />
            {/* <img src="{process.env.PUBLIC_URL} '/images/laptopcartoon.png'" alt="headshot"/> */}
            </div>
          </div>
        </section>
      );
}

export default About
