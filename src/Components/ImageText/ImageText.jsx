import { NavLink } from "react-router-dom";
import './ImageText.css'

function ImageText({imageUrl, title, description, buttonText, buttonLink}){
    return(
        <div className="sec_padding image_text_sec">
            <div className="container">
                <div className="image_text_content">
                    <div className="image_col">
                        {imageUrl && <img src={imageUrl} alt="image"></img>}
                    </div>
                    <div className="text_col">
                        {title && <h2 className="sec_title">{title}</h2>}
                        {description && <p className="description">{description}</p>}
                        {
                            buttonText && <div className="global_btn">
                                <NavLink to={buttonLink}>{buttonText}</NavLink>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageText;