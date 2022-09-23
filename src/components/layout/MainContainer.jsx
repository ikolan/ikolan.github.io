import "./MainContainer.scss";
import React from "react";

export default function MainContainer({ children }) {
    return (
        <div
            className="MainContainer"
            data-aos="fade-up"
            data-aos-duration="1500"
        >
            {children}
        </div>
    );
}
