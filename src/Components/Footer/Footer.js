import './FooterStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faInstagramSquare, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return(
        <div className='footer'>
            <div className='top'>
                <div className='head'>
                    <h1>Portofolio.</h1>
                    <p>Muhammad Farhan</p>
                </div>
                <div>
                    <a href="https://www.facebook.com">
                        <i><FontAwesomeIcon icon={faFacebookSquare} /></i>
                    </a>
                    <a href="https://www.linkedin.com">
                        <i><FontAwesomeIcon icon={faLinkedin} /></i>
                    </a>
                    <a href="https://www.instagram.com">
                        <i><FontAwesomeIcon icon={faInstagramSquare} /></i>
                    </a>
                    <a href="https://www.github.com">
                        <i><FontAwesomeIcon icon={faGithub} /></i>
                    </a>
                </div>
            </div>

            <div className='bottom'>
                <div>
                    <h4>Resources</h4>
                    <a href="/">Application</a>
                    <a href="/">Documentation</a>
                    <a href="/">Systems</a>
                    <a href="/">FAQ</a>
                </div>
                <div>
                    <h4>Pricing</h4>
                    <a href="/">Overview</a>
                    <a href="/">Premium Plans</a>
                    <a href="/">Affiliate Program</a>
                    <a href="/">Promotions</a>
                </div>
                <div>
                    <h4>Company</h4>
                    <a href="/">About Us</a>
                    <a href="/">Blog</a>
                    <a href="/">Patnerships</a>
                    <a href="/">Carrers</a>
                </div>
                <div>
                    <h4>Social</h4>
                    <a href="/">Faceboook</a>
                    <a href="/">Instagram</a>
                    <a href="/">Linkedin</a>
                    <a href="/">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;