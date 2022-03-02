import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-40/50 bg-white ml-auto mr-auto mt-3 rounded">
            <header className="flex justify-between cursor-pointer">
                <div className="">
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="w-10 h-10 rounded-full mt-1 "
                    />
                </div>
                <div className="flex">
                    <ul className="sm:hidden md:flex justify-between ml-4 mt-4">
                        <div className="mr-6 hover:text-emerald-600 font-bold">
                            About
                        </div>
                        <div className="mr-6 hover:text-emerald-600 font-bold">
                            Portfolio
                        </div>
                        <div className="mr-6 hover:text-emerald-600 font-bold">
                            Work
                        </div>
                        <div className="mr-6 hover:text-emerald-600 font-bold">
                            Contact
                        </div>
                    </ul>
                </div>

                <ul className="flex rounded-3xl  border-emerald-200 border-2 p-2 ">
                    <Link
                        to="/"
                        className="mr-6 font-bold  rounded-full text-center  p-2 text-emerald-600 hover:bg-emerald-200 "
                    >
                        Profile
                    </Link>
                    <div className="font-bold  rounded-full text-center p-2 text-emerald-600 hover:bg-emerald-200 ">
                        Blog
                    </div>
                </ul>
            </header>
        </div>
    );
};

export default Header;
