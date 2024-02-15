import { useParams } from 'react-router-dom';
import PageBanner from '../../Components/PageBanner/PageBanner'
import { useEffect, useState } from 'react';
import { getProducts } from '../../../utils/api';
import ProductBox from '../../Components/ProductBox/ProductBox';
import NotFoundText from '../../Components/NotFoundText/NotFoundText';
import Loader from '../../Components/Loader/Loader'

function ProductCategoryArchive(){

    const {slug} = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const productsPerPage = 4;
    const [showProducts, setShowProducts] = useState(4);
    const url = import.meta.env.VITE_REACT_APP_STORE_API_URL;

    useEffect(()=>{
        const fetchProducts = async() => {
            const productsData = await getProducts(`${url}/category/${slug}`);
            setProducts(productsData);
            setIsLoading(false);
        }
        fetchProducts();

        return () => {
            setShowProducts(4);
        }

    }, [slug]);

    if(isLoading){
        return <Loader />
    }

    return(
        <>
            <PageBanner title={`Category: ${slug}`} />
            <div className='sec_padding archive_sec'>
                <div className='container'>
                    {
                        products.length > 0 ? 
                        <>
                            <div className='products_list'>
                            {
                                products.slice(0, showProducts).map((product, index)=>{
                                    return(
                                        <ProductBox product={product} key={index} />
                                    )
                                })
                            }
                            </div> 
                            {
                                showProducts < products.length && <div className='global_btn' style={{textAlign: 'center', marginTop: '50px'}}>
                                    <a href="#" onClick={(e)=>{e.preventDefault(); setShowProducts(showProducts + productsPerPage)}}>Load More</a>
                                </div>
                            }
                        </> : 
                        <NotFoundText text="No Products Found!" />
                    }
                </div>
            </div>
        </>
    )
}

export default ProductCategoryArchive;