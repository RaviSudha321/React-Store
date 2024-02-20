import { NavLink } from "react-router-dom";
import Menus from "../../../public/data/HeaderMenu";
import './Header.css';
import { useEffect, useState } from "react";
import {getProducts} from '../../../utils/api'
import { FaShoppingCart } from "react-icons/fa";
import { Fragment } from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cart";

function Header(){

    const {cartItems} = useContext(cartContext);
    const [isActiveDropdown, setIsActiveDropdown] = useState(false);
    const [categories, setCategories] = useState([]);
    const url = import.meta.env.VITE_REACT_APP_STORE_API_URL;

    useEffect(()=>{
        const fetchCats = async() => {
            const cats = await getProducts(`${url}/categories`);
            setCategories(cats);
        }
        fetchCats();
    },[]);

    const handleDropdown = () => {
        setIsActiveDropdown(!isActiveDropdown);
    }

    return(
        <header id="header_main">
            <div className="container">
                <div className="header_content">
                    <div className="header_logo_col">
                        <NavLink to="/"><img src="/images/logo.webp" alt="logo" className="header_logo" /></NavLink>
                    </div>
                    <div className="header_menu_col">
                        <nav className="header_nav">
                            <ul className="header_nav_list">
                                {
                                    Menus.map((menu, index)=>{
                                        return(
                                            <Fragment key={index} >
                                            {
                                                menu.title == 'Shop' ?
                                                <li className="nav_item" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
                                                    <NavLink to={menu.link} className={({isActive})=>isActive ? "active_nav_link" : "nav_link"} >{menu.title}</NavLink>
                                                    {
                                                        categories && menu.title == 'Shop' ? <ul className={isActiveDropdown ? 'sub_menu active' : 'sub_menu'}>
                                                            {
                                                                categories.map((category, i) => {
                                                                    return(
                                                                        <li key={i}>
                                                                            <NavLink to={`/product-category/${category}`} className={({isActive})=>isActive ? "active_nav_link" : "nav_link"} >{category}</NavLink>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul> : null
                                                    }
                                                </li> : 

                                                <li className="nav_item">
                                                    <NavLink to={menu.link} className={({isActive})=>isActive ? "active_nav_link" : "nav_link"} >{menu.title}</NavLink>
                                                </li>
                                            }
                                            </Fragment >
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="header_buttons_col">
                        <div className="header_icons">
                            <span className="cart_icon"><NavLink to="/cart"><span className="cart_count">{cartItems.length}</span><FaShoppingCart /></NavLink></span>
                        </div>
                        <div className="header_btns">
                            <NavLink to="/login" className="login_btn">Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;