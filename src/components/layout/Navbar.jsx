import data from "../../data.json";
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
                link={data.socials.github}
            />
            <SocialIcon
                icon={<i className="fa-brands fa-linkedin"></i>}
                link={data.socials.linkedin}
            />
        </>
    );
};

const MobileMenu = () => {
    let [open, setOpen] = useState(false);

    const onClick = () => setOpen((open) => !open);

    return (
        <div className={"menu " + (open ? "open" : "")} onClick={onClick}>
            <i className="fa-solid fa-bars"></i>
            <div className="content">
                <Icons />
            </div>
        </div>
    );
};

export default function Navbar() {
    return (
        <div className="Navbar">
            <Brand firstName="Nicolas" lastName="Benoit" />
            <div className="socials">
                <Icons />
            </div>
            <MobileMenu />
        </div>
    );
}
