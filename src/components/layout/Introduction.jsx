import laptopIcon from "../../assets/icons/laptop.svg";
import introduction from "../../data/introduction.json";
import "./Introduction.scss";
import React from "react";

export default function Introduction() {
    return (
        <div className="Introduction">
            <div className="logo">
                <img src={laptopIcon} />
            </div>
            <div className="text">
                <p>{introduction.map((line) => line + "\n")}</p>
            </div>
        </div>
    );
}
