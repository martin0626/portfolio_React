import SingleTech from "../Skills/singleTech";

export default function ProjectSkills({skills}){
    return (
        <div className="project-skills details-info-card">
            <h2>Used Technologies: </h2>
            <div className="project-skills-info">
                {skills.map(s=> <SingleTech title={s} key={s}/>)}
            </div>
        </div>
    )
}