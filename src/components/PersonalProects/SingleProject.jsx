import { Link } from "react-router-dom";

export default function SingleProject({image, title, altImg=''}){
    return(   
        <div className="singleProject">
            <div className="singleProject-background">
                <img src={image} alt={altImg} />
            </div>
            <div className="singleProject-content text-euro">
                <p>{title}</p>
                <div className="singleProject-btnGroup">
                    <Link to={`project/${1}`} className="mainBtn">Learn More</Link>
                    <a className="mainBtn">Code</a>
                </div>
            </div>
        </div>  
    )
}