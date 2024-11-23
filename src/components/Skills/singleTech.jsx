import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaSass, FaGitAlt, FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";



const TECHMapper = {
    'JavaScript': <FaJsSquare/>,
    'React': <FaReact/>,
    'Node JS': <FaNodeJs/>,
    'CSS': <FaCss3Alt/>,
    'HTML': <FaHtml5/>,
    'Sass': <FaSass/>,
    'Django': <SiDjango/>,
    'Git': <FaGitAlt/>,
    'Python': <FaPython/>
}

export default function SingleTech({title}) {

    return (
        <div className="singleTech">
            <div className="singleTech-logo">
                {TECHMapper[title]}
            </div>
            <p>{title}</p>
        </div>
    )
}