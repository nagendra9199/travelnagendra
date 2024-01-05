import React, {Component} from 'react';

import './index.css';
import Header from '../Header';
import Footer from '../Footer';

import aboutusimage1 from '../../assets/Images/aboutimages/aboutusimage1.svg';
import aboutusimage2 from '../../assets/Images/aboutimages/aboutusimage2.svg';
import star1 from '../../assets/Images/star1.svg';
import star2 from '../../assets/Images/star2.svg';

class Aboutus extends Component{
    render(){
        return(
            <div>
                <div className='about-us-main-container'>
                    <div><Header/></div>
                    <div className='about-us-background-container'>
                        <div className='about-us-content-container'>
                            <h1>About Us</h1>
                            <h1>We Provide Different Type of tours </h1>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document 
                                or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                            </p>
                        </div>
                    </div>
                    <h1 className='about-us-heading'>About Us</h1>
                    <p className='about-us-blue-line'></p>

                    <div className='about-us-content-image-container1'>
                        <div className='about-us-image-container1'>
                            <img src={aboutusimage1} alt=''/>
                        </div>

                        <div className='about-us-content-container1'>
                            <h1>Get 100% Satisfaction With Our Servicde</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eius
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad miat
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip eatur
                                commodo consequat. Duis aute irure dolor in reprehenderit inpariatr
                            </p>
                            <p>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip eatur
                                commodo consequat. Duis aute irure dolor in reprehenderit inpariatr
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eius
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad miat
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip eatur
                                commodo consequat. Duis aute irure dolor in reprehenderit inpariatr
                            </p>
                        </div>
                    </div>


                    <div className='about-us-content-image-container2'>
                        <div className='about-us-content-container2'>
                            <div className='about-us-content-mini-container1'>
                                <h1>20 +</h1>
                                <h2>Year Of Experience</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc
                                    tempor incididunt ut labore et do  
                                </p>
                            </div>

                            <div className='about-us-content-mini-container2'>
                                <h1>20 +</h1>
                                <h2>Year Of Experience</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc
                                    tempor incididunt ut labore et do  
                                </p>
                            </div>

                            <div className='about-us-content-mini-container3'>
                                <h1>20 +</h1>
                                <h2>Year Of Experience</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc
                                    tempor incididunt ut labore et do  
                                </p>
                            </div>


                            <div className='about-us-content-mini-container4'>
                                <h1>20 +</h1>
                                <h2>Year Of Experience</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisc
                                    tempor incididunt ut labore et do  
                                </p>
                            </div>
                        </div>
                        
                        <div className='about-us-image-container2'>
                            <img src={aboutusimage2} alt=''/>
                        </div>
                    </div>


                    <div className='client-reviews-main-container'>
                        <div className='client-reviews-background-container'>
                            <div className='client-reviews-background-content'>
                                <h2>Client Reviews</h2>
                                <h1>TRAVELLER’S TESTIMONIAL</h1>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be
                                                   used as a placeholder before final copy is available.
                                </p>
                            </div>
                        </div>
                        <div className='review-container-flex'>
                            <div className='review-container'>
                                <div className='review-name-profile-container'>
                                    <div className='review-name-stars-container'>
                                        <h1>P Nagendra</h1>
                                        <img src={star1} alt=''/>
                                        <img src={star1} alt=''/>
                                        <img src={star1} alt=''/>
                                        <img src={star1} alt=''/>
                                        <img src={star2} alt=''/>
                                    </div>
                                    <div className='review-profile-container'></div>
                                </div>
                                <div className='review-content-paragraph'>
                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may 
                                        </p>
                                </div>
                            </div>


                            <div className='review-container'>
                            <div className='review-name-profile-container'>
                                    <div className='review-name-stars-container'>
                                        <h1>P Nagendra</h1>
                                        <img src={star1} alt=''/>
                                        <img src={star1} alt=''/>
                                        <img src={star1} alt=''/>
                                        <img src={star1} alt=''/>
                                        <img src={star2} alt=''/>
                                    </div>
                                    <div className='review-profile-container'></div>
                                </div>
                                <div className='review-content-paragraph'>
                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may 
                                        </p>
                                </div>
                            </div>


                            <div className='review-container'>
                            <div className='review-name-profile-container'>
                                    <div className='review-name-stars-container'>
                                        <h1>P Nagendra</h1>
                                        <img src={star1} alt=''/>
                                        <img src={star1} alt=''/>
                                        <img src={star1} alt=''/>
                                        <img src={star1} alt=''/>
                                        <img src={star2} alt=''/>
                                    </div>
                                    <div className='review-profile-container'></div>
                                </div>
                                <div className='review-content-paragraph'>
                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may 
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div><Footer/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutus;