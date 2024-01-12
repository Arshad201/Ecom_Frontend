import { useState } from "react"
import image1 from "../../assets/images/maroon_shirt_1.jpg"
import image2 from "../../assets/images/maroon_shirt_2.jpg"
import image3 from "../../assets/images/maroon_shirt_3.jpg"
import image4 from "../../assets/images/maroon_shirt_4.jpg"
import image5 from "../../assets/images/maroon_shirt_5.jpg"

const ImageSliderInCard = () => {

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ]

  const [image, setImage] = useState(images[0]);
  const [count, setCount] = useState(1);

  const slideShowImage = () =>{

    setCount(prev=>prev+1);

    setTimeout(() => {

      if(image === images.length-1){
        setCount(1)
        setImage(image1)
      }else{
        setImage(images[images.length-(images.length-count)])
      }
      
    }, 1000);

  }

  const MouseLeave = () =>{
    setImage(image1)
  }

  return (
    <div>
      <img src={image} alt="" onMouseEnter={slideShowImage} onMouseLeave={MouseLeave}/>
    </div>
  )
}

export default ImageSliderInCard
