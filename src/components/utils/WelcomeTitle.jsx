import "./WelcomeTitle.scss";
import React, { useEffect, useRef, useState } from "react";

export default function WelcomeTitle({ words, isVisible }) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [blurred, setBlurred] = useState(false);
    const [wordsTimeout, setWordsTimeout] = useState(null);
    const [blurTimeout, setBlurTimeout] = useState(null);

    const wordsTimeoutRef = useRef();
    const blurTimeoutRef = useRef();
    wordsTimeoutRef.current = wordsTimeout;
    blurTimeoutRef.current = blurTimeout;

    const play = () => {
        clearTimeout(wordsTimeoutRef.current);
        clearTimeout(blurTimeoutRef.current);

        nextWord();
    };

    const pause = () => {
        clearTimeout(wordsTimeoutRef.current);
        clearTimeout(blurTimeoutRef.current);
    };

    const nextWord = () => {
        setBlurred(false);

        setBlurTimeout(setTimeout(() => setBlurred(true), 3000));

        setWordsTimeout(
            setTimeout(() => {
                setCurrentWordIndex((index) =>
                    index >= words.length - 1 ? 0 : index + 1
                );
            }, 3500)
        );
    };

    useEffect(() => (isVisible ? play() : pause()), [isVisible]);

    useEffect(() => {
        nextWord();
    }, [currentWordIndex]);

    return (
        <div className="WelcomeTitle">
            <h2>
                Bonjour, je suis <br />
                <span className={"bold" + (blurred ? " blurred" : "")}>
                    {words[currentWordIndex]}
                </span>
            </h2>
        </div>
    );
}
