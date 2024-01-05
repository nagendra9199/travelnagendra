import React from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';

import Header from '../Header';
import Footer from '../Footer';
import Tourpagebackground from '../Tourpagebackground';
import Tourdetails from '../Tourpagebackground';


import featuredutk1 from '../../assets/Images/featuredutk1.svg';
import hotel from '../../assets/Images/hotel.svg';
import transport from '../../assets/Images/transport.svg';


const Tourpage=()=>{
    const navigate=useNavigate();

    const handleViewDetailsClick=()=>{
        navigate('/Tourdetails')
    }
    return(
        <div>
            <div className='tour-page-main-container'>
                <div><Header/></div>
                <div><Tourpagebackground/></div>
                <div className='tour-page-sub-tours-container'>
                    <h1 className='tour-page-sub-tours-heading'>Top Location in Delhi Shimla and Manali</h1>
                    <p className='tour-page-blue-line'></p>
                    
                <div className='tour-page-sub-tours-main-container'>
                    <div className='tour-page-sub-tour-each-container'>
                        <div className='tour-page-sub-tour-image-container'>
                            <img src={featuredutk1} alt=''/>
                        </div>
                        <p className='tour-page-time-for-days'>4 Nights - 5 Days</p>
                        <h1 className='sub-tours-each-tour-heading'>Manali Tour package 5 Days</h1>
                        <div className='tour-page-small-background-conatiner'></div>

                        <div className='tour-page-stay-and-price-container'>
                                <div className='tour-page-stay-container'>
                                    <div className='tour-page-hotels-container'>
                                        <img src={hotel} alt=''/>
                                        <p>Hotels</p>
                                    </div>
                                    <div className='tour-page-transport-container'>
                                        <img src={transport} alt=''/>
                                        <p>Transfers</p>
                                    </div>
                                </div>

                                <div className='tour-page-price-container'>
                                    <p className='tour-page-feature-price'>INR 14100</p>
                                    <p className='tour-page-feature-person'>Per Person</p>
                                </div>
                            </div>

                            <hr className='tour-page-featured-tour-hr-line'/>
                            <p className='tour-page-featured-paragraph'>Manali-solang nala-Hadimba Temple-Kullu-Naggar-Manikaran</p>

                            <div className='tour-page-contact-us-view-details-container'>
                                <a href='' className='tour-page-feature-tour-contactus'>Contact Us</a>

                                <a href='#' className='tour-page-feature-tour-view-details' onClick={handleViewDetailsClick}>View Details</a>
                            </div>
                    </div>


                    <div className='tour-page-sub-tour-each-container'>
                        <div className='tour-page-sub-tour-image-container'>
                            <img src={featuredutk1} alt=''/>
                        </div>
                        <p className='tour-page-time-for-days'>4 Nights - 5 Days</p>
                        <h1 className='sub-tours-each-tour-heading'>Manali Tour package 5 Days</h1>
                        <div className='tour-page-small-background-conatiner'></div>

                        <div className='tour-page-stay-and-price-container'>
                                <div className='tour-page-stay-container'>
                                    <div className='tour-page-hotels-container'>
                                        <img src={hotel} alt=''/>
                                        <p>Hotels</p>
                                    </div>
                                    <div className='tour-page-transport-container'>
                                        <img src={transport} alt=''/>
                                        <p>Transfers</p>
                                    </div>
                                </div>

                                <div className='tour-page-price-container'>
                                    <p className='tour-page-feature-price'>INR 14100</p>
                                    <p className='tour-page-feature-person'>Per Person</p>
                                </div>
                            </div>

                            <hr className='tour-page-featured-tour-hr-line'/>
                            <p className='tour-page-featured-paragraph'>Manali-solang nala-Hadimba Temple-Kullu-Naggar-Manikaran</p>

                            <div className='tour-page-contact-us-view-details-container'>
                                <a href='' className='tour-page-feature-tour-contactus'>Contact Us</a>

                                <a href='' className='tour-page-feature-tour-view-details'>View Details</a>
                            </div>
                    </div>



                    <div className='tour-page-sub-tour-each-container'>
                        <div className='tour-page-sub-tour-image-container'>
                            <img src={featuredutk1} alt=''/>
                        </div>
                        <p className='tour-page-time-for-days'>4 Nights - 5 Days</p>
                        <h1 className='sub-tours-each-tour-heading'>Manali Tour package 5 Days</h1>
                        <div className='tour-page-small-background-conatiner'></div>

                        <div className='tour-page-stay-and-price-container'>
                                <div className='tour-page-stay-container'>
                                    <div className='tour-page-hotels-container'>
                                        <img src={hotel} alt=''/>
                                        <p>Hotels</p>
                                    </div>
                                    <div className='tour-page-transport-container'>
                                        <img src={transport} alt=''/>
                                        <p>Transfers</p>
                                    </div>
                                </div>

                                <div className='tour-page-price-container'>
                                    <p className='tour-page-feature-price'>INR 14100</p>
                                    <p className='tour-page-feature-person'>Per Person</p>
                                </div>
                            </div>

                            <hr className='tour-page-featured-tour-hr-line'/>
                            <p className='tour-page-featured-paragraph'>Manali-solang nala-Hadimba Temple-Kullu-Naggar-Manikaran</p>

                            <div className='tour-page-contact-us-view-details-container'>
                                <a href='' className='tour-page-feature-tour-contactus'>Contact Us</a>

                                <a href='' className='tour-page-feature-tour-view-details'>View Details</a>
                            </div>
                    </div>



                </div>
                <div><Footer/></div>
                </div>
            </div>
        </div>
    );
}

export default Tourpage