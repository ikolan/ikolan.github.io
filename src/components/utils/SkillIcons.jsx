import "./SkillIcons.scss";
import React, { useEffect, useState } from "react";

export default function SkillIcons({ icons }) {
    const [iconsState, setIconState] = useState([]);

    const processIcons = () => {
        const iconsElement = [];

        iconsState.forEach((icon, index) => {
            iconsElement.push(
                <React.Fragment key={index}>
                    <div
                        className="icon"
                        style={{
                            height: icon.size + "rem",
                            width: icon.size + "rem",
                        }}
                    >
                        {icon.content}
                    </div>
                    <div className="iconMobile">{icon.content}</div>
                </React.Fragment>
            );
        });

        return iconsElement;
    };

    useEffect(() => {
        setIconState(
            icons.map((icon, index) => {
                icon.size =
                    2 +
                    (6 - 2) * Math.sin((index / (icons.length - 1)) * Math.PI);
                return icon;
            })
        );
    }, []);

    return <div className="SkillIcons">{processIcons()}</div>;
}
