import { useParams } from "react-router-dom"

export default function ProjectPage(){

    const { id } = useParams()

    return(
        <section>
            <h1>Project {id}</h1>
        </section>
    )
}