import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <>
      <div className='footer'>
        <a href="https://www.linkedin.com/in/ashutosh-tiwari-a41296239/" target="_blank" rel="noopener noreferrer">
          <img src="../linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/ashutoshtiwari11" target="_blank" rel="noopener noreferrer">
          <img src="../github.png" alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/ashutoshtiwari6926/" target="_blank" rel="noopener noreferrer">
          <img src="../insta.jpg" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100022634391282" target="_blank" rel="noopener noreferrer">
          <img src="../facebook.png" alt="Facebook" />
        </a>
      </div>
    </>
  )
}

export default Footer