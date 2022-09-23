import Title from "../utils/Title";
import React from "react";

export default function Section({ children, title }) {
    return (
        <section className="Section">
            <Title>{title}</Title>
            <div className="section-content">{children}</div>
        </section>
    );
}