import React, {Component} from 'react';
 
import './index.css';


import inttourimage from '../../assets/Images/inttourimage.svg'
import intcountryimage1 from '../../assets/Images/intcountryimage1.svg';

class InternationalTours extends Component{
    render(){
        return(
            <div>
                <div className='international-tours-main-container'>
                    <div className='international-tours-background'>
                        <div className='image-int-tour-container'>
                            <img src={inttourimage} alt=''/>
                        </div>
                        <div className='international-desinations-container'>
                            <h1 className='int-head'>International Destinations</h1>
                            <p className='blue-line-2'></p>
                            <p className='int-para'>Planning your vacations ? our international holidays division are there to customise your holidays to any country in this world, </p>
                            <div className='international-destinations-countrys-container'>
                                <div className='countries-container'>
                                    <div className='countries-content-container'>
                                        <h1>Vietnam</h1>
                                        <p>Planning your vacations ? our international holidays division are there to customise your holidays </p>
                                    </div>
                                    <div className='countries-image'>
                                        <img src={intcountryimage1} alt=''/>
                                    </div>
                                    <p className='white-line'></p>
                                </div>


                                <div className='countries-container'>
                                    <div className='countries-content-container'>
                                        <h1>Bali</h1>
                                        <p>Planning your vacations ? our international holidays division are there to customise your holidays </p>
                                    </div>
                                    <div className='countries-image'>
                                        <img src={intcountryimage1} alt=''/>
                                    </div>
                                    <p className='white-line'></p>
                                </div>


                                <div className='countries-container'>
                                    <div className='countries-content-container'>
                                        <h1>Maldives</h1>
                                        <p>Planning your vacations ? our international holidays division are there to customise your holidays </p>
                                    </div>
                                    <div className='countries-image'>
                                        <img src={intcountryimage1} alt=''/>
                                    </div>
                                    <p className='white-line'></p>
                                </div>


                                <div className='countries-container'>
                                    <div className='countries-content-container'>
                                        <h1>Bangkok</h1>
                                        <p>Planning your vacations ? our international holidays division are there to customise your holidays </p>
                                    </div>
                                    <div className='countries-image'>
                                        <img src={intcountryimage1} alt=''/>
                                    </div>
                                    <p className='white-line'></p>
                                </div>


                                <div className='countries-container'>
                                    <div className='countries-content-container'>
                                        <h1>Nepal</h1>
                                        <p>Planning your vacations ? our international holidays division are there to customise your holidays </p>
                                    </div>
                                    <div className='countries-image'>
                                        <img src={intcountryimage1} alt=''/>
                                    </div>
                                    <p className='white-line'></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InternationalTours;