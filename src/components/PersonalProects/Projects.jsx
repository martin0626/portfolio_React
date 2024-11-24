import { useMemo } from "react";
import SingleProject from "./SingleProject";
import projectsObj from "../../data/projects";


export default function Projects(){

    const projects = useMemo(()=>projectsObj.getProjects(), []);


    return(
        <section className="projects">
            <div className="projects-header">
                <h1 className="mainHeader">My Personal Projects</h1>
                <p>Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies.</p>
            </div>
            <div className="projects-content">
                {
                    projects.map(p=> <SingleProject project={p}/>)
                }
            </div>
        </section>
    )
}