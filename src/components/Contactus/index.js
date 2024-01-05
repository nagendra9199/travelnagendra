import React, {Component} from 'react';

import './index.css';

import Header from '../Header';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import contactusimage1 from '../../assets/Images/contactusimages/contactusimage1.svg';


class Contactus extends Component{
    render(){
        return(
            <div>
                <div className='contactus-main-container'>
                    <div className='contactus-background-image'>
                        <div><Header/></div>
                        <div className='contact-us-top-section'>
                            <h1 className='contact-us-heading-top'>Contact Us</h1>
                            <p className='contact-us-paragraph-top'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a docuent or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        </div>
                    </div>

                    <div className='contact-us-section'>
                        <h1 className='contact-us-heading'>Contact Us</h1>
                        <p className='contact-us-blue-line'></p>
                        <div className='contact-us-content-image-container'>
                            <div className='contact-us-content-container'>
                                <h1 className='contact-us-duti-heading'>Duti Trips</h1>
                                <div className='contact-us-address-container'>
                                    <h2>Shimla Office</h2>
                                    <div className='contact-us-flex-container'>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/>
                                        <p>Office No 101, Chambyal
                                            House,Khalini Chowk, Khalini,Shimla - 171002, Himachal Pradesh
                                        </p>
                                    </div>
                                    <div className='contact-us-flex-container'>
                                        <FontAwesomeIcon icon={faPhone} className='icon'/>
                                        <div>
                                            <h3>Phone No</h3>
                                            <p>00177-292883</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='contact-us-address-container'>
                                    <h2>Shimla Office</h2>
                                    <div className='contact-us-flex-container'>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/>
                                        <p>Office No 101, Chambyal
                                            House,Khalini Chowk, Khalini,Shimla - 171002, Himachal Pradesh
                                        </p>
                                    </div>
                                    <div className='contact-us-flex-container'>
                                        <FontAwesomeIcon icon={faPhone} className='icon'/>
                                        <div>
                                            <h3>Phone No</h3>
                                            <p>00177-292883</p>
                                        </div>
                                    </div>
                                    
                                    <div className='contact-us-flex-container'>
                                        <FontAwesomeIcon icon={faEnvelope}  className='icon'/>
                                        <div>
                                            <h3>Email Address</h3>
                                            <p>Info@dutitrips.com</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='contact-us-image-container'>
                                <img src={contactusimage1} alt=''/>
                                <div className='contact-us-flex-container'>
                                    <FontAwesomeIcon icon={faWhatsapp}  className='icon'/>
                                    <div>
                                        <h3>WhatsApp</h3>
                                        <p>+91 9383728273</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='contact-us-map-container'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7648.199730825669!2d82.10941308684902!3d16.571480169986238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37fa08533cb269%3A0xe2d90f1ab0f69e80!2sChina%20Gadavilli%2C%20Andhra%20Pradesh%20533212!5e0!3m2!1sen!2sin!4v1703933448653!5m2!1sen!2sin"
                            width="1200"
                            height="450"
                            style={{ border: '0',marginLeft:'5vw' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>


                    <div><Footer/></div>
                </div>
            </div>
        );
    }
}

export default Contactus;