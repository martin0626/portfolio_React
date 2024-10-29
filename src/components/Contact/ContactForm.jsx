import { useState } from "react"
import ContactInput from "./ContactInput";

export default function ContactForm(){
    const [selectedInput, setSelectedInput] = useState('');

    return(
        <form className="contact-form">
            
            <div className="contact-error">
                <span></span>
                <p></p>
            </div>
            <h3 className="secondaryHeader">Get in touch</h3>
            <ContactInput 
                label={'Name'} 
                className="text-euro"
                type="text"
                name="name"
            />
            <ContactInput 
                label={'Email'} 
                className="text-euro"
                type="email"
                name="email"
            />
            <ContactInput
                typeElement='textarea'
                label={'Message'} 
                className="text-euro"
                type="text"
                name="message"
                rows="4"
            />
            <button className="submitBtn text-euro" type="submit">Send</button>
      </form>
    )
}