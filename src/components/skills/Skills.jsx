import React from 'react'
import './skills.css'
import DataAnalysis from './DataAnalysis'
import MachineLearning from './MachineLearning'
import Programming from './Programming'
import WebDev from './WebDev'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Expertise</span>

        <div className="skills_container container grid">
            <DataAnalysis/>
            <MachineLearning/>
            <Programming />
            <WebDev />
        </div>
    </section>
  )
}

export default Skills