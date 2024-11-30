import { useMemo } from "react";
import SingleProject from "./SingleProject";
import projectsObj from "../../data/projects";
import { FaGithub } from "react-icons/fa";


export default function Projects(){

    const projects = useMemo(()=>projectsObj.getProjects(), []);


    const onVistHandler = (link)=>{
        window.open(link);
    }

    return(
        <section className="projects">
            <div className="projects-header">
                <h1 className="mainHeader">My Personal Projects</h1>
                <p>Here you can see part of my projects, which I created with learning purposes. Check all my projects and exercises I have moved through, on my GitHub profile below.</p>
            </div>
            <div className="projects-git">
                <FaGithub onClick={()=>onVistHandler("https://github.com/martin0626")}/>
                <p>GitHub</p>
            </div>
            <div className="projects-content">
                {
                    projects.map(p=> <SingleProject key={p.id} project={p}/>)
                }
            </div>
        </section>
    )
}