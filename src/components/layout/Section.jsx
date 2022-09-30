import Title from "../utils/Title";
import "./Section.scss";
import React, { useEffect } from "react";

export default function Section({ children, title, menuSetter = () => {} }) {
    let id = title.replaceAll(" ", "_");

    useEffect(() => {
        menuSetter((menu) => {
            return [
                ...menu,
                {
                    name: title,
                    anchor: id,
                },
            ];
        });

        return () => {
            menuSetter((menu) => {
                return menu.filter((menuEntry) => menuEntry.name !== title);
            });
        };
    }, []);

    return (
        <section className="Section">
            <div className="anchor" id={id}></div>

            <Title>{title}</Title>
            <div className="sectionContent">{children}</div>
        </section>
    );
}
