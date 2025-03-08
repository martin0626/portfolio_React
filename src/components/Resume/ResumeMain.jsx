import resumePdf from "/MartinIvanov_Resume.pdf"
// import Gallery from "../UI/Gallery";
import certificatesObj from "../../data/certificates";
import { useMemo } from "react";
import GalleryComponent from "../UI/GalleryV2";


export default function ResumeMain(){
    const images = useMemo(()=>certificatesObj.getCertificatesImages(), []);
    const titles = useMemo(()=>certificatesObj.getCertificatesTitles(), []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'MartinIvanov_Resume.pdf'; 
        link.click();
    };

    return(
        <section className="resume show-right">
            <div className="resume-header">
                <h1 className="mainHeader">My Resume</h1>
                <div className="resume-header-actions">
                    <p onClick={handleDownload} className="mainBtn">Download PDF</p>
                </div>
            </div>
            {/* <Gallery images={images} folder={'certificates'} titles={titles} mode="dark"/> */}
            <GalleryComponent images={images} folder={'certificates'} titles={titles} mode="light"/>
        </section>
    )
}