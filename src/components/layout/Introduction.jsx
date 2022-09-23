import laptopIcon from "../../assets/laptop.svg";
import data from "../../data.json";
import "./Introduction.scss";
import React from "react";

export default function Introduction() {
    return (
        <div className="Introduction">
            <div className="logo">
                <img src={laptopIcon} />
            </div>
            <div className="text">
                <p>{data.introduction}</p>
            </div>
        </div>
    );
}
