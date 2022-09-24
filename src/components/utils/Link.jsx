import "./Link.scss";
import React from "react";

export default function Link({ children, href, icon }) {
    return (
        <div className="Link">
            <a href={href} target="_blank" rel="noreferrer">
                {icon}
                {children}
            </a>
        </div>
    );
}
