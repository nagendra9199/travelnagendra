import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


import { faMapMarkerAlt, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import contactusimage1 from '../../assets/Images/contactusimages/contactusimage1.svg';

import './index.css';
import Header from "../Header";
import Tourpagebackgroundwithoutform from '../Tourpagebackgroundwithoutform';

import dinner from '../../assets/Images/dinner.svg';
import Footer from "../Footer";


const Tourdetails =()=>{
    return(
        <div>
            <div className="tour-details-main-container">

                <div><Header/></div>
                <div><Tourpagebackgroundwithoutform/></div>
                <div className="tour-details-heading">
                    <h1>Manali Tour package 5 Days</h1>
                    <p className="tour-details-blue-line"></p>
                </div>
                <h1 className="tour-details-sub-head">Itinerary Details</h1>
                <div className="tour-details-dinner-hotels-container-flex">
                    <div className="tour-details-dinner-hotels-container">
                        <div className="tour-details-small-container">
                            <img src={dinner} alt=""/>
                        </div>
                        <hr/>
                        <div className="tour-details-small-container">
                            <img src={dinner} alt=""/>
                        </div>
                        <hr/>
                        <div className="tour-details-small-container">
                            <img src={dinner} alt=""/>
                        </div>
                        <hr/>
                        <div className="tour-details-small-container">
                            <img src={dinner} alt=""/>
                        </div>
                        <hr/>
                        <div className="tour-details-small-container">
                            <img src={dinner} alt=""/>
                        </div>
                        <hr/>
                        <div className="tour-details-small-container">
                            <img src={dinner} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="tour-details-days-container">
                    <h1 className="tour-details-days-heading">ITINERARY :- (*Manali 4N5D* )</h1>
                    <div className="tour-details-days-total-container">
                        <div className="tour-details-each-main-container">
                            <div className="tour-details-days-each-container">
                                <p className="tour-details-blue-background">Day 01</p>
                                <div className="tour-details-content-icon-container">
                                    <p className="tour-details-para1-container">Delhi – Manali: - (Approx. 550 kms)</p>
                                    <div className="line-arrow-icon">
                                        <p className="tour-details-vertical-line"></p>
                                        <p><FontAwesomeIcon icon={faArrowDown}  className="arrow-icon"/></p>
                                    </div>                                
                                </div>
                            </div>
                            <p className="tour-details-para2">Pick up from Delhi Airport then transfer to Manali. Reach Manali check in to the hotel & overnight stay at hotel. Arrival should be in Morning .</p>
                        </div>




                        <div className="tour-details-each-main-container">
                            <div className="tour-details-days-each-container">
                                <p className="tour-details-blue-background">Day 02</p>
                                <div className="tour-details-content-icon-container">
                                    <p className="tour-details-para1-container">Delhi – Manali: - (Approx. 550 kms)</p>
                                    <div className="line-arrow-icon">
                                        <p className="tour-details-vertical-line"></p>
                                        <p><FontAwesomeIcon icon={faArrowDown}  className="arrow-icon"/></p>
                                    </div>                                
                                </div>
                            </div>
                            <p className="tour-details-para2">Pick up from Delhi Airport then transfer to Manali. Reach Manali check in to the hotel & overnight stay at hotel. Arrival should be in Morning .</p>
                        </div>



                        <div className="tour-details-each-main-container">
                            <div className="tour-details-days-each-container">
                                <p className="tour-details-blue-background">Day 03</p>
                                <div className="tour-details-content-icon-container">
                                    <p className="tour-details-para1-container">Delhi – Manali: - (Approx. 550 kms)</p>
                                    <div className="line-arrow-icon">
                                        <p className="tour-details-vertical-line"></p>
                                        <p><FontAwesomeIcon icon={faArrowDown}  className="arrow-icon"/></p>
                                    </div>                                
                                </div>
                            </div>
                            <p className="tour-details-para2">Pick up from Delhi Airport then transfer to Manali. Reach Manali check in to the hotel & overnight stay at hotel. Arrival should be in Morning .</p>
                        </div>




                        <div className="tour-details-each-main-container">
                            <div className="tour-details-days-each-container">
                                <p className="tour-details-blue-background">Day 04</p>
                                <div className="tour-details-content-icon-container">
                                    <p className="tour-details-para1-container">Delhi – Manali: - (Approx. 550 kms)</p>
                                    <div className="line-arrow-icon">
                                        <p className="tour-details-vertical-line"></p>
                                        <p><FontAwesomeIcon icon={faArrowDown}  className="arrow-icon"/></p>
                                    </div>                                
                                </div>
                            </div>
                            <p className="tour-details-para2">Pick up from Delhi Airport then transfer to Manali. Reach Manali check in to the hotel & overnight stay at hotel. Arrival should be in Morning .</p>
                        </div>




                        <div className="tour-details-each-main-container">
                            <div className="tour-details-days-each-container">
                                <p className="tour-details-blue-background">Day 05</p>
                                <div className="tour-details-content-icon-container">
                                    <p className="tour-details-para1-container">Delhi – Manali: - (Approx. 550 kms)</p>
                                    <div className="line-arrow-icon">
                                        <p className="tour-details-vertical-line"></p>
                                        <p><FontAwesomeIcon icon={faArrowDown}  className="arrow-icon"/></p>
                                    </div>                                
                                </div>
                            </div>
                            <p className="tour-details-para2">Pick up from Delhi Airport then transfer to Manali. Reach Manali check in to the hotel & overnight stay at hotel. Arrival should be in Morning .</p>
                        </div>
                    </div>
                </div>

                <div className='contact-us-section'>
                        <h1 className='contact-us-heading'>Contact</h1>
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
                                    <FontAwesomeIcon icon={faWhatsapp} className='icon'/>
                                    <div>
                                        <h3>WhatsApp</h3>
                                        <p>+91 9383728273</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div><Footer/></div>
            </div>
        </div>
    );
}

export default Tourdetails;