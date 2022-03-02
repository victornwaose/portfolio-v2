import React, { useEffect, useRef } from "react";
import ITyped from "react-ityped";

const About = () => {
    const strings = [
        "react-ityped",
        "is a",
        "react component",
        "that wraps npm ityped package.",
    ];

    return (
        <div>
            <h2>Hi I'm </h2>
            <h1>Nwaose Victor</h1>
            <h3>Freelance {""}</h3>
            <ITyped
                className="container ityped-cursor"
                showCursor={false}
                strings={strings}
                typeSpeed={10}
                backSpeed={10}
                startDelay={100}
                backDelay={50}
            />
        </div>
    );
};

export default About;
