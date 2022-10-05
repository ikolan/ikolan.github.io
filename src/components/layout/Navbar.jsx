import links from "../../data/links.json";
import Brand from "../utils/Brand";
import SocialIcon from "../utils/SocialIcon";
import "./Navbar.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import React, { useState } from "react";

const Icons = () => {
    return (
        <>
            <SocialIcon
                icon={<i className="fa-brands fa-github"></i>}
                link={links.socials.github}
            />
            <SocialIcon
                icon={<i className="fa-brands fa-linkedin"></i>}
                link={links.socials.linkedin}
            />
        </>
    );
};

const MobileMenu = ({ menuEntries }) => {
    let [open, setOpen] = useState(false);

    const onClick = () => setOpen((open) => !open);

    return (
        <div className={"mobileMenu " + (open ? "open" : "")} onClick={onClick}>
            <i className="fa-solid fa-bars"></i>
            <div className="content">
                <div className="socials">
                    <Icons />
                </div>
                <div className="entries">{menuEntries}</div>
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
