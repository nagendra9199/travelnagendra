import React from 'react';
import Slider from 'react-slick';
import { Link} from 'react-router-dom';


import kashmir from '../../assets/Images/kashmir.jpg';
import ladakh from '../../assets/Images/ladakh.jpg';
import viatnam1 from '../../assets/Images/viatnam1.jpg';
import viatnam2 from '../../assets/Images/viatnam2.jpg';
import utk from '../../assets/Images/utk.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

const images = [utk, kashmir, ladakh, viatnam1, viatnam2];

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
  };

  const sliderContent = [
    { id: 1, title: 'Duti Trips', caption: 'WE DESIGN YOUR MEMORIES.', slidebottom: 'WE DESIGN YOUR MEMORIES.' },
    { id: 2, title: 'Duti Trips', caption: 'WE DESIGN YOUR MEMORIES.', slidebottom: 'WE DESIGN YOUR MEMORIES.' },
    { id: 3, title: 'Duti Trips', caption: 'WE DESIGN YOUR MEMORIES.', slidebottom: 'WE DESIGN YOUR MEMORIES.' },
    { id: 4, title: 'Duti Trips', caption: 'WE DESIGN YOUR MEMORIES.', slidebottom: 'WE DESIGN YOUR MEMORIES.' },
    { id: 5, title: 'Duti Trips', caption: 'WE DESIGN YOUR MEMORIES.', slidebottom: 'WE DESIGN YOUR MEMORIES.' },
  ];

 

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className='image-slide-container'>
          <img src={image} alt={`Slide ${index + 1}`} className='image-slide' loading='lazy'/>
          <div className='content-button-container'>
            <div className='slide-content'>
              <h2 className='slide-title'>{sliderContent[index].title}</h2>
              <p>{sliderContent[index].caption}</p>
            </div>
            <h1 className='slide-bottom'>{sliderContent[index].slidebottom}</h1>
            <Link to={`/explore/${sliderContent[index].id}`} className='explore-button'>Go Explore</Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
