import SingleTech from "./singleTech"

const techStackLogos = [
    {
        title: "JavaScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        alt: "JS Logo"
    },
    {
        title: "React",
        logo: "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
        alt: "React Logo"
    },
    {
        title: "Node JS",
        logo: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
        alt: "Node Logo"
    },
    {
        title: "CSS",
        logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
        alt: "CSS Logo"
    },
    {
        title: "HTML",
        logo: "https://cdn1.iconfinder.com/data/icons/programing-development-7/24/html_html5_web_programing_developer-512.png",
        alt: "HTML Logo"
    },
    {
        title: "Sass",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-sass-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226054.png?f=webp&w=256",
        alt: "Sass Logo"
    },
    {
        title: "Git",
        logo: "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
        alt: "Git Logo"
    },
    {
        title: "Python",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
        alt: "Python Logo"
    },
    {
        title: "Python Django",
        logo: "https://img.icons8.com/color/512/django.png",
        alt: "Python Logo"
    },
]


export default function TechStack(){
    return (
        <section className="tech-stack">

            <div className="stack-description">
                <h1 className="secondaryHeader">My Tech Stack</h1>
            </div>
            <div className="stack">
                {techStackLogos.map(el=>{
                    return <SingleTech logo={el.logo} alt={el.alt} title={el.title}/>
                })}
            </div>
          
        </section>
    )
}