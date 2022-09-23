import "./Title.scss";
import React from "react";

export default function Title({ children }) {
    return (
        <div className={"Title"}>
            <h3>{children}</h3>
            <div className="underline"></div>
        </div>
    );
}
