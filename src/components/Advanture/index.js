import React, {Component} from 'react';

import './index.css';
import Header from '../Header';
import Footer from '../Footer';
import rockclimbing from '../../assets/Images/adventureimages/rockclimbing.svg';
import rapelling from '../../assets/Images/adventureimages/rapelling.svg';
import trekking from '../../assets/Images/adventureimages/trekking.svg';
import mountaineering from '../../assets/Images/adventureimages/mountaineering.svg';
import natureawereness from '../../assets/Images/adventureimages/natureawereness.svg';
import aboutfounder from '../../assets/Images/adventureimages/aboutfounder.svg';

class Advanture extends Component{
    render(){
        return(
            <div>
                <div className='advanture-main-container'>
                    <div className='advanture-background-container'>
                        <Header/>

                        <div className='advanture-page-content-container'>
                            <h1 className='advanture-heading'>KRANTHI ADVANTURE (R)</h1>

                            <p className='advanture-paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>

                        </div>
                    </div>

                    <div className='about-founder-main-container'>
                        <h1 className='about-founder-heading'>About Founder</h1>
                        <div className='about-founder-image-container'>
                            <img src={aboutfounder} alt=''/>
                        </div>
                    </div>



                    <div className='advanture-events-main-container'>
                        <div className='advanture-events-background-container'>
                            <div className='advanture-events-content-container'>
                                <h1 className='advanture-events-heading'>Adventure Events</h1>
                                <p className='blue-line-advanture-events'></p>
                                <p className='advanture-events-paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a docuent or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                            </div>
                        </div>
                        <div className='advanture-events-programs-container'>
                            <div className='advanture-event-program'>
                                <img src={rockclimbing} alt=''/>
                                    <h1 className='advanture-event-heading'>ROCK CLIMBING</h1>
                                    <div className='advanture-event-para-more-container'>
                                        <p className='advanture-event-paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                        <p className='advanture-event-more-info'>MORE INFO</p>
                                    </div>
                            </div>




                            <div className='advanture-event-program'>
                                <img src={rapelling} alt=''/>
                                    <h1 className='advanture-event-heading'>RAPELLING</h1>
                                    <div className='advanture-event-para-more-container'>
                                        <p className='advanture-event-paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                        <p className='advanture-event-more-info'>MORE INFO</p>
                                    </div>
                            </div>




                            <div className='advanture-event-program'>
                                <img src={trekking} alt=''/>
                                    <h1 className='advanture-event-heading'>TREKKING</h1>
                                    <div className='advanture-event-para-more-container'>
                                        <p className='advanture-event-paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                        <p className='advanture-event-more-info'>MORE INFO</p>
                                    </div>
                            </div>




                            <div className='advanture-event-program'>
                                <img src={mountaineering} alt=''/>
                                    <h1 className='advanture-event-heading'>ROCK CLIMBING</h1>
                                    <div className='advanture-event-para-more-container'>
                                        <p className='advanture-event-paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                        <p className='advanture-event-more-info'>MORE INFO</p>
                                    </div>
                            </div>




                            <div className='advanture-event-program'>
                                <img src={rockclimbing} alt=''/>
                                    <h1 className='advanture-event-heading'>ROCK CLIMBING</h1>
                                    <div className='advanture-event-para-more-container'>
                                        <p className='advanture-event-paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                        <p className='advanture-event-more-info'>MORE INFO</p>
                                    </div>
                            </div>






                            <div className='advanture-event-program'>
                                <img src={natureawereness} alt=''/>
                                    <h1 className='advanture-event-heading'>ROCK CLIMBING</h1>
                                    <div className='advanture-event-para-more-container'>
                                        <p className='advanture-event-paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                        <p className='advanture-event-more-info'>MORE INFO</p>
                                    </div>
                            </div>


                            <div className='advanture-event-program'>
                                <img src={rockclimbing} alt=''/>
                                    <h1 className='advanture-event-heading'>ROCK CLIMBING</h1>
                                    <div className='advanture-event-para-more-container'>
                                        <p className='advanture-event-paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                        <p className='advanture-event-more-info'>MORE INFO</p>
                                    </div>
                            </div>




                            <div className='advanture-event-program'>
                                <img src={rockclimbing} alt=''/>
                                    <h1 className='advanture-event-heading'>ROCK CLIMBING</h1>
                                    <div className='advanture-event-para-more-container'>
                                        <p className='advanture-event-paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                        <p className='advanture-event-more-info'>MORE INFO</p>
                                    </div>
                            </div>



                            <div className='advanture-event-program'>
                                <img src={rockclimbing} alt=''/>
                                    <h1 className='advanture-event-heading'>ROCK CLIMBING</h1>
                                    <div className='advanture-event-para-more-container'>
                                        <p className='advanture-event-paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                        <p className='advanture-event-more-info'>MORE INFO</p>
                                    </div>
                            </div>

                            <div className='advanture-event-program'>
                                <img src={rockclimbing} alt=''/>
                                    <h1 className='advanture-event-heading'>BIKE RIDING</h1>
                                    <div className='advanture-event-para-more-container'>
                                        <p className='advanture-event-paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                        <p className='advanture-event-more-info'>MORE INFO</p>
                                    </div>
                            </div>

                            <div className='advanture-event-program'>
                                <img src={rockclimbing} alt=''/>
                                    <h1 className='advanture-event-heading'>PARASAILING</h1>
                                    <div className='advanture-event-para-more-container'>
                                        <p className='advanture-event-paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                        <p className='advanture-event-more-info'>MORE INFO</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div><Footer/></div>
                </div>
            </div>
        );
    }
}

export default Advanture;