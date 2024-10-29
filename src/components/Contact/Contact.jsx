import ContactForm from "./ContactForm";

export default function ConactSection(){
    return (
        <div className="contact">
            <div className="contact-info white-text">
                <h1 className="mainHeader">My Contacts:</h1>
                <div className="contacts">
                    <div className="contacts-single">
                        <span className="contacts-single-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                        </span>
                        <h3>Address</h3>
                        <p>Sofia, Bulgaria</p>
                    </div>
                    <div className="contacts-single">
                        <span className="contacts-single-logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                        </span>
                        <h3>Email</h3>
                        <p>ivanov_martin2000@abv.bg</p>
                    </div>
                    <div className="contacts-single">
                        
                        <h3>LinkedIn</h3>
                        <p>Martin Ivanov</p>
                    </div>
                </div>
            </div>
            <ContactForm/>    
        </div>
    )
}