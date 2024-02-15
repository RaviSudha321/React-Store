import NewsletterForm from "../NewsletterForm/NewsletterForm";
import './Newsletter.css'

function Newsletter(){
    return(
        <div className="newsletter_sec">
            <div className="container">
                <div className="newsletter_content">
                    <h3 className="newsletter_title">Subscribe Our Newsletter</h3>
                    <p className="newsletter_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <NewsletterForm />
                </div>
            </div>
        </div>
    )
}

export default Newsletter;