import SingleProject from "./SingleProject";

export default function Projects(){
    return(
        <section className="projects">
            <div className="projects-header">
                <h1 className="mainHeader">My Personal Projects</h1>
                <p>Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies.</p>
            </div>
            <div className="projects-content">
                <SingleProject 
                    image={"https://cdn1.iconfinder.com/data/icons/programing-development-7/24/html_html5_web_programing_developer-512.png"}
                    title={"Since beginning my journey as a freelance designer 12 years ago, I've done remote work for"}
                />
                <SingleProject 
                    image={"https://cdn1.iconfinder.com/data/icons/programing-development-7/24/html_html5_web_programing_developer-512.png"}
                    title={"Since beginning my journey as a freelance designer 12 years ago, I've done remote work for"}
                />
                <SingleProject 
                    image={"https://cdn1.iconfinder.com/data/icons/programing-development-7/24/html_html5_web_programing_developer-512.png"}
                    title={"Since beginning my journey as a freelance designer 12 years ago, I've done remote work for"}
                />
                <SingleProject 
                    image={"https://cdn1.iconfinder.com/data/icons/programing-development-7/24/html_html5_web_programing_developer-512.png"}
                    title={"Since beginning my journey as a freelance designer 12 years ago, I've done remote work for"}
                />
                <SingleProject 
                    image={"https://cdn1.iconfinder.com/data/icons/programing-development-7/24/html_html5_web_programing_developer-512.png"}
                    title={"Since beginning my journey as a freelance designer 12 years ago, I've done remote work for"}
                />

                <SingleProject 
                    image={"https://cdn1.iconfinder.com/data/icons/programing-development-7/24/html_html5_web_programing_developer-512.png"}
                    title={"Since beginning my journey as a freelance designer 12 years ago, I've done remote work for"}
                />
            </div>
        </section>
    )
}