import resumeImg from "../../../public/ResumeImg.png"
import resumePdf from "../../../public/MartinIvanov_Resume.pdf"
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";



const DOCS = [
    {
        title: 'Resume',
        position: 1,
        image: '/public/ResumeImg.png',
    },
    {
        title: 'React Certificate',
        position: 2,
        image: '/public/React_Certificate.png',
    },
    {
        title: 'HTML&CSS Certificate',
        position: 3,
        image: '/public/HTMLCSS_Certificate.png',
    },
    {
        title: 'JS Advanced',
        position: 4,
        image: '/public/JSAdvanced.png',
    },
    {
        title: 'JS Applications',
        position: 5,
        image: '/public/JSapps.png',
    },
    {
        title: 'Python Advanced',
        position: 6,
        image: '/public/PyAdvanced.png',
    },
    {
        title: 'Python OOP',
        position: 7,
        image: '/public/PythonOOP.png',
    },
    {
        title: 'Python Web Framework',
        position: 8,
        image: '/public/PythonWeb.png',
    }
]



export default function ResumeMain(){
    // const mainDoc = DOCS.find(e=> e.position === 1);
    const [ currentActivePos,  setCurrentActivePos] = useState(0);
    const [currentEffectSide, setCurrentEffectSide] = useState('');

    const maxIndex = DOCS.length - 1;


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


    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'MartinIvanov_Resume.pdf'; 
        link.click();
    };

    return(
        <section className="resume">
            <div className="resume-header">
                <h1 className="mainHeader">My Resume</h1>
                <div className="resume-header-actions">
                    <p onClick={handleDownload} className="mainBtn">Download PDF</p>
                </div>
                
            </div>
            <p className="resume-label">{DOCS[currentActivePos].title}</p>

            
            <div className="resume-main">
                <div className="resume-main-arrow leftA">
                    <FaArrowAltCircleLeft onClick={handlePreviousIndex} />
                </div>

                <AnimatePresence>
                
                    <motion.div 
                        className="resume-main-img"
                        
                    >
                        {
                            DOCS.map((doc, index)=>{
                                if(currentActivePos === index){
                                    return <motion.img 
                                    drag="x"
                                    onDragEnd={handleDragEnd}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    initial={{ opacity: 0, x: currentEffectSide ===  'show-right' ? 300 : -300}}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{duration: 0.5}}
                                    layout exit={{ x: 300, opacity: 0 }} 
                                    key={doc.position}  
                                    src={doc.image}
                                    />
                                }
                            })
                        }
                    </motion.div>
                    <div className="gallery-dots">
                        {DOCS.map((e, i)=>{
                            return <div className={i == currentActivePos ? 'gallery-dots-single active-dot-r' : 'gallery-dots-single'} onClick={()=>{handleChangeIndex(i)}}></div>
                        })}
                    </div>
                </AnimatePresence>
                <div className="resume-main-arrow rightA">
                    <FaArrowAltCircleRight onClick={handleNextIndex} />
                </div>
            </div>
        </section>
    )
}







            // <motion.div
            //         drag="x"
            //         dragConstraints={{ left: 0, right: 0 }}
            //         onDragEnd={handleDragEnd}
            //         initial={{ x: -100 }}
            //         animate={{ x: 0 }}
            //         transition={{ type: "spring", stiffness: 300, damping: 30 }}
            //         style={{
            //             display: "flex",
            //             width: "max-content",
            //             cursor: "grab",
            //         }}
            //         className="image-gallery resume-main-img"
            //     >
            //         {DOCS.map((obj, index) => {
            //             if(index === currentActivePos){
            //                 return <motion.img
            //                 key={index}
            //                 src={obj.image}
            //                 alt={`Slide ${index + 1}`}
            //             />
            //             }
            //     })}
            //     </motion.div>