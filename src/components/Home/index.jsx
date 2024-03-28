import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Change this import
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Sidebar from "../Sidebar";
import Footer from "../Footer"
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);



  const namearray = ['A', 's', 'h', 'u', 't', 'o', 's', 'h'];
  const jobarray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  return (
    <>
      <Sidebar />
      <div className="contains container home-page">
        <div className="display mainitem">
          <div className="item">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <span className={`${letterClass} _14`}>... </span>
              <span className={`${letterClass} _14`}> Ashutosh </span>
              <span className={`${letterClass} _14`}> FullStack Web Developer</span>

            </h1>
          </div>
    
          <div className="item">
            <img className="image" src="..\primg.jpg" alt="" />
          </div>
        </div>

        <div>
          <h2> PCB designing  /  IoT / Python Developer</h2>

          <p> <br />As a skilled Full Stack Web Developer proficient in Python, C++, Django, and
            React, I have honed my abilities in delivering high-quality code and building
            intuitive web applications. My focus on Python development has allowed me
            to develop a deep understanding of the language and its frameworks,
            enabling me to craft efficient solutions that meet client requirements.  I am
            enthusiastic about contributing my expertise as a Python Developer,
            embracing new challenges, and collaborating with teams to create
            impactful software solutions.
          </p>
          <div className="butcon">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            <br />
            <Link to='/about' className="flat-button"> About Me</Link>
            <Link to="/Project" className="flat-button">
              Project
            </Link>

          </div>
        </div>
      </div>
      <Footer />
      <Loader type="pacman" />
    </>
  );
};

export default Home;
