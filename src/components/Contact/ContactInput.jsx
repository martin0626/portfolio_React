import { useState } from "react"

export default function ContactInput({typeElement='input', label, ...props}){
    const [selectedInput, setSelectedInput] = useState(false);

    const handleFocus = ()=>{
        setSelectedInput(true);
    }

    const handleBlur = (e)=>{
        if(e.target.value.trim() === ''){
            setSelectedInput(false);
        }
        
    }

    return(
        <div className="contact-form-input">
            <label className={selectedInput ? "selected-label" : ""}>{label}</label>
            {
                typeElement === 'input'
                    ?
                <input onFocus={handleFocus} onBlur={handleBlur} {...props} required/>
                    :
                <textarea onFocus={handleFocus} onBlur={handleBlur} {...props} required/>
            }

        </div>
    )
}