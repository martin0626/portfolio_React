import TechStack from "./SkillsTech";

export default function Skills() {

    return (
      <>
        <section className="skills">
          <div className="skills-header">
            <h1 className="mainHeader white-text">Hi, I'm Martin. Nice to meet you!</h1>
            <h2 style={{letterSpacing: "1px"}} className="white-text">For the past three years, I've immersed myself in learning web development technologies such as React, HTML, CSS, Node.js, Python, and Django, building a solid foundation in both frontend and backend development.<br/> Over the last year, I have focused on frontend development, particularly React applications. Now, I aim to expand my knowledge by creating full-stack applications with React and Node.js to become a full-stack web developer.</h2>
          </div>
        </section>
        <TechStack/>
      </>
    )
  }