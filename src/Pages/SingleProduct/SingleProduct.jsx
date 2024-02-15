import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from '../../Components/Loader/Loader'
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts";
import {getProducts} from '../../../utils/api'
import './SingleProduct.css'

function SingleProduct(){

    const { id } = useParams();
    const[product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = import.meta.env.VITE_REACT_APP_STORE_API_URL;
    useEffect(()=>{

        const fetchProduct = async() => {
            const productData = await getProducts(`${url}/${id}`);
            setProduct(productData);
            setLoading(false);
        }

        fetchProduct();

    }, []);

    const {id: productId, title, price, description, category, image, rating} = product;
    // const {rate, count: ratingCount} = rating;

    if(loading){
        return <Loader />
    }

    return(
        <>
            <div className="sec_padding product_details_sec">
                <div className="container">
                    <div className="product_content">
                        <div className="product_thumbnail">
                            {
                                image ? <img src={image} alt={title} /> : <img src='https://placehold.co/600x400' alt={title} />
                            }
                        </div>
                        <div className="product_summary">
                            {title && <h1 className="sec_title sp_title">{title}</h1>}
                            {
                                rating && 
                                <div className="product_rating">
                                    Rating:
                                    <span className="rate">{rating.rate}</span>
                                    <span className="rating_count">({rating.count} Total)</span>
                                </div>        
                            }
                            {price && <h2 className="product_price">{`$${price}`}</h2>}
                            {description && <p className="product_desc">{description}</p>}
                            {category && <div className="product_meta"><strong>Categories:</strong> {category}</div>}
                            <div className="global_btn">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts category={category} />
        </>
    )
}

export default SingleProduct;