import './ContactStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactForm(){
    return(
        <div className="container-form">
            <h1> Contact Me</h1>
            <form>
                <input placeholder='Name' />
                <input placeholder='Email' />
                <input placeholder='Subject' />
                <textarea placeholder='Message' rows="4"></textarea>
                <button>Send Message</button>
                <div className='sosmed'>
                    <a href="https://www.facebook.com">
                        <i><FontAwesomeIcon icon={faFacebookSquare} /></i>
                    </a>
                    <a href="https://www.linkedin.com">
                        <i><FontAwesomeIcon icon={faLinkedin} /></i>
                    </a>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;