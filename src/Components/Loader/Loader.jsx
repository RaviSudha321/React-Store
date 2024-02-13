import './Loader.css'

function Loading(){
    return(
        <div className="sec_padding loading_sec">
            <div className="container">
                <div className="loader">
                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        </div>
    )
}

export default Loading;