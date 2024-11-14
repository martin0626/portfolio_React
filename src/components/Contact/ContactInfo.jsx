import { useContext, useState } from "react";
import { NotificationContext } from "../../pages/Root";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt  } from "react-icons/fa";


export default function ContactInfo({}){
    const [action, setAction] = useState('');
    const { notificationHandler } = useContext(NotificationContext);

    const onCopyHandler = (text)=>{
        notificationHandler('Contact was copied!', 'success', 2000)
        navigator.clipboard.writeText(text)
    };

    const onHoverHandler = (id)=>{
        setAction(id)
    }

    const onVistHandler = (link)=>{
        window.open(link);
    }


    return (
        <div className="contacts">
            <div 
                onMouseOver={()=>onHoverHandler('address')} 
                onMouseLeave={()=>onHoverHandler('')}
                onClick={()=>onCopyHandler('Sofia, Bulgaria')} 
                className="contacts-single"
            >
                <span className="contacts-single-logo">
                    <FaMapMarkerAlt/>
                </span>
                <h3>Address</h3>
                <p>Sofia, Bulgaria</p>
                <p className={action === 'address' ? 'action action-shown' : 'action'}>Copy</p>
            </div>
            
            <div 
                onMouseOver={()=>onHoverHandler('email')} 
                onMouseLeave={()=>onHoverHandler('')}
                onClick={()=>onVistHandler('mailto:ivanov_martin2000@abv.bg')}
                className="contacts-single"
            >
                <span className="contacts-single-logo">
                    <FaEnvelope/>
                </span>
                <h3>Email</h3>
                <p>ivanov_martin2000@abv.bg</p>
                <p className={action === 'email' ? 'action action-shown' : 'action'}>Send</p>
            </div>
            <div 
                onMouseOver={()=>onHoverHandler('in')} 
                onMouseLeave={()=>onHoverHandler('')}
                onClick={()=>onVistHandler('https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D1%82%D0%B8%D0%BD-%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2-851b79254/')} 
                className="contacts-single"
            >
                <span className="contacts-single-logo">
                    <FaLinkedin />
                </span>
                <h3>LinkedIn</h3>
                <p>Martin Ivanov</p>
                <p className={action === 'in' ? 'action action-shown' : 'action'}>Visit</p>
            </div>
        </div>
    )
}