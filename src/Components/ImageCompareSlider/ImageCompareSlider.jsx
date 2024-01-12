import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import "./ImageCompareSlider.css";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

const ImageCompareSlider = () => {

  const dragger = <div className='dragger'>
    <div className="icon-wrapper">
      <IoIosArrowBack className="icon"/>
      <IoIosArrowForward className="icon"/>
    </div>
    </div>;

  return (
    <div className='img-compare'>
      <h2>Limitless Expressions!</h2>
      <ReactCompareSlider boundsPadding={100}
      handle={dragger}
      itemOne={<ReactCompareSliderImage src={img1}  alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={img2}  alt="Image two" />}
      style={{
        width: '100%',
        height: '140vh'
      }}/>
    </div>
  )
}

export default ImageCompareSlider
