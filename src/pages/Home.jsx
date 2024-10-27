import Hero from "../components/HeroSec/HeroSec.jsx"
import Projects from "../components/PersonalProects/Projects.jsx"
import Skills from "../components/Skills/SkillsSec.jsx"

export default function HomePage(){
    return(
        <div className="show-left">
            <Hero/>
            <Skills/>
            <Projects/>
        </div>
    )
}