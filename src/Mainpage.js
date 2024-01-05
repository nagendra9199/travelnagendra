import {React, useState} from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Header from './components/Header';
import Slider from './components/Slider';
import Featuredtours from './components/Featuredtours';
import InternationalTours from './components/InternationalTours';
import WhychooseUs from './components/WhychooseUs';
import Footer from './components/Footer';

import Popup from './components/Popup';




const Mainpage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return (
      <>
       {showPopup && <Popup onClose={handleClosePopup} />}
        <Header />
        <Slider />
        <Featuredtours />
        <InternationalTours />
        <WhychooseUs />
        <Footer />
      </>
    );
  };
  
  export default Mainpage;