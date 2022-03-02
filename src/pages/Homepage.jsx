import React from "react";

import { About, Contact, Header, Portfolio, Work } from "../components";

const Homepage = () => {
    return (
        <div>
            <Header />
            <About />
            <Portfolio />
            <Work />
            <Contact />
        </div>
    );
};

export default Homepage;
