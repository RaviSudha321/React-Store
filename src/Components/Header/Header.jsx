import { Link } from "react-router-dom";
import Menus from "../../../public/data/HeaderMenu";

function Header(){
    return(
        <header>
            <div className="container">
                <div>
                    <img src="/images/logo.webp" alt="logo" />
                </div>
                <div>
                    <nav>
                        <ul>
                            {
                                Menus.map((menu, index)=>{
                                    return(
                                        <li key={index}>
                                            <Link to={menu.link}>{menu.title}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
                <div>
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;