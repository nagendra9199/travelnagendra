import React, {Component} from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './index.css';

import gallery18 from '../../assets/Images/gallery/gal18.jpg';
import gal23 from '../../assets/Images/gallery/gal23.jpg';
import gal24 from '../../assets/Images/gallery/gal24.jpg';
import gal11 from '../../assets/Images/gallery/gal11.jpg';
import gal21 from '../../assets/Images/gallery/gal21.jpg';
import gal1 from '../../assets/Images/gallery/gal1.jpg';
import gal2 from '../../assets/Images/gallery/gal2.jpg';
import gal17 from '../../assets/Images/gallery/gal17.jpg';
import gal19 from '../../assets/Images/gallery/gal19.jpg';


class Gallery extends Component{
    render(){
        return(
            <div>
                <div className='gallery-main-container'>
                    <div className='gallery-background-container'>
                        <div><Header/></div>
                        <div className='gallery-content-container'>
                            <h1 className='gallery-heading'>Gallery</h1>
                            <p className='gallery-content-para'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a docuent or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        </div>
                    </div>
                    <div className='our-gallery-main-container'>
                        <h1 className='our-gallery-heading'>Our Gallery</h1>
                        <p className='our-gallery-blue-line'></p>
                        <p className='our-gallery-content'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a docuent or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final </p>
                        <div className='our-gallery-images-main-container'>
                            <div className='our-gallery-image-container'>
                                <img src={gal1} alt='sports&personalitydevelopment' className='gallery-image'/>
                            </div>
                            <div className='our-gallery-image-container'>
                                <img src={gal11} alt='paragliding' className='gallery-image'/>
                            </div>
                            <div className='our-gallery-image-container'>
                                <img src={gal21} alt='karatte' className='gallery-image'/>
                            </div>
                            <div className='our-gallery-image-container'>
                                <img src={gallery18} alt='gymnastics' className='gallery-image'/>
                            </div>
                            <div className='our-gallery-image-container'>
                                <img src={gal2} alt='dance' className='gallery-image'/>
                            </div>
                            <div className='our-gallery-image-container'>
                                <img src={gal17} alt='blackbelt' className='gallery-image'/>
                            </div>
                            <div className='our-gallery-image-container'>
                                <img src={gal23} alt='karatte2' className='gallery-image'/>
                            </div>
                            <div className='our-gallery-image-container'>
                                <img src={gal24} alt='stunts' className='gallery-image'/>
                            </div>
                            <div className='our-gallery-image-container'>
                                <img src={gal19} alt='facilitation' className='gallery-image'/>
                            </div>
                        </div>

                        <div className='space'></div>
                        <div className='our-gallery-videos-main-container'>
                            <div className='video-container'>
                                <video className='video' controls>
                                    <source src="your_video_file.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className='small-videos-main-container'>
                                <video className='small-video' controls>
                                    <source src="your_video_file.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                <video className='small-video' controls>
                                    <source src="your_video_file.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                <video className='small-video' controls>
                                    <source src="your_video_file.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                    <div><Footer/></div>
                </div>
            </div>
        );
    }
}

export default Gallery;