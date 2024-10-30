export default function NotificationComp({message, status}){

    debugger
    return (
        <div className={`notification-outer show-right ${status === 'success' ? 'succNotification' : 'errNotification'}`}>
            <div className="notification text-euro">
            <p className="notification-status">Success: </p>
            <p>
                {message} 
            </p>
        </div>
        </div>
    )
}