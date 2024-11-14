import { Link } from "react-router-dom";
import { FaLinkedinIn, FaEnvelope, FaLocationArrow  } from "react-icons/fa";


export default function FooterEl(){


    const onVistHandler = (link)=>{
        window.open(link);
    }


    return (
        <section className="footer">
            <div className="footer-contact">
                <h1 className="secondaryHeader white-text">Check My Resume</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam fuga dolorum magnam?</p>
                <Link to='/portfolio' className="mainBtn">My Resume</Link>
            </div>        
            <div className="footer-main">
                
                <div className="footer-main-icons">
                    <p 
                        onClick={()=>onVistHandler('https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D1%82%D0%B8%D0%BD-%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2-851b79254/')} 
                        className="footer-main-icon"
                    >
                        <FaLinkedinIn/>
                    </p>
                    <p 
                        className="footer-main-icon"
                        onClick={()=>onVistHandler('mailto:ivanov_martin2000@abv.bg')}
                    >
                        <FaEnvelope/>
                    </p>
                    <Link 
                        className="footer-main-icon"
                        to='/contact'
                    >
                        <FaLocationArrow />
                    </Link>
                </div>
            </div>
        </section>
    )
}