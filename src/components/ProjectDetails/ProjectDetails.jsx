import Gallery from "../UI/Gallery";
import ProjectInfo from "./ProjectInfo";
import ProjectSkills from "./ProjectSkills";

const images = [
    'https://ninjasites.com/images/blog/webpage-creation.png?v=1684153977260389102',
    'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines/web-site.jpg',
    'https://i.ytimg.com/vi/3xW0qckEn6U/maxresdefault.jpg'
]

export default function ProjectDetails(){
    return (
        <section className="details show-right">
            <h1 className="mainHeader">Project Name</h1>
            <Gallery images={images}/>
            <div className="details-info">
                <ProjectSkills/>
                <ProjectInfo/>
            </div>
        </section>
    )
}