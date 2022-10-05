import projects from "../../data/projects.json";
import Link from "../utils/Link";
import ProjectBox from "../utils/ProjectBox";
import React from "react";

export default function PortfolioProjects() {
    const projectBoxes = projects.map((projectData, index) => {
        return (
            <ProjectBox
                title={projectData.title}
                images={projectData.images.map((imagePath) => {
                    return require(`../../assets/projectsImages/${imagePath}.min.jpg`);
                })}
                key={index}
            >
                {projectData.description}
                <br />
                <br />
                {projectData.links.map((linkData, index) => {
                    return (
                        <Link
                            href={linkData.href}
                            icon={<i className={linkData.iconClasses}></i>}
                            key={index}
                        >
                            {linkData.name}
                        </Link>
                    );
                })}
            </ProjectBox>
        );
    });

    return <div className="PortfolioProjects">{projectBoxes}</div>;
}
