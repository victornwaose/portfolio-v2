import Reacts from "react";
import ITyped from "react-ityped";

import Yellow from "../../asset/yellow_ellipse.png";

const About = () => {
    const strings = ["Startups", "SMEs"];

    return (
        <div className="relative ">
            <div
                className="absolute right-0  "
                style={{ bottom: "-20px", paddingBottom: "30px" }}
            >
                <img src={Yellow} alt="ellipse" className="w-24 opacity-70 " />
            </div>
            <div className="w-40/50 ml-auto mr-auto text-left  pt-24 mt-20 relative ">
                <p class="text-gray-500 md:text-lg mb-5 hide-slideUp ">
                    Hello, I am{" "}
                    <span class="text-gray-900 inline-block">N</span>
                    <span class="hidden-name inline-block align-middle mr-2">
                        waose
                    </span>
                    <span class="text-gray-900">V</span>
                    <span class="hidden-name inline-block align-middle">
                        ictor
                    </span>
                </p>
                <h1 className="text-7xl font-sans text-left font-bold text-gray-800">
                    I build visually appealing websites and softwares for{" "}
                    <ITyped
                        className="container ityped-cursor  ml-auto mr-auto text-7xl font-sans font-bold  block md:inline bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-green-400"
                        showCursor={false}
                        strings={strings}
                        typeSpeed={500}
                        backSpeed={500}
                        startDelay={500}
                        backDelay={900}
                    />
                </h1>
            </div>
        </div>
    );
};

export default About;
