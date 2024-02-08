import { NavLink } from "react-router-dom";
import Menus from "../../../public/data/HeaderMenu";
import './Header.css';

function Header(){
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
                                            <li key={index} className="nav_item">
                                                <NavLink to={menu.link} className={({isActive})=>isActive ? "active_nav_link" : "nav_link"} >{menu.title}</NavLink>
                                            </li>
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