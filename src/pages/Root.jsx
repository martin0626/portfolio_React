import { Outlet } from "react-router-dom";
import Navigation from "../components/NavBar/Navigation";
import { createContext, useRef, useState } from "react"
import NotificationComp from "../components/UI/Notification";


export const NotificationContext = createContext();


export default function RootPage(){

    const [notification, setNotification] = useState({messages: undefined, status: undefined});
    const timeoutRef = useRef(null);


    const clearNotification = ()=>{
        setNotification({messages: undefined, status: undefined});
    }

    const notificationHandler = (messages, status, time=1000)=>{
        // Clear the previous timeout if it exists
        setNotification({messages, status});

        
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Set a new timeout to clear the value after 5 seconds
        timeoutRef.current = setTimeout(() => {
            clearNotification(); // Set to empty or default value after 5 seconds
        }, time);
    }

    return(
        <NotificationContext.Provider value={{notificationHandler}}>
            {notification.messages && <NotificationComp message={notification.messages} status={notification.status}/>}
            <Navigation/>
            <section className="main-section">
                <Outlet />
            </section>
        </NotificationContext.Provider >
    )
}