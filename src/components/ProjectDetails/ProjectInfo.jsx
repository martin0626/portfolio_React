export default function ProjectInfo({description, codeLink, demoLink}){

    const handleSelect = (link)=>{
        if(link){
            window.open(link);
        }
    }

    return (
        <div className="project-info details-info-card">
            <h2>Project Info: </h2>
            <div className="project-info-text">
                <p>{description}</p>
            </div>
            <div className="project-info-btns">
                <button className="mainBtn project-info-btn" onClick={()=>handleSelect(codeLink)}>View Code</button>
                <button className={demoLink ? "mainBtn project-info-btn" : "mainBtn project-info-btn inactiveBtn"} onClick={()=>handleSelect(demoLink)}>View Live</button>
            </div>
        </div>
    )
}