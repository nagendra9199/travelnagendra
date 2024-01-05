import React, { useState } from 'react';

import './index.css';

const Popup = () => {
  const [isPopupVisible, setPopupVisibility] = useState(true);

  const handleCloseClick = () => {
    setPopupVisibility(false);
  };

  return (
    <>
      {isPopupVisible && (
        <div className="popup-container">
          <div className="popup-content">
            <form>
                <div className='popup-form-container'>
                    <input id='name' placeholder='Name *'/>
                    <input id='mobile'placeholder='Mobile Number *'/>
                    <input id='from' placeholder='From'/>
                    <input id='destination' placeholder='Destination'/>
                </div>
                <button className='popup-submit-button'>Submit</button>
            </form>
            <button onClick={handleCloseClick} className='popup-close-button'>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
