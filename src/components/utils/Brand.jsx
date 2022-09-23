import "./Brand.scss";
import React from "react";

export default function Brand({ firstName, lastName }) {
    return (
        <div className="Brand">
            <h1>
                {firstName} <span>{lastName}</span>
            </h1>
            <div className="underline"></div>
        </div>
    );
}
