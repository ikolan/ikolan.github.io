import "./TabsContainer.scss";
import React, { useState } from "react";

export default function TabsContainer({ children }) {
    const [selectedTab, setSelectedTab] = useState(0);
    const [maxHeight, setMaxHeight] = useState(0);

    return (
        <div className="TabsContainer">
            <div className="tabsList">
                {children.map((element, index) => {
                    return (
                        <div
                            className={
                                "tabButton" +
                                (selectedTab === index ? " active" : "")
                            }
                            key={index}
                            onClick={() => setSelectedTab(index)}
                        >
                            {element.props.title}
                        </div>
                    );
                })}
            </div>
            <div className="tabContent" style={{ height: maxHeight + "px" }}>
                {children.map((element, index) => {
                    return (
                        <div
                            key={index}
                            hidden={selectedTab !== index}
                            ref={(node) => {
                                if (
                                    node !== null &&
                                    node.offsetHeight > maxHeight
                                ) {
                                    console.log(node);
                                    setMaxHeight(node.offsetHeight);
                                }
                            }}
                        >
                            {element}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
