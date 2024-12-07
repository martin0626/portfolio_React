import { useContext, useState } from "react"
import ContactInput from "./ContactInput";
import { handleFormErrs } from '../../utils/helpers'
import { NotificationContext } from "../../pages/Root";
import emailjs  from "@emailjs/browser";



const emailSender = (formElmemnt)=>{
    const SERVICEid = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATEid = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLICKKEY = import.meta.env.VITE_PUBLIC_KEY;
    

    return emailjs.sendForm(SERVICEid, TEMPLATEid, formElmemnt, {
        publicKey: PUBLICKKEY,
    })
}


export default function ContactForm(){
    const [errMsg, setErrMsg] = useState('');
    const [sending, setSending] = useState(false);
    const { notificationHandler } = useContext(NotificationContext);

    


    const sendEmail = async (formHTML)=>{
        setSending(true);
        try{
            await emailSender(formHTML);
            notificationHandler('Thank you! I will contact you ASAP! :)', 'success', 4000);
            formHTML.reset()
            setSending(false);

        }catch(err){
            notificationHandler('Something went wrong, this message is not received by Me!', 'err', 4000);
            setSending(false);
            formHTML.reset()
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries());
        const errs = handleFormErrs(data);
        setErrMsg(errs);

        if(errs === '') sendEmail(e.target);
    }


    return(
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-header">
                <h3 className="secondaryHeader">Get in touch</h3>    
                <div className={errMsg !== '' ? 'contact-error' : 'contact-error hiddenEl'}>
                    <svg style={{width: '2.2rem'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <p>{errMsg}</p>
                </div>
            </div>
            <ContactInput 
                label={'Name'} 
                className="text-euro"
                type="text"
                name="name"
                isSending={sending}
            />
            <ContactInput 
                label={'Email'} 
                className="text-euro"
                type="email"
                name="email"
                isSending={sending}

            />
            <ContactInput
                typeElement='textarea'
                label={'Message'} 
                className="text-euro"
                type="text"
                name="message"
                rows="4"
                isSending={sending}

            />
            <button className="submitBtn text-euro" type="submit">{sending ? "Sending..." : "Send"}</button>
      </form>
    )
}