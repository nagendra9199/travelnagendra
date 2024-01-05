import React from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';


import kashmir from '../../assets/Images/kashmir.jpg';
import himachalbackground from '../../assets/Images/himachalbackground.svg'
import himachalimage1 from '../../assets/Images/himachalimage1.svg';
import himachalimage2 from '../../assets/Images/himachalimage2.svg';
import himachalimage3 from '../../assets/Images/himachalimage3.svg';
import himachalimage4 from '../../assets/Images/himachalimage4.svg';

const Featuredtours=()=>{

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/Tourpage');
    };
    
    return(
        <div>
            <div className='featured-tours-main-container'>
                <div className='featured-tours-content'>
                    <h1>Featured Tours</h1>
                    <p className='blue-line'></p>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder 
                        text commonly used to demonstrate the visual form of a 
                    </p>
                </div>
                <div className='tour-cards-container'>
                    <div className='tour-card' onClick={handleCardClick}>
                        <img src={kashmir} className='tour-card-image' alt=''/>
                        <div className='content-tour-card-container'>
                            <p className='content-tour-card'>Delhi, Shimla, Manali</p>
                        </div>
                        <div className='days-container'>
                            <p><i class="fa-solid fa-timer"></i><FontAwesomeIcon icon={faStopwatch}/> 4 Nights - 5 Days</p>
                        </div>
                        <div className='background'></div>
                    </div>

                    <div className='tour-card'>
                        <img src={himachalimage1} className='tour-card-image' alt=''/>
                        <div className='content-tour-card-container'>
                            <p className='content-tour-card'>kashmir</p>
                        </div>
                        <div className='days-container'>
                            <p><i class="fa-solid fa-timer"></i><FontAwesomeIcon icon={faStopwatch}/> 4 Nights - 5 Days</p>
                        </div>
                        <div className='background'></div>
                    </div>

                    <div className='tour-card'>
                        <img src={himachalimage2} className='tour-card-image' alt=''/>
                        <div className='content-tour-card-container'>
                            <p className='content-tour-card'>Chardham</p>
                        </div>
                        <div className='days-container'>
                            <p><i class="fa-solid fa-timer"></i><FontAwesomeIcon icon={faStopwatch}/> 4 Nights - 5 Days</p>
                        </div>
                        <div className='background'></div>
                    </div>

                    <div className='tour-card'>
                        <img src={kashmir} className='tour-card-image' alt=''/>
                        <div className='content-tour-card-container'>
                            <p className='content-tour-card'>Ladakh</p>
                        </div>
                        <div className='days-container'>
                            <p><i class="fa-solid fa-timer"></i><FontAwesomeIcon icon={faStopwatch}/> 4 Nights - 5 Days</p>
                        </div>
                        <div className='background'></div>
                    </div>

                    <div className='tour-card'>
                        <img src={kashmir} className='tour-card-image' alt=''/>
                        <div className='content-tour-card-container'>
                            <p className='content-tour-card'>Rajasthan</p>
                        </div>
                        <div className='days-container'>
                            <p><i class="fa-solid fa-timer"></i><FontAwesomeIcon icon={faStopwatch}/> 4 Nights - 5 Days</p>
                        </div>
                        <div className='background'></div>
                    </div>

                    <div className='tour-card'>
                        <img src={kashmir} className='tour-card-image' alt=''/>
                        <div className='content-tour-card-container'>
                            <p className='content-tour-card'>Atal Tunnel Tour with Manali Lahaul</p>
                        </div>
                        <div className='days-container'>
                            <p><i class="fa-solid fa-timer"></i><FontAwesomeIcon icon={faStopwatch}/> 4 Nights - 5 Days</p>
                        </div>
                        <div className='background'></div>
                    </div>
                </div>
            </div>


            <div className='himachal-pradesh-main-container'>
                <div className='himachal-pradesh-container'>
                    <img src={himachalbackground} alt='' className='himachal-background'/>
                    <div className='content-about-himachal-background'>
                        <h1>Discover Best of Our Tours</h1>
                        <p className='blue-line-himachal'></p>
                        <p className='content-paragraph'>“Land of God and Goddess” Himachal Pradesh is located in Northern part of India – A beautiful state full of natural resources and amazing customs, fairs and festivals. People of Himachal Pradesh are jolly in nature and always believes in Athithi Devo
                            Bhawa concept, We at Sojourntails committed to provide you the best experience for your holidays.
                        </p>
                    </div>
                    <div className='himachal-cards-container'>
                        <div className='himachal-card'>
                            <img src={himachalimage1} alt=''/>
                            <h1>Kerala</h1>
                            <p className='himachal-card-para'><FontAwesomeIcon icon={faStopwatch}/> 4 Nights - 5 Days</p>
                        </div>
                        <div className='himachal-card'>
                            <img src={himachalimage2} alt=''/>
                            <h1>Himachal</h1>
                            <p className='himachal-card-para'><FontAwesomeIcon icon={faStopwatch}/> 4 Nights - 5 Days</p>
                            <p className='himachal-card-hover-content'>Kulumanali</p>
                        </div>
                        <div className='himachal-card'>
                            <img src={himachalimage3} alt=''/>
                            <h1>Goa</h1>
                            <p className='himachal-card-para'><FontAwesomeIcon icon={faStopwatch}/> 4 Nights - 5 Days</p>
                        </div>
                        <div className='himachal-card'>
                            <img src={himachalimage4} alt=''/>
                            <h1>Ooty</h1>
                            <p className='himachal-card-para'><FontAwesomeIcon icon={faStopwatch}/> 4 Nights - 5 Days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Featuredtours;