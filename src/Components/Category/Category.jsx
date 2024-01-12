import './Category.css';
import shirtImg from "../../assets/images/shirt-cat.png"
import UnisexshirtImg from "../../assets/images/unisex_shirt.png"
import pantImg from "../../assets/images/pant.png"
import kurtaImg from "../../assets/images/kurta.png"

const Category = () => {
  return (
    <section className='category'>
      <div className='wrapper'>
        <h2>Pongal Sale Is Live Now!!</h2>
        <button className="btn">VIEW COLLECTION!</button>
      </div>
       <div className="category-circle-container">
            <div className="catgory-circle-box">
                <div className="category-circle">
                    <img src={shirtImg} alt="" />
                </div>
                <h5 className="category-text">Shirts</h5>
            </div>
            <div className="catgory-circle-box">
                <div className="category-circle">
                    <img src={UnisexshirtImg} alt="" />
                </div>
                <h5 className="category-text">Unisex T-Shirts</h5>
            </div>
            <div className="catgory-circle-box">
                <div className="category-circle">
                    <img src={pantImg} alt="" />
                </div>
                <h5 className="category-text">Pants</h5>
            </div>
            <div className="catgory-circle-box">
                <div className="category-circle">
                    <img src={kurtaImg} alt="" />
                </div>
                <h5 className="category-text">Short Kurtas</h5>
            </div>
       </div> 
       <div className="moving-container">
            <div className="moving">Buy 1 Get 10% Off 📢 Buy 2 Get 15% Off 📢 Buy 3 Get 20% Off 📢</div>
            <div className="moving">Buy 1 Get 10% Off 📢 Buy 2 Get 15% Off 📢 Buy 3 Get 20% Off 📢</div>
            <div className="moving">Buy 1 Get 10% Off 📢 Buy 2 Get 15% Off 📢 Buy 3 Get 20% Off 📢</div>
            <div className="moving">Buy 1 Get 10% Off 📢 Buy 2 Get 15% Off 📢 Buy 3 Get 20% Off 📢</div>
       </div>
    </section>
  )
}

export default Category
