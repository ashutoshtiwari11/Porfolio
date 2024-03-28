import { useEffect, useState } from "react";
import { faAngular, faCss3, faGitAlt, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import Sidebar from "../Sidebar"
import Footer from '../Footer'
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  return (
    <>
      <Sidebar />
      <div className="header">
        <div className="Container about-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>ABOUT ME</span>
            </h1>
            <div className="alignme">
              <p>
                Ambitious fourth-year ECE student with a passion for coding and technology. Proficient in Python, C++, and C, I specialize in full-stack development with React, Django, and SQL. Experienced in crafting projects spanning frontend, backend, and IoT.
              </p>
              <p align="LEFT">
                Enthusiastic about machine learning, AI, and constant learning. Chess player, nature lover, seeking opportunities in an established IT company to work with cutting-edge technologies and contribute my diverse skills.
              </p>

            </div>
          </div>
          <div className="skillset">
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
              </div>
            </div>
            <div className="others">
              <h1>OtherSkills:</h1>
              <h5>Python</h5>
              <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-success" style={{ width: '95%' }}></div>
              </div>
              <h5>OpenCV</h5>
              <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-info" style={{ width: '70%' }}></div>
              </div>
              <h5>Tailwind CSS</h5>
              <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-warning" style={{ width: '95%' }}></div>
              </div>
              <h5>DJANGO</h5>
              <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
              </div>
              <h5>MySql</h5>
              <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-primary" style={{ width: '85%' }}></div>
              </div>

            </div></div>



        </div>


        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['E', 'D', 'U', 'C', 'A', 'T', 'I', '0', 'N']} idx={15} />
        </h1>
        <section class="timeline">
          <div class="container">
            <div class="row">
              <div class="col-md-6 offset-md-3">

                <div class="timeline-item">
                  <div class="timeline-content">
                    <h2>J. K. Institute of Applied Physics And Technology</h2>
                    <h2>Bachelors in Electronics And Communication Enggeniering.</h2>
                    <h2>Graduation Year: 2024</h2>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="timeline-content">
                    <h2>Carman Residential And Day School</h2>
                    <h2>Intermediate</h2>
                    <h2>94%        Year:2018-2019</h2>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="timeline-content">
                    <h2>Carman Residential And Day School</h2>
                    <h2>High School</h2>
                    <h2>91%       Year: 2016-2017</h2>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['C', 'E', 'R', 'T', 'I', 'F', 'I', 'C', 'A', 'T', 'I', '0', 'N', 'S']} idx={15} />
        </h1>
        <section class="timeline">
          <div class="container">
            <div class="row">
              <div class="col-md-6 offset-md-3">

                <div class="timeline-item">
                  <div class="timeline-content">
                    <h2>Google IT Automation Certification</h2>
                    <h2>Coursera : <a href="https://coursera.org/share/e8c4e83dbb13b543f994571df1822297"><FontAwesomeIcon icon={faSuitcase} color="white" /> </a></h2>
                    <h2>Issued: Nov 2022</h2>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-content">
                    <h2>Global Satellite Navigation System </h2>
                    <h2>IIRS, ISRO: <a href=""><FontAwesomeIcon icon={faSuitcase} color="white" /> </a></h2>
                    <h2>Issued: September 2021</h2>
                  </div>
                </div>

              </div></div></div>
        </section>
        <Footer /></div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
