import { NavLink } from 'react-router-dom';
import PageBanner from '../../Components/PageBanner/PageBanner'
import './NotFound.css'

function NotFound(){
    return(
        <>
            <PageBanner title="Not Found" />
            <div className="sec_padding">
                <div className="container">
                    <div className='not_found_content'>
                        <h2 className='not_found_title'>404</h2>
                        <h3 className='not_found_sub_title'>Page Not Found!</h3>
                        <p className='not_found_desc'>The page you are looking for doesn't exist. If you think something broken, report a problem</p>
                        <div className='not_found_btns'>
                            <div className='global_btn'>
                                <NavLink to="/">Back to Home</NavLink>
                            </div>
                            <div className='global_btn'>
                                <NavLink to="/contact">Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound;