import { useState } from "react";

export default function ProjectGallery({ images }){
    const [ currentActiveIndex,  setCurrentActiveIndex] = useState(0);
    const [currentEffectSide, setCurrentEffectSide] = useState('')
    const maxIndex = images.length - 1;



    const handleChangeIndex = (nextIndex)=>{
        
        setCurrentEffectSide(nextIndex > currentActiveIndex ? 'show-right' : 'show-left')
        setCurrentActiveIndex(nextIndex);
    }

    const handleNextIndex = ()=>{
        let newIndex = currentActiveIndex + 1;

        if(maxIndex < newIndex){
            newIndex = 0;
        }
        setCurrentEffectSide('show-right')
        setCurrentActiveIndex(newIndex);
    }

    const handlePreviousIndex = ()=>{
        let newIndex = currentActiveIndex - 1;

        if(0 > newIndex){
            newIndex = maxIndex;
        }

        setCurrentEffectSide('show-left')
        setCurrentActiveIndex(newIndex);
    }


    return (
        <div className="galllery">
            <div className="details-gallery">
                <a className="arrowCntr left-arr" onClick={handlePreviousIndex}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                    </svg>
                </a>
                <div className="details-images">
                    {
                        images.map((image, index)=>{
                            if(index === currentActiveIndex){
                                return <img src={image} alt="" className={`${currentEffectSide}`} />
                            }
                        })
                    }
                </div>
                
                <a className="arrowCntr right-arr" onClick={handleNextIndex}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
            <div className="details-dots">
                {images.map((e, i)=>{
                    return <div className={i == currentActiveIndex ? 'details-dots-single active-dot' : 'details-dots-single'} onClick={()=>{handleChangeIndex(i)}}></div>
                })}
            </div>
        </div>
    )
}