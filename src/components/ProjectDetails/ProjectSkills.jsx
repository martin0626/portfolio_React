import SingleTech from "../Skills/singleTech";

export default function ProjectSkills(){
    return (
        <div className="project-skills details-info-card">
            <h2>Used Technologies: </h2>
            <div className="project-skills-info">
                <SingleTech {...{
                    title: "JavaScript",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                    alt: "JS Logo"
                }}/>
                <SingleTech {...{
                    title: "JavaScript",
                    logo: "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
                    alt: "JS Logo"
                }}/>
                <SingleTech {...{
                    title: "JavaScript",
                    logo: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
                    alt: "JS Logo"
                }}/>
                <SingleTech {...{
                    title: "JavaScript",
                    logo: "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
                    alt: "JS Logo"
                }}/>
            </div>
        </div>
    )
}