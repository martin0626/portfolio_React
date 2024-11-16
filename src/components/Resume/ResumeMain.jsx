import resumeImg from "../../../public/ResumeImg.png"
import resumePdf from "../../../public/MartinIvanov_Resume.pdf"
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";



const DOCS = [
    {
        title: 'Resume',
        position: 1,
        image: '../../../public/ResumeImg.png',
    },
    {
        title: 'JS Advanced Course',
        position: 2,
        image: '../../../public/ResumeImg.png',
    },
    {
        title: 'Python Web Course',
        position: 3,
        image: '../../../public/ResumeImg.png',
    },
    {
        title: 'React Course',
        position: 4,
        image: '../../../public/ResumeImg.png',
    }
]



export default function ResumeMain(){
    // const mainDoc = DOCS.find(e=> e.position === 1);
    const [ currentActivePos,  setCurrentActivePos] = useState(3);
    const [currentEffectSide, setCurrentEffectSide] = useState('');

    // const maxIndex = images.length - 1;


    const handleChangeIndex = (nextIndex)=>{
        setCurrentEffectSide(nextIndex > currentActiveIndex ? 'show-right' : 'show-left')
        setCurrentActivePos(nextIndex);
    }

    const handleNextIndex = ()=>{
        let newIndex = currentActiveIndex + 1;

        if(maxIndex < newIndex){
            newIndex = 0;
        }
        setCurrentEffectSide('show-right')
        setCurrentActivePos(newIndex);
    }

    const handlePreviousIndex = ()=>{
        let newIndex = currentActiveIndex - 1;

        if(0 > newIndex){
            newIndex = maxIndex;
        }

        setCurrentEffectSide('show-left')
        setCurrentActivePos(newIndex);
    }

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
            <p className="resume-label">{DOCS.find(d=>d.position === currentActivePos).title}</p>

            
            <div className="resume-main">
                <div className="resume-main-arrow leftA">
                    <FaArrowAltCircleLeft />
                </div>
                <div className="resume-main-arrow rightA">
                    <FaArrowAltCircleRight />
                </div>
                <div className="resume-main-img">
                    {
                        DOCS.map(doc=>{
                            if(currentActivePos === doc.position){
                                return <img src={doc.image}/>
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
}