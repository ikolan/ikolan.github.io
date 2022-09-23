import "./SocialIcon.scss";
import React from "react";

export default function SocialIcon({ icon, link }) {
    return (
        <div className="SocialIcon">
            <a href={link} target="_blank" rel="noreferrer">
                {icon}
            </a>
        </div>
    );
}
