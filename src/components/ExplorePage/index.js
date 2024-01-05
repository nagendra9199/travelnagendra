import React, {Component} from 'react';

import './index.css';

import Header from '../Header';
import Footer from '../Footer';

import featuredutk1 from '../../assets/Images/featuredutk1.svg';
import hotel from '../../assets/Images/hotel.svg';
import transport from '../../assets/Images/transport.svg';


class ExplorePage extends Component{

    render(){
        return(
            <div>
                <div className='explore-page-main-container'>
                    <div><Header/></div>
                    <div className='explore-page-background-container'>
                        <div className=''></div>
                        <div className='explore-page-form-container'>
                            <form>
                                <h1 className='form-head'>Customize Your Tour</h1>
                                <hr style={{width:'80%',border:'none',height:'0.1vw',backgroundColor:'rgba(0, 0, 0, 1)'}}/>

                                <div className='explore-page-form-inputs'>
                                    <input placeholder='Your Name'/><br/>
                                    <input placeholder='Email'/><br/>
                                    <input placeholder='Phone Number'/><br/>
                                    <label>Travel Date</label><br/>
                                    <input placeholder='DD-MM-YY'/><br/>
                                    <label>Duration</label><br/>
                                    <input/><br/>
                                    <label>Adult</label><br/>
                                    <input/><br/>
                                    <label>Other Tour Requirements</label><br/>
                                    <input/><br/>
                                </div>

                                <div className='explore-page-submit-button-container'>
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div>
                        <p></p>
                    </div>

                    <div className='featured-tours-container'>
                        <div className='featured-tour-container'>
                            <div className='featured-tour-image-container'>
                                <img src={featuredutk1} alt=''/>
                            </div>
                            <p className='time-for-days'>4 Nights - 5 Days</p>
                            <div className='featured-tour-heading-container'>
                                <h1 className='featured-tour-heading'>Manali Tour package 5 Days</h1>
                            </div>

                            <div className='small-background-conatiner'></div>

                            <div className='stay-and-price-container'>
                                <div className='stay-container'>
                                    <div className='hotels-container'>
                                        <img src={hotel} alt=''/>
                                        <p>Hotels</p>
                                    </div>
                                    <div className='transport-container'>
                                        <img src={transport} alt=''/>
                                        <p>Transfers</p>
                                    </div>
                                </div>

                                <div className='price-container'>
                                    <p className='feature-price'>INR 14100</p>
                                    <p className='feature-person'>Per Person</p>
                                </div>
                            </div>

                            <hr className='featured-tour-hr-line'/>
                            <p className='featured-paragraph'>Manali-solang nala-Hadimba Temple-Kullu-Naggar-Manikaran</p>

                            <div className='contact-us-view-details-container'>
                                <a href='' className='feature-tour-contactus'>Contact Us</a>

                                <a href='' className='feature-tour-view-details'>View Details</a>
                            </div>
                        </div>


                        <div className='featured-tour-container'>
                            <div className='featured-tour-image-container'>
                                <img src={featuredutk1} alt=''/>
                            </div>
                            <p className='time-for-days'>4 Nights - 5 Days</p>
                            <div className='featured-tour-heading-container'>
                                <h1 className='featured-tour-heading'>Manali Tour package 5 Days</h1>
                            </div>

                            <div className='small-background-conatiner'></div>

                            <div className='stay-and-price-container'>
                                <div className='stay-container'>
                                    <div className='hotels-container'>
                                        <img src={hotel} alt=''/>
                                        <p>Hotels</p>
                                    </div>
                                    <div className='transport-container'>
                                        <img src={transport} alt=''/>
                                        <p>Transfers</p>
                                    </div>
                                </div>

                                <div className='price-container'>
                                    <p className='feature-price'>INR 14100</p>
                                    <p className='feature-person'>Per Person</p>
                                </div>
                            </div>

                            <hr className='featured-tour-hr-line'/>
                            <p className='featured-paragraph'>Manali-solang nala-Hadimba Temple-Kullu-Naggar-Manikaran</p>

                            <div className='contact-us-view-details-container'>
                                <a href='' className='feature-tour-contactus'>Contact Us</a>

                                <a href='' className='feature-tour-view-details'>View Details</a>
                            </div>
                        </div>


                        <div className='featured-tour-container'>
                            <div className='featured-tour-image-container'>
                                <img src={featuredutk1} alt=''/>
                            </div>
                            <p className='time-for-days'>4 Nights - 5 Days</p>
                            <div className='featured-tour-heading-container'>
                                <h1 className='featured-tour-heading'>Manali Tour package 5 Days</h1>
                            </div>

                            <div className='small-background-conatiner'></div>

                            <div className='stay-and-price-container'>
                                <div className='stay-container'>
                                    <div className='hotels-container'>
                                        <img src={hotel} alt=''/>
                                        <p>Hotels</p>
                                    </div>
                                    <div className='transport-container'>
                                        <img src={transport} alt=''/>
                                        <p>Transfers</p>
                                    </div>
                                </div>

                                <div className='price-container'>
                                    <p className='feature-price'>INR 14100</p>
                                    <p className='feature-person'>Per Person</p>
                                </div>
                            </div>

                            <hr className='featured-tour-hr-line'/>
                            <p className='featured-paragraph'>Manali-solang nala-Hadimba Temple-Kullu-Naggar-Manikaran</p>

                            <div className='contact-us-view-details-container'>
                                <a href='' className='feature-tour-contactus'>Contact Us</a>

                                <a href='' className='feature-tour-view-details'>View Details</a>
                            </div>
                        </div>


                        <div className='featured-tour-container'>
                            <div className='featured-tour-image-container'>
                                <img src={featuredutk1} alt=''/>
                            </div>
                            <p className='time-for-days'>4 Nights - 5 Days</p>
                            <div className='featured-tour-heading-container'>
                                <h1 className='featured-tour-heading'>Manali Tour package 5 Days</h1>
                            </div>

                            <div className='small-background-conatiner'></div>

                            <div className='stay-and-price-container'>
                                <div className='stay-container'>
                                    <div className='hotels-container'>
                                        <img src={hotel} alt=''/>
                                        <p>Hotels</p>
                                    </div>
                                    <div className='transport-container'>
                                        <img src={transport} alt=''/>
                                        <p>Transfers</p>
                                    </div>
                                </div>

                                <div className='price-container'>
                                    <p className='feature-price'>INR 14100</p>
                                    <p className='feature-person'>Per Person</p>
                                </div>
                            </div>

                            <hr className='featured-tour-hr-line'/>
                            <p className='featured-paragraph'>Manali-solang nala-Hadimba Temple-Kullu-Naggar-Manikaran</p>

                            <div className='contact-us-view-details-container'>
                                <a href='' className='feature-tour-contactus'>Contact Us</a>

                                <a href='' className='feature-tour-view-details'>View Details</a>
                            </div>
                        </div>



                        <div className='featured-tour-container'>
                            <div className='featured-tour-image-container'>
                                <img src={featuredutk1} alt=''/>
                            </div>
                            <p className='time-for-days'>4 Nights - 5 Days</p>
                            <div className='featured-tour-heading-container'>
                                <h1 className='featured-tour-heading'>Manali Tour package 5 Days</h1>
                            </div>

                            <div className='small-background-conatiner'></div>

                            <div className='stay-and-price-container'>
                                <div className='stay-container'>
                                    <div className='hotels-container'>
                                        <img src={hotel} alt=''/>
                                        <p>Hotels</p>
                                    </div>
                                    <div className='transport-container'>
                                        <img src={transport} alt=''/>
                                        <p>Transfers</p>
                                    </div>
                                </div>

                                <div className='price-container'>
                                    <p className='feature-price'>INR 14100</p>
                                    <p className='feature-person'>Per Person</p>
                                </div>
                            </div>

                            <hr className='featured-tour-hr-line'/>
                            <p className='featured-paragraph'>Manali-solang nala-Hadimba Temple-Kullu-Naggar-Manikaran</p>

                            <div className='contact-us-view-details-container'>
                                <a href='' className='feature-tour-contactus'>Contact Us</a>

                                <a href='' className='feature-tour-view-details'>View Details</a>
                            </div>
                        </div>



                        <div className='featured-tour-container'>
                            <div className='featured-tour-image-container'>
                                <img src={featuredutk1} alt=''/>
                            </div>
                            <p className='time-for-days'>4 Nights - 5 Days</p>
                            <div className='featured-tour-heading-container'>
                                <h1 className='featured-tour-heading'>Manali Tour package 5 Days</h1>
                            </div>

                            <div className='small-background-conatiner'></div>

                            <div className='stay-and-price-container'>
                                <div className='stay-container'>
                                    <div className='hotels-container'>
                                        <img src={hotel} alt=''/>
                                        <p>Hotels</p>
                                    </div>
                                    <div className='transport-container'>
                                        <img src={transport} alt=''/>
                                        <p>Transfers</p>
                                    </div>
                                </div>

                                <div className='price-container'>
                                    <p className='feature-price'>INR 14100</p>
                                    <p className='feature-person'>Per Person</p>
                                </div>
                            </div>

                            <hr className='featured-tour-hr-line'/>
                            <p className='featured-paragraph'>Manali-solang nala-Hadimba Temple-Kullu-Naggar-Manikaran</p>

                            <div className='contact-us-view-details-container'>
                                <a href='' className='feature-tour-contactus'>Contact Us</a>

                                <a href='' className='feature-tour-view-details'>View Details</a>
                            </div>
                        </div>



                    </div>
                    <div><Footer/></div>
                </div>
            </div>
        );
    }
}

export default ExplorePage;