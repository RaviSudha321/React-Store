import './PageBanner.css'

function PageBanner({title, description}){
    return(
        <div className="banner_sec">
            <div className="container">
                <div className="banner_content">
                    {title && <h1 className="sec_title banner_title">{title}</h1>}
                    {description && <p className="description banner_desc">{description}</p>}
                </div>
            </div>
        </div>
    )
}

export default PageBanner;