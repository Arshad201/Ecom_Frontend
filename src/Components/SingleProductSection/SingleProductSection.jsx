import "./SingleProductSection.css";

import image1 from "../../assets/images/maroon_shirt_1.jpg"
import image2 from "../../assets/images/maroon_shirt_2.jpg"
import image3 from "../../assets/images/maroon_shirt_3.jpg"
import image4 from "../../assets/images/maroon_shirt_4.jpg"
import image5 from "../../assets/images/maroon_shirt_5.jpg"
import { useState } from "react";

const SingleProductSection = () => {

    const [activeSize, setActiveSize] = useState('S');

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
    ]

  return (
    <div className="singleProductSection">
        <div className="wrapper">
            <div className="img-part">
                <div className="small-imgs-container">
                    {images.map((img, index)=><div key={index} className="img-wrapper">
                        <img src={img} alt="" />
                    </div>)}
                </div>
                <div className="big-imgs-container">
                     {images.map((img, index)=><div key={index} className="img-wrapper">
                        <img src={img} alt="" />
                    </div>)}
                </div>
            </div>
            <div className="content-part">
                <div className="content-wrapper">
                <h3>Long Fit T-Shirts Combo</h3>
                <div className="prices">
                    <span className="price"> Rs. 1,499.00</span>
                    <span className="sale-price">Rs. 1,099.00</span>
                </div>
                <div className="txt">
                    <a href="/">Shipping</a>
                    calculated at checkout. 
                </div>
                <div className="size-container">
                    <span>Size</span>
                    <div className="sizes">
                        <div className={`size ${activeSize === 'S' && 'active-size'}`} onClick={()=>setActiveSize('S')}>S</div>
                        <div className={`size ${activeSize === 'M' && 'active-size'}`} onClick={()=>setActiveSize('M')}>M</div>
                        <div className={`size ${activeSize === 'L' && 'active-size'}`} onClick={()=>setActiveSize('L')}>L</div>
                        <div className={`size ${activeSize === 'XL' && 'active-size'}`} onClick={()=>setActiveSize('XL')}>XL</div>
                        <div className={`size ${activeSize === 'XXL' && 'active-size'}`} onClick={()=>setActiveSize('XXL')}>XXL</div>
                    </div>
                </div>
                <div className="stock">
                    <span className="green-dot"></span>
                    <span> In stock, ready to ship </span>
                </div>
                <button className="btn">ADD TO CART</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SingleProductSection
