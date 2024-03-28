import { useEffect, useState } from "react";
import { faAngular, faCss3, faGitAlt, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import Sidebar from "../Sidebar"
import Footer from '../Footer'
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  return (
    <>
      <Sidebar />
      <div className="header">
        <div className="Container about-page">

        </div>
        <section class="timeline">
          <div className="text-zone">

            <h1>
              <AnimatedLetters letterClass={letterClass} strArray={['P', 'R', 'O', 'J', 'E', 'C', 'T', ' ', ' ']} idx={15} />
              <AnimatedLetters letterClass={letterClass} strArray={[' ', '&', ' ']} idx={15} />
              <AnimatedLetters letterClass={letterClass} strArray={[' ', ' ', 'E', 'X', 'P', 'E', 'R', 'I', 'E', 'N', 'C', 'E']} idx={15} />

            </h1>
          </div>
          <h1>WorkShops and Internship: </h1>
          <div class="container">
            <div class="row">
              <div class="col-md-6 offset-md-3">

                <div class="timeline-item">
                  <div class="timeline-content">
                    <h3>Internship: CODSOFT</h3>
                    <h2>Duration: 1 month</h2>
                    <h2>Role: Web Developer  <a href="https://drive.google.com/file/d/1QpJePLlh6cBpJWke_3aSo8PocNmkCieZ/view"><FontAwesomeIcon icon={faSuitcase} color="white" /> </a></h2>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="timeline-content">
                    <h3>AWS: AwesomeDay Conference  </h3>
                    <h2>June, 2023</h2>
                    <h2>Online AWS Training & Conference <a href="https://media.licdn.com/dms/image/D4D22AQHt0mplQUXa3g/feedshare-shrink_1280/0/1687363535531?e=1703721600&v=beta&t=-MxAsCoMYurFLEJ3SMj8hJnDv1SpaZy4QGFYBrr2SoM"><FontAwesomeIcon icon={faSuitcase} color="white" /> </a></h2>

                  </div></div>
                <div class="timeline-item">
                  <div class="timeline-content">
                    <h3>Chandigarh University: WorkShop on IoT </h3>
                    <h2>May, 2022</h2>

                    <h2>Implementing IoT on cloud.<a href=""><FontAwesomeIcon icon={faSuitcase} color="white" /> </a></h2>

                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-content">
                    <h3>J.K. Institute of Applied Physics And Technology.</h3>
                    <h2>2020-Present</h2>
                    <h2>Active Participation in Coding Club and Cultural Fests.</h2>

                  </div></div>
              </div>
            </div>
          </div>
        </section>
        <div className="critm">
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <h1> <AnimatedLetters letterClass={letterClass} strArray={['P', 'R', 'O', 'J', 'E', 'C', 'T', ' ', ' ']} idx={15} /></h1>

            <div className="carousel-inner">
              <div className="crimg carousel-item active">
                <a href="https://ashutoshtiwari.pythonanywhere.com/home/">  <img class="d-block w-100 img-fluid" src="../veda.jpeg" alt="..." /></a>
              </div>
              <div className="crimg  carousel-item">
                <a href="https://akashtiwari.pythonanywhere.com/home/">  <img class="d-block w-100 img-fluid" src="../blog.jpeg" alt="..." /></a>
              </div>
              <div className="crimg  carousel-item">
                <a href="https://ashutoshtiwari11.github.io/weather/weather.html">  <img class="d-block w-100 img-fluid" src="../weather.jpeg" alt="..." /></a>
              </div>
              <div className="crimg  carousel-item">
                <a href="https://aquamarine-twilight-747f75.netlify.app/"> <img class="d-block w-100 img-fluid" src="../tenzie.jpeg" alt="..." /></a>
              </div>
              <div className="crimg  carousel-item">
                <a href=""> <img class="d-block w-100 img-fluid" src="../iot.jpeg" alt="..." /></a>
              </div>



              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>




        <Footer /></div>
      <Loader type="pacman" />




    </>

  )
}

export default Project