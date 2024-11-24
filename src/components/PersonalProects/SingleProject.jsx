import { Link } from "react-router-dom";
import getImageURL from "../../utils/image-util";

export default function SingleProject({project, altImg=''}){
    return(   
        <div className="singleProject">
            <div className="singleProject-background">
                <img src={getImageURL(project.coverImg, 'projects')} alt={altImg} />
            </div>
            <div className="singleProject-content text-euro">
                <p>{project.longDescription}</p>
                <div className="singleProject-btnGroup">
                    <Link to={`project/${project.id}`} className="mainBtn">Learn More</Link>
                    <a className="mainBtn" href={project.codeLink}>Code</a>
                </div>
            </div>
        </div>  
    )
}