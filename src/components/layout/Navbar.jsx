import barsIcon from "../../assets/icons/bars.svg";
import githubLogo from "../../assets/icons/github.svg";
import linkedInLogo from "../../assets/icons/linkedin.svg";
import links from "../../data/links.json";
import { default as GithubIcon } from "../icons/Github";
import { default as LinkedInIcon } from "../icons/LinkedIn";
import Brand from "../utils/Brand";
import SocialIcon from "../utils/SocialIcon";
import "./Navbar.scss";
import React, { useState } from "react";

const Icons = () => {
    return (
        <>
            <SocialIcon icon={<GithubIcon />} link={links.socials.github} />
            <SocialIcon icon={<LinkedInIcon />} link={links.socials.linkedin} />
        </>
    );
};

const MobileMenu = ({ menuEntries }) => {
    let [open, setOpen] = useState(false);

    const onClick = () => setOpen((open) => !open);

    return (
        <div className={"mobileMenu" + (open ? " open" : "")}>
            <div className="button" onClick={onClick}>
                <img src={barsIcon} />
            </div>

            <div className="content">
                <div className="socials">
                    <Icons />
                </div>
                <div className="entries" onClick={onClick}>
                    {menuEntries}
                </div>
            </div>
        </div>
    );
};

export default function Navbar({ menu }) {
    const menuEntries = menu.map((entry, index) => {
        return (
            <a className="menuEntry" href={"#" + entry.anchor} key={index}>
                {entry.name}
            </a>
        );
    });

    return (
        <div className="Navbar">
            <Brand firstName="Nicolas" lastName="Benoit" />
            <div className="menu">{menuEntries}</div>
            <div className="socials">
                <Icons />
            </div>
            <MobileMenu menuEntries={menuEntries} />
        </div>
    );
}
