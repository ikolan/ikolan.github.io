import "./WelcomeTitle.scss";
import React from "react";

export default function WelcomeTitle({ children }) {
    return (
        <div className="WelcomeTitle">
            <h2>{children}</h2>
        </div>
    );
}
