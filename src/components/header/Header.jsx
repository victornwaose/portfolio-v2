import React, { useState } from "react";
import { FaStream } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { VscClose } from "react-icons/vsc";

const Header = () => {
    const [close, setClose] = useState(false);

    const MobileViewBtn = () => {
        setClose(!close);
    };

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
                        <div className="mr-6 hover:text-emerald-600">About</div>
                        <div className="mr-6 hover:text-emerald-600">
                            Portfolio
                        </div>
                        <div className="mr-6 hover:text-emerald-600">Work</div>
                        <div className="mr-6 hover:text-emerald-600">
                            Contact
                        </div>
                    </ul>
                </div>

                <ul className="flex rounded-3xl  border-emerald-200 border-2 p-2 ">
                    <div className="mr-6 font-bold  rounded-full text-center  p-2 text-emerald-600 hover:bg-emerald-200 ">
                        Profile
                    </div>
                    <div className="font-bold  rounded-full text-center p-2 text-emerald-600 hover:bg-emerald-200 ">
                        Blog
                    <