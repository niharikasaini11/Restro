import React from "react";
import { Link } from "react-router-dom"
import { HiOutlineArrowNarrowRight  } from 'react-icons/hi'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus odio illo provident tenetur vel, sed ducimus
            reiciendis, nulla dolore quo dolorum eaque qui. Atque saepe eos
            eveniet officiis? Enim eveniet tempora rerum necessitatibus
            consequuntur culpa voluptatem, explicabo modi at quae error ut
            exercitationem non asperiores assumenda odio distinctio nulla
            minima!
          </p>
          <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight /></span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
