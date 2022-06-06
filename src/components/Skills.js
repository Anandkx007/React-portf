import React from "react";
import "./Skills.css";
import SkillItem from "./SkillItem";

export default function skills() {
  return (
    <div className="skillWrapper">
      <div className="skillContainer">
        <h1>My suitcase of skills contains</h1>

        <div className="heading">
          <h2>Web Development</h2>
        </div>
        <div className="skillItems">
          <SkillItem name="React" />
          <SkillItem name="Bootstrap" />
          <SkillItem name="Chart JS" />
          <SkillItem name="REST API" />
          <SkillItem name="Javasript" />
          <SkillItem name="JQuery" />
          <SkillItem name="Sass" />
          <SkillItem name="VueJS"/>
          <SkillItem name="NextJS"/>
          <SkillItem name="Tailwind"/>
          <SkillItem name="HTML"/>
          <SkillItem name="CSS"/>
          
        </div>

        <div className="heading">
          <h2>General Programming</h2>
        </div>
        <div className="skillItems">
          <SkillItem name="C" />
          <SkillItem name="C++" />
          <SkillItem name="Data Structures" />
          <SkillItem name="Algorithms" />
          <SkillItem name="Object Oriented Programming" />
          <SkillItem name="Python" />
          <SkillItem name="SQL" />
        </div>

        <div className="heading">
          <h2>Other Tools and Frameworks</h2>
        </div>
        <div className="skillItems">
          <SkillItem name="Git/Github" />
          <SkillItem name="Bash" />
          <SkillItem name="Figma" />
        </div>
      </div>
    </div>
  );
}
// <SkillItem name="" />
