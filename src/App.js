import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


import ExplorePage from './components/ExplorePage';
import Advanture from './components/Advanture';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Gallery from './components/Gallery';
import Awards from './components/Awards';
import MainPage from './Mainpage';
import Tourpage from './components/Tourpage';
import Tourdetails from './components/Tourdetails';


import './App.css';

function App(){
  return(
    <Router>
      <Routes>

        <Route
          path='/' element={<MainPage/>}/>
        <Route path='explore/:place' element={<ExplorePage/>}/>
        <Route path='Advanture/' element={<Advanture/>} />
        <Route path='Aboutus/' element={<Aboutus/>}/>
        <Route path='Contactus/' element={<Contactus/>}/>
        <Route path='Gallery/' element={<Gallery/>}/>
        <Route path='Awards/' element={<Awards/>}/>
        <Route path='Tourpage/' element={<Tourpage/>}/>
        <Route path='Tourdetails/' element={<Tourdetails/>}/>
      </Routes>
    </Router>
  )
}

export default App;