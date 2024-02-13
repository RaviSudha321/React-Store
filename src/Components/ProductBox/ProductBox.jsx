import './ProductBox.css'
import { NavLink } from 'react-router-dom';

function ProductBox({product}){
    return(
        <div className='product_box'>
            <div className='product_img'>
                <img src={product.image} alt={product.title} />
                <span className='product_cat'>{product.category}</span>
            </div>
            <div className='product_content'>
                <h3 className='product_title'>{product.title.length > 40 ? `${product.title.slice(0,40)}...` : product.title}</h3>
                <div className='product_price'>
                    ${product.price}
                </div>
                <p className='product_desc'>{product.description.slice(0, 100)}...</p>
                <div className='product_action'>
                    <NavLink to={`/product/${product.id}`}>Buy Now</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ProductBox;