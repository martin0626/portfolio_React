import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import getImageURL from "../../utils/image-util";
import LoadingComp from "./Loading";


const fetchImages = async (imageUrls) => {
    try {
        let data = await Promise.all(
            imageUrls.map((url) =>
            new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(url);
                img.onerror = reject;
            })
            )
        );
    
        return data
    }catch(err){
        console.log(err);
    }
};



export default function Gallery({images, folder, titles=[], mode='light'}){
    const [ currentActivePos,  setCurrentActivePos] = useState(0);
    const [currentEffectSide, setCurrentEffectSide] = useState('');
    const [loadedImages, setLoadedImages] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    
    const maxIndex = images.length - 1;


    useEffect(()=>{

        setIsloading(true);
        const setImages = async()=>{
            const urls = images.map(i => getImageURL(i, folder))

            const data = await fetchImages(urls);
            
            setLoadedImages(data);
            setIsloading(false);
        }

        
        images.length > 0 && setImages();
    }, images)

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
    
                    {
                        isLoading
                            ?
                                <div className="gallery-loading">
                                    <LoadingComp/>
                                </div>
                            :
                            <div className="gallery-img-conatiner">
                                <AnimatePresence>
                                    {loadedImages.map((img, index) => {
                                        return (
                                            index === currentActivePos && (
                                                <motion.img
                                                    key={img} 
                                                    src={img}
                                                    drag="x"
                                                    onDragEnd={handleDragEnd}
                                                    dragConstraints={{ left: 0, right: 0 }}
                                                    initial={{
                                                        opacity: 0,
                                                        x: currentEffectSide === "show-right" ? 300 : -300,
                                                    }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{
                                                        opacity: 0,
                                                        x: currentEffectSide === "show-right" ? -300 : 300,
                                                    }}
                                                    transition={{ duration: 0.5 }}
                                                    className="currentImg"
                                                />
                                            )
                                        );
                                    })}
                                </AnimatePresence>
                            </div>
                    }

                    <div className="gallery-arrow rightA">
                        <FaArrowAltCircleRight onClick={handleNextIndex} />
                    </div>
                </motion.div>
                <div className="gallery-dots">
                    {images.map((e, i)=>{
                        return <div key={i} className={i == currentActivePos ? 'gallery-dots-single active-dot-r' : 'gallery-dots-single'} onClick={()=>{handleChangeIndex(i)}}></div>
                    })}
                </div>
            </AnimatePresence>
            
        </div>
    )
}