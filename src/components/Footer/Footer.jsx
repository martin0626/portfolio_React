import { Link } from "react-router-dom";

export default function FooterEl(){
    return (
        <section className="footer">
            <div className="footer-contact">
                <h1 className="secondaryHeader white-text">Send Me Message</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam fuga dolorum magnam?</p>
                <Link to='/contact' className="mainBtn">Contact Me</Link>
            </div>        
            <div className="footer-main">

            </div>
        </section>
    )
}