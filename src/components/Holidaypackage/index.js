import React from 'react';

import './index.css';
import Header from '../Header';
import Footer from '../Footer';

const Holidaypackage=()=>{
    return(
        <div>
            <div className='holiday-package-main-container'>
                <div><Header/></div>
                <div className='holiday-package-background'>
                    <div className='holiday-package-content-container'>
                        <h1 className='holiday-head'>HONEYMOON</h1>
                        <p className='holiday-para'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    </div>
                </div>
                <div className='holiday-content-main-container'>
                    <h1 className='holiday-content-heading'>Discover Best Honeymoon Tours</h1>
                    <p className='holiday-blue-line'></p>
                    <div className='holiday-content-main-container'>
                        <h1 className='holiday-content-sub-head'>Himachal Honeymoon Tours</h1>
                        <p className='holiday-content-sub-para'>Manali honeymoon tour packages: Manali is the favorite tourist place for honeymoon lovers which has lush green forests, apple orchards clean air beautiful huts etc. Manali honeymoon packages are available from specific cities also. You can book customized Manali honeymoon package from any city of India.
                            Shimla honeymoon tour packages: Choose your honeymoon package tour to Shimla from the wide range with exciting offers from Travel Gypsy. Our specially curated Shimla honeymoon tours are not just tours but these are dream tours, wide range of tours are provided so you can chose as per the time available 
                            with you. Our tours starts from 2 nights till 6 nights with different kind of attractions and excursions included in these honeymoon tours. Shimla honeymoon trip can be clubbed with Manali honeymoon trip if you wish to visit both cites during your honeymoon tour. Our trip experts will customize your 
                            honeymoon tour package according to your need or wish.
                        </p>
                    </div>
                </div>
                <div><Footer/></div>
            </div>
        </div>
    );
}
export default Holidaypackage;