import "./App.scss";
import Introduction from "./components/layout/Introduction";
import MainContainer from "./components/layout/MainContainer";
import Navbar from "./components/layout/Navbar";
import PortfolioProjects from "./components/layout/PortfolioProjects";
import Section from "./components/layout/Section";
import Background from "./components/utils/Background";
import SkillDescription from "./components/utils/SkillDescription";
import SkillIcons from "./components/utils/SkillIcons";
import WelcomeTitle from "./components/utils/WelcomeTitle";
import data from "./data.json";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import React, { useState } from "react";

export default function App() {
    const [menu, setMenu] = useState([]);

    return (
        <main className="App">
            <Background />
            <Navbar menu={menu} />
            <div className="container">
                <MainContainer>
                    <WelcomeTitle />
                    <Section title="À propos de moi" menuSetter={setMenu}>
                        <Introduction />
                    </Section>
                    <Section title="Mes connaissances" menuSetter={setMenu}>
                        <SkillIcons
                            icons={data.skills.icons.map((iconPath) => {
                                return {
                                    content: (
                                        <img
                                            src={require(`./assets/skillIcons/${iconPath}`)}
                                        />
                                    ),
                                };
                            })}
                        />
                        <SkillDescription />
                    </Section>
                    <Section title="Portfolio" menuSetter={setMenu}>
                        <PortfolioProjects />
                    </Section>
                </MainContainer>
            </div>
        </main>
    );
}
