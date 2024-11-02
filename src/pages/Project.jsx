import { useParams } from "react-router-dom"
import ProjectDetails from "../components/ProjectDetails/ProjectDetails"
import { useEffect } from "react";


export default function ProjectPage(){
    const { id } = useParams()

    useEffect(() => {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return(
        <ProjectDetails/>
    )
}