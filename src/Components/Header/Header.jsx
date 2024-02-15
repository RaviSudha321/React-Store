import { NavLink } from "react-router-dom";
import Menus from "../../../public/data/HeaderMenu";
import './Header.css';
import { useEffect, useState } from "react";
import {getProducts} from '../../../utils/api'

function Header(){

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
                        <img src="/images/logo.webp" alt="logo" className="header_logo" />
                    </div>
                    <div className="header_menu_col">
                        <nav className="header_nav">
                            <ul className="header_nav_list">
                                {
                                    Menus.map((menu, index)=>{
                                        return(
                                            <>
                                            {
                                                menu.title == 'Shop' ?
                                                <li key={index} className="nav_item" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
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

                                                <li key={index} className="nav_item">
                                                    <NavLink to={menu.link} className={({isActive})=>isActive ? "active_nav_link" : "nav_link"} >{menu.title}</NavLink>
                                                </li>
                                            }
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="header_buttons_col">
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