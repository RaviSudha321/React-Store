import { NavLink } from "react-router-dom";
import Copyright from "../Copyright/Copyright";
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


function Footer(){
    return(
        <>
            <footer id="footer_main">
                <div className="container">
                    <div className="footer_content">
                        <div className="footer_logo_col">
                            <div className="footer_logo">
                                <img src="/images/logo.webp" alt="logo" />
                            </div>
                            <p className="footer_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="footer_menu_col">
                            <h3 className="footer_col_title">Quick Links</h3>
                            <div className="footer_menu">
                                <ul>
                                    <li>
                                        <NavLink to="/about">About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog">Blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/shop">Shop</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer_contact_col">
                            <h3 className="footer_col_title">Contact Us</h3>
                            <div className="footer_icon_box">
                                <a href="maito:example@gmail.com">
                                    <span className="icon"><FaEnvelope /></span>
                                    example@gmail.com
                                </a>
                            </div>
                            <div className="footer_icon_box">
                                <a href="tel:9876543210">
                                    <span className="icon"><FaPhoneAlt /></span>
                                    987-654-3210
                                </a>
                            </div>
                            <div className="footer_icon_box">
                                <a href="#" target="_blank">
                                    <span className="icon"><FaMapMarkerAlt /></span>
                                    Phase 8B Sector 74,<br/>Industrial Area, Mohali<br/>PB 160055
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <Copyright />
        </>
    )
}

export default Footer;