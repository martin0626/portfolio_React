export default function ContactForm(){
    return(
        <form className="contact-form">
            
            <div className="contact-error">
                <span></span>
                <p></p>
            </div>
            <h3 className="secondaryHeader">Get in touch</h3>
            <div className="contact-form-input">
                <label> Name:</label>
                <input
                    className="text-euro"
                    type="text"
                    name="name"
                    required
                />
            </div>
            <div className="contact-form-input">
                <label> Email:</label>
                <input
                    className="text-euro"
                    type="email"
                    name="email"
                    required
                />
            </div>
            <div className="contact-form-input ">
                <label> Message:</label>
                <textarea
                    className="text-euro"
                    type="text"
                    name="message"
                    required
                />
            </div>
            <button className="submitBtn text-euro" type="submit">Send</button>
      </form>
    )
}