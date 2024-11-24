import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import getImageURL from "../../utils/image-util";
import { image } from "motion/react-client";

export default function Gallery({images, folder, titles=[], mode='light'}){
    const [ currentActivePos,  setCurrentActivePos] = useState(0);
    const [currentEffectSide, setCurrentEffectSide] = useState('');

    const maxIndex = images.length - 1;


    const handleChangeIndex = (nextIndex)=>{
        setCurrentEffectSide(nextIndex > currentActivePos ? 'show-right' : 'show-left')
        setCurrentActivePos(nextIndex);
    }

    const handleNextIndex = ()=>{
        let newIndex = currentActivePos + 1;

        if(maxIndex < newIndex){
            newIndex = 0;
        }
        setCurrentEffectSide('show-right')
        setCurrentActivePos(newIndex);
    }

    const handlePreviousIndex = ()=>{
        let newIndex = currentActivePos - 1;

        if(0 > newIndex){
            newIndex = maxIndex;
        }

        setCurrentEffectSide('show-left')
        setCurrentActivePos(newIndex);
    }

    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
    
        // Determine direction of swipe based on drag offset and velocity
        if (offset < -200 || velocity < -300) {
            handleNextIndex();
        } else if (offset > 100 || velocity > 300) {
            handlePreviousIndex();
        }
    };
    

    return (
        <div className={mode === 'dark' ? 'gallery dark-mode' : 'gallery'}>
            {titles.length > 0 && <p className="gallery-label">{titles[currentActivePos]}</p>}
            <AnimatePresence>
                <motion.div 
                    className="gallery-img"
                >
                    <div className="gallery-arrow leftA">
                        <FaArrowAltCircleLeft onClick={handlePreviousIndex} />
                    </div>
    
                    <div className="gallery-img-conatiner">
                        {
                            images.map((img, index)=>{
                                if(currentActivePos === index){
                                    return <motion.img 
                                    drag="x"
                                    onDragEnd={handleDragEnd}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    initial={{ opacity: 0, x: currentEffectSide ===  'show-right' ? 300 : -300}}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{duration: 0.5}}
                                    layout exit={{ x: 300, opacity: 0 }} 
                                    key={index}  
                                    src={getImageURL(img, folder)}
                                    />
                                }
                            })
                        }
                    </div>

                    <div className="gallery-arrow rightA">
                        <FaArrowAltCircleRight onClick={handleNextIndex} />
                    </div>
                </motion.div>
                <div className="gallery-dots">
                    {images.map((e, i)=>{
                        return <div className={i == currentActivePos ? 'gallery-dots-single active-dot-r' : 'gallery-dots-single'} onClick={()=>{handleChangeIndex(i)}}></div>
                    })}
                </div>
            </AnimatePresence>
            
        </div>
    )
}