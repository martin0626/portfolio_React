import { useContext } from "react";
import { NotificationContext } from "../../pages/Root";

export default function ContactInfo({}){

    const { notificationHandler } = useContext(NotificationContext);

    const onCopyHandler = (text)=>{
        notificationHandler('Contact was copied!', 'success', 2000)
        navigator.clipboard.writeText(text)
    };


    return (
        <div className="contacts">
            <div onClick={()=>onCopyHandler('Sofia, Bulgaria')} className="contacts-single">
                <span className="contacts-single-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
                </span>
                <h3>Address</h3>
                <p>Sofia, Bulgaria</p>
            </div>
            <div onClick={()=>onCopyHandler('ivanov_martin2000@abv.bg')} className="contacts-single">
                <span className="contacts-single-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                </span>
                <h3>Email</h3>
                <p>ivanov_martin2000@abv.bg</p>
            </div>
            <div onClick={()=>onCopyHandler('linkedin.com/in/мартин-иванов-851b79254')} className="contacts-single">
                <span style={{transform: "rotate(-45deg)"}} className="contacts-single-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                </span>
                <h3>LinkedIn</h3>
                <p>Martin Ivanov</p>
            </div>
        </div>
    )
}