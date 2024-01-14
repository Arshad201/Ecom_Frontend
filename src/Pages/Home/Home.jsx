import bannerImg from '../../assets/images/banner.png'
import "./Home.css"
import Category from '../../Components/Category/Category.jsx';
import ProductsOnNewYear from '../../Components/ProductsOnNewYear/ProductsOnNewYear.jsx'
import HomeCTA from '../../Components/HomeCTA/HomeCTA.jsx'
import WhyTones from '../../Components/WhyTones/WhyTones.jsx'
import ImageCompareSlider from '../../Components/ImageCompareSlider/ImageCompareSlider.jsx'
import SingleProductSection from '../../Components/SingleProductSection/SingleProductSection.jsx'


const Home = () => {
  return (
    <>
    <div className='banner'>
        <img className='bannerImg' src={bannerImg} alt="" />
    </div>
    <Category/>
    <ProductsOnNewYear/>
    <SingleProductSection/>
    <ImageCompareSlider/>
    <HomeCTA/>
    <WhyTones/>
    </>
  )
}

export default Home
