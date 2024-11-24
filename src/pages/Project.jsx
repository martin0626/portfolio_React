import { useParams } from "react-router-dom"
import ProjectDetails from "../components/ProjectDetails/ProjectDetails"
import { useEffect } from "react";


export default function ProjectPage(){
    const { id } = useParams()

    return(
        <ProjectDetails id={id}/>
    )
}