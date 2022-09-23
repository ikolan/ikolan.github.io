import "./PhotoDiapo.scss";
import React, { useEffect, useRef, useState } from "react";

export default function PhotoDiapo({ images = [], isVisible }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [oldImageIndex, setOldImageIndex] = useState(0);
    const [oldImageOpacity, setOldImageOpacity] = useState(0);
    const [changeInterval, setChangeInterval] = useState(0);

    const currentImageIndexRef = useRef(currentImageIndex);
    const oldImageOpacityRef = useRef(oldImageOpacity);

    currentImageIndexRef.current = currentImageIndex;
    oldImageOpacityRef.current = oldImageOpacity;

    const play = () => {
        setChangeInterval(
            setInterval(() => {
                setOldImageIndex(currentImageIndexRef.current);
                setOldImageOpacity(1);
                if (currentImageIndexRef.current >= images.length - 1) {
                    setCurrentImageIndex(0);
                } else {
                    setCurrentImageIndex((index) => index + 1);
                }
            }, 5000)
        );
    };

    const pause = () => {
        clearInterval(changeInterval);
    };

    useEffect(() => {
        return () => {
            clearInterval(changeInterval);
        };
    }, []);

    useEffect(() => {
        const decreaseOpacity = () => {
            setOldImageOpacity((opacity) => opacity - 0.01);

            if (oldImageOpacityRef.current > 0) {
                setTimeout(decreaseOpacity, 10);
            }
        };

        decreaseOpacity();
    }, [currentImageIndex]);

    useEffect(() => (isVisible ? play() : pause()), [isVisible]);

    return (
        <div className={"PhotoDiapo"}>
            <div
                className="image"
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                }}
            ></div>
            <div
                className="old-image"
                style={{
                    backgroundImage: `url(${images[oldImageIndex]})`,
                    opacity: oldImageOpacity,
                }}
            ></div>
        </div>
    );
}
