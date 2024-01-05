import React, {Component} from 'react';

import './index.css';

import globe from '../../assets/Images/globe.svg';
import gaurantee from '../../assets/Images/gaurantee.svg';
import happy from '../../assets/Images/happy.svg';
import copy from '../../assets/Images/copy.svg';

class WhychooseUs extends Component{
    render(){
        return(
            <div>
                <div className='why-choose-us-main-container'>
                    <div className='why-choose-us-container'>
                        <h1 className='why-us-head'>Why Choose Us</h1>
                        <p className='blue-line-whyus'></p>
                        <p className='why-us-para'>Planning your vacations ? our international holidays division are there to customise
                                  your holidays to any country in this world, 
                        </p>

                        <div className='why-us-flex-container'>
                            <div className='why-us-each-container'>
                                <div className='why-us-image-container'>
                                    <img src={globe} alt=''/>
                                </div>
                                <div className='why-us-content-container'>
                                    <h1>Hassle Free Holiday Planning</h1>
                                    <p>We understand our customers and always deliver on our promises. And we don't stop
                                        at just offering customized packages.
                                    </p>
                                </div>
                            </div>


                            <div className='why-us-each-container'>
                                <div className='why-us-image-container'>
                                    <img src={gaurantee} alt=''/>
                                </div>
                                <div className='why-us-content-container'>
                                    <h1>Best Deals Guaranteed</h1>
                                    <p>We understand our customers and always deliver on our promises. And we don't stop
                                        at just offering customized packages.
                                    </p>
                                </div>
                            </div>


                            <div className='why-us-each-container'>
                                <div className='why-us-image-container'>
                                    <img src={happy} alt=''/>
                                </div>
                                <div className='why-us-content-container'>
                                    <h1>Customer Satisfaction</h1>
                                    <p>We understand our customers and always deliver on our promises. And we don't stop
                                        at just offering customized packages.
                                    </p>
                                </div>
                            </div>


                            <div className='why-us-each-container'>
                                <div className='why-us-image-container'>
                                    <img src={copy} alt=''/>
                                </div>
                                <div className='why-us-content-container'>
                                    <h1>No Hidden Cost</h1>
                                    <p>We understand our customers and always deliver on our promises. And we don't stop
                                        at just offering customized packages.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhychooseUs;