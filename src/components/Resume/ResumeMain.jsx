import resumePdf from "/MartinIvanov_Resume.pdf"
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import Gallery from "../UI/Gallery";
import { image } from "motion/react-client";



const DOCS = [
    {
        title: 'Resume',
        position: 1,
        image: '/ResumeImg.png',
    },
    {
        title: 'React Certificate',
        position: 2,
        image: '/React_Certificate.png',
    },
    {
        title: 'HTML&CSS Certificate',
        position: 3,
        image: '/HTMLCSS_Certificate.png',
    },
    {
        title: 'JS Advanced',
        position: 4,
        image: '/JSAdvanced.png',
    },
    {
        title: 'JS Applications',
        position: 5,
        image: '/JSapps.png',
    },
    {
        title: 'Python Advanced',
        position: 6,
        image: '/PyAdvanced.png',
    },
    {
        title: 'Python OOP',
        position: 7,
        image: '/PythonOOP.png',
    },
    {
        title: 'Python Web Framework',
        position: 8,
        image: '/PythonWeb.png',
    }
];



export default function ResumeMain(){
    // const mainDoc = DOCS.find(e=> e.position === 1);
    const [ currentActivePos,  setCurrentActivePos] = useState(0);
    const [currentEffectSide, setCurrentEffectSide] = useState('');
    const images = DOCS.map(obj=> obj.image);
    const titles = DOCS.map(obj=> obj.title);

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
            <Gallery images={images} titles={titles} mode="dark"/>
        </section>
    )
}