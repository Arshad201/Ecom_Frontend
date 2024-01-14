import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import image1 from "../../assets/images/maroon_shirt_1.jpg"
import image2 from "../../assets/images/maroon_shirt_2.jpg"
import image3 from "../../assets/images/maroon_shirt_3.jpg"
import image4 from "../../assets/images/maroon_shirt_4.jpg"
import image5 from "../../assets/images/maroon_shirt_5.jpg"

import ProgressBar from '../ProgressBar/ProgressBar.jsx'

const ImageSliderInCard = () => {

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ]
  const [duration, setDuration] = useState({animationDuration: '400ms'});

  const [progress, setProrgess] = useState(false);
  const swiperRef = useRef()

  const whenMouseEnter = () =>{

    swiperRef.current.autoplay.start();

    setDuration({
      animationDuration: `${images.length*760}ms`
    })
    
    setProrgess(true);

  }

  const whenMouseLeave = () =>{

    // swiperRef.current.slideTo(1)
    swiperRef.current.autoplay.stop();
    setProrgess(false);
    
  }

  useEffect(()=>{
    swiperRef.current.autoplay.stop();
  },[])


  return (
    <>
      <Swiper
        onSwiper={(swiper)=>{swiperRef.current=swiper}}
        autoplay={{delay: 500}}
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {images?.map((image, i)=><SwiperSlide key={i} 
        onMouseEnter={whenMouseEnter}
        onMouseLeave={whenMouseLeave}>
          <img src={image} />
        </SwiperSlide>)}

      </Swiper>
      <div className="progressBarContainer">
        <div className={`bar ${progress && 'activeBar'}`} style={duration}></div>
      </div>
    </>
  )
}

export default ImageSliderInCard
