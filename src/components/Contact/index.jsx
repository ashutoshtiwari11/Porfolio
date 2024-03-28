import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Change this import
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Footer from '../Footer'
import Sidebar from "../Sidebar"

const Contact = () => {

  const [letterClass, setletterClass] = useState('text-animate')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_51grr2h', 'template_f06yodl', form.current, 'VLYU2Mf0VNZtlmYjA')
      .then(
        () => {
          alert('Sucefully Sent! I will contact back soon. Till then .. Kindly avoid sending multiple contact requests.')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message!')
        })
  }

  return (
    <>
      <Sidebar />
      <div className="header">
        <h1><AnimatedLetters letterClass={letterClass} strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']} idx={20} /></h1>

        <div className="container contact-page">
          <div className="contact-info">
            <div>
              <p>
                I am interested in freelance opportunities - especially on ambitious
                or large projects. However, if you have any other requests or
                questions, don't hesitate to contact me using below form either.
              </p>  </div>
            <div className="form">

              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input type="text" placeholder="Name" name='name' required />
                  </li>
                  <li className="half">
                    <input type="text" placeholder="email" name="email" required />
                  </li>
                  <li>
                    <input type="text" placeholder="Subject" name="subject" required />
                  </li>
                  <li>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                  </li>
                  <li>
                    <input type="Submit" value="SEND" className="flat-button btn" />
                  </li>
                </ul>
              </form>

            </div>
          </div>


          <div className="map">

            <MapContainer className="map-show" center={[25.466936, 81.859411]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[25.466936, 81.859411]}>
                <Popup>Working Here !!</Popup>
              </Marker>
            </MapContainer>
            <div>
              <h2>University of Allahbad</h2>
              <h2>
                Pursuing My B.Tech.. </h2></div>
          </div>
        </div>
        <Footer /></div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
