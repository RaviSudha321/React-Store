import { useEffect, useState } from "react";
import { getProducts } from "../../../utils/api";
import ProductBox from '../../Components/ProductBox/ProductBox'
import './RelatedProducts.css'

function RelatedProducts({category}){

    const [products, setProducts] = useState([]);
    const url = import.meta.env.VITE_REACT_APP_STORE_API_URL;

    useEffect(()=>{
        const fetchProducts = async() => {
            const productsData = await getProducts(`${url}/category/${category}`);
            setProducts(productsData);
        }
        fetchProducts();
    }, []);

    if(products){
        return(
            <div className="sec_padding related_products_sec">
                <div className="container">
                    <h2 className="sec_title">Related Products</h2>
                    <div className="products_list">
                        {
                            products.map((product, index)=>{
                                return(
                                    <ProductBox product={product} key={index} />
                                )   
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default RelatedProducts;