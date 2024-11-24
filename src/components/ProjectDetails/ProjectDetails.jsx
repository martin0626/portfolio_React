import projectsObj from "../../data/projects";
import Gallery from "../UI/Gallery";
import ProjectInfo from "./ProjectInfo";
import ProjectSkills from "./ProjectSkills";


export default function ProjectDetails({ id }){

    const project = projectsObj.getSingleProject(id);

    return (
        <section className="details show-right">
            <h1 className="mainHeader">{project.name}</h1>
            <Gallery images={project.gallery} folder={'projects'}/>
            <div className="details-info">
                <ProjectSkills skills={project.skills}/>
                <ProjectInfo description={project.longDescription} codeLink={project.codeLink} demoLink={project.demoLink}/>
            </div> 
        </section>
    )
}