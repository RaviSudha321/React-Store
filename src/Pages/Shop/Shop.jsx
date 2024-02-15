import { useState } from 'react';
import PageBanner from '../../Components/PageBanner/PageBanner'
import { useEffect } from 'react';
import {getProducts} from '../../../utils/api';
import ProductBox from '../../Components/ProductBox/ProductBox'
import Loader from '../../Components/Loader/Loader';
import './Shop.css'

function Shop(){

    const url = import.meta.env.VITE_REACT_APP_STORE_API_URL;
    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState(4);
    const [loading, setLoading] = useState(true);
    const [productsOrder, setProductsOrder] = useState('');

    useEffect(()=>{
        const fetchProducts = async () => {
            const productsData = await getProducts(`${url}?sort=${productsOrder}`);
            setProducts(productsData);
            setLoading(false);
        }

        fetchProducts();
    },[productsOrder])

    if(loading) {
        return <Loader />
    }

    return(
        <>
            <PageBanner title="Shop" />
            <div className='sec_padding shop_products_sec'>
                <div className='container'>
                    <div className='products_topbar'>
                        <div className='product_count'>Total: {products.length} Products</div>
                        <div className='product_filter'>
                            <select onChange={(e)=>setProductsOrder(e.target.value)}>
                                <option value="">ASC</option>
                                <option value="desc">DESC</option>
                            </select>
                        </div>
                    </div>
                    <div className='products_list'>
                        {
                            products.slice(0, showProducts).map((product, index) => {
                                return(
                                    <ProductBox product={product} key={index} />
                                )
                            })
                        }
                    </div>
                    {
                        showProducts < products.length && 
                        <div className='global_btn' style={{textAlign:'center', marginTop:'60px'}}>
                            <a href='#' onClick={(e)=>{e.preventDefault(); setShowProducts(showProducts + 4)}}>Load More</a>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Shop;