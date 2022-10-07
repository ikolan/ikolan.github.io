import skills from "../../data/skills.json";
import "./SkillDescription.scss";
import React from "react";

export default function SkillDescription() {
    return (
        <div className="SkillDescription">
            {skills.sections.map((section, index) => {
                return (
                    <div
                        className="section"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        key={index}
                    >
                        <p className="title">{section.name}</p>
                        <hr />
                        <div className="skills">
                            {section.skills.map((skill, index) => {
                                return <p key={index}>{skill}</p>;
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
