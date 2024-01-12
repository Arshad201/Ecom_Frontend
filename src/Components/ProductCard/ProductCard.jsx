import "./ProductCard.css";

import ImageSliderInCard from '../ImageSliderInCard/ImageSliderInCard.jsx';

const ProductCard = ({product}) => {

  return (
    <div className="productCard">
      <div className="img_wrapper">
        <ImageSliderInCard/>
      </div>
      <div className="wrapper">
        <div className="moving-container">
          <div className="moving">SELLING FAST </div>
          <div className="moving">SELLING FAST </div>
        </div>
        <h6 className="title">{product.title}</h6>
        <div className="price-box">
          <span>{product.price}</span>
          <span>{product.salePrice}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
