import './PopularProducts.css'
import { getProducts } from '../../../utils/api';
import { useEffect, useState } from 'react';
import ProductBox from '../ProductBox/ProductBox';

function PopularProducts(){

    const url = import.meta.env.VITE_REACT_APP_STORE_API_URL;
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            try{
                const productsData = await getProducts(url);
                setProducts(productsData);
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchProducts()
    }, [])

    return(
        <div className='popular_products'>
            <div className='container'>
                <div className='products_list'>
                    {
                        products.filter((product)=>product.rating.rate > 4).slice(0,4).map((item, index)=>{
                            return(
                                <ProductBox product={item} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularProducts;