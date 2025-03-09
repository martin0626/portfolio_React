import SingleTech from "./singleTech"



export default function TechStack(){
    return (
        <section className="tech-stack">

            <div className="stack-description">
                <h1 className="secondaryHeader">My Tech Stack</h1>
            </div>
            <div className="stack">
                {/* {techStackLogos.map(el=>{
                    return <SingleTech logo={el.logo} alt={el.alt} title={el.title}/>
                })} */}
                <SingleTech title="JavaScript"/>
                <SingleTech title="TS"/>
                <SingleTech title="React"/>
                <SingleTech title="Node JS"/>
                <SingleTech title="Express"/>
                <SingleTech title="Mongoose"/>
                <SingleTech title="CSS"/>
                <SingleTech title="HTML"/>
                <SingleTech title="Sass"/>
                <SingleTech title="Git"/>
                <SingleTech title="Python"/>
                <SingleTech title="Django"/>
            </div>
          
        </section>
    )
}