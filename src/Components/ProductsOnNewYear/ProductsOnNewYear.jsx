import "./ProductsOnNewYear.css";
import ProductCard from '../ProductCard/ProductCard.jsx'
const ProductsOnNewYear = () => {

    const products = [
        {
            title: 'Festive patterns - Maroon ',
            price: 'Rs. 1,499.00',
            salePrice: 'Rs. 999.00',
            images: [
                "../../assets/images/maroon_shirt_1.jpg"
            ]
        },
        {
            title: 'Festive patterns - Maroon ',
            price: 'Rs. 1,499.00',
            salePrice: 'Rs. 999.00',
            images: [
                "../../assets/images/maroon_shirt_1.jpg"
            ]
        },
        {
            title: 'Festive patterns - Maroon ',
            price: 'Rs. 1,499.00',
            salePrice: 'Rs. 999.00',
            images: [
                "../../assets/images/maroon_shirt_1.jpg"
            ]
        }
    ]
  return (
    <div className="products_newyear">
        <h2>New Year! New Wear!!!</h2>
        <div className="grid">
            {products?.map((product, i)=><ProductCard key={i} product={product} />)}
        </div>
    </div>
  )
}

export default ProductsOnNewYear
