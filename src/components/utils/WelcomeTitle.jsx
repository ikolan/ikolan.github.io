import "./WelcomeTitle.scss";
import React from "react";

export default function WelcomeTitle() {
    return (
        <div className="WelcomeTitle">
            <h2>
                Bonjour, <br /> Je suis{" "}
                <span className="bold">développeur web.</span>
            </h2>
        </div>
    );
}
