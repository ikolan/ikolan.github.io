import "./Background.scss";
import React from "react";

export default function Background() {
    return (
        <div className="Background">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <polygon points="0,90 100,20 100,100 0,100" />
            </svg>
        </div>
    );
}
