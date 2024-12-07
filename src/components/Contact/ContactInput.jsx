import { useEffect, useRef, useState } from "react"

export default function ContactInput({typeElement='input', label, isSending, ...props}){
    const [selectedInput, setSelectedInput] = useState(false);
    const inputRef = useRef();
    
    useEffect(()=>{
        if(inputRef.current?.value === ""){
            setSelectedInput(isSending)
        }
    }, [isSending])

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
                <input ref={inputRef} onFocus={handleFocus} onBlur={handleBlur} {...props} required/>
                    :
                <textarea ref={inputRef} onFocus={handleFocus} onBlur={handleBlur} {...props} required/>
            }

        </div>
    )
}