import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ConactSection(){
    return (
        <div className="contact">
            <div className="contact-info white-text">
                <h1 className="mainHeader">My Contacts:</h1>
                <ContactInfo/>
            </div>
            <ContactForm/>    
        </div>
    )
}