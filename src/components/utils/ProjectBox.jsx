import PhotoDiapo from "./PhotoDiapo";
import "./ProjectBox.scss";
import Title from "./Title";
import React from "react";
import TrackVisibility from "react-on-screen";

export default function ProjectBox({ children, title, images = [] }) {
    return (
        <div className="ProjectBox">
            <TrackVisibility>
                <PhotoDiapo images={images} />
            </TrackVisibility>
            <div className="description">
                <Title>{title}</Title>
                <div>{children}</div>
            </div>
        </div>
    );
}
