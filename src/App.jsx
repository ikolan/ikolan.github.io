import "./App.scss";
import Introduction from "./components/layout/Introduction";
import MainContainer from "./components/layout/MainContainer";
import Navbar from "./components/layout/Navbar";
import ProjectsList from "./components/layout/ProjectsList";
import Section from "./components/layout/Section";
import Background from "./components/utils/Background";
import SkillDescription from "./components/utils/SkillDescription";
import SkillIcons from "./components/utils/SkillIcons";
import WelcomeTitle from "./components/utils/WelcomeTitle";
import projects from "./data/projects.json";
import roles from "./data/roles.json";
import skills from "./data/skills.json";
import React, { useState } from "react";
import TrackVisibility from "react-on-screen";

export default function App() {
    const [menu, setMenu] = useState([]);

    return (
        <main className="App">
            <Background />
            <Navbar menu={menu} />
            <div className="container">
                <MainContainer>
                    <TrackVisibility>
                        <WelcomeTitle words={roles} />
                    </TrackVisibility>
                    <Section title="Introduction" menuSetter={setMenu}>
                        <Introduction />
                    </Section>
                    <Section title="Mes connaissances" menuSetter={setMenu}>
                        <SkillIcons
                            icons={skills.icons.map((iconPath) => {
                                return {
                                    content: (
                                        <img
                                            src={require(`./assets/icons/${iconPath}`)}
                                        />
                                    ),
                                };
                            })}
                        />
                        <SkillDescription />
                    </Section>
                    <Section title="Portfolio" menuSetter={setMenu}>
                        <ProjectsList list={projects.portfolio} />
                    </Section>
                    <Section title="Autre créations" menuSetter={setMenu}>
                        <ProjectsList list={projects.others} />
                    </Section>
                </MainContainer>
            </div>
        </main>
    );
}
