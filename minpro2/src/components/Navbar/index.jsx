import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Manage the toggle state for mobile menu
    const token = localStorage.getItem("access_token");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Navbar */}
            <div className="flex flex-row items-center justify-between gap-5 px-10 py-5 bg-orange-50 drop-shadow-lg md:px-20 lg:px-32">
                <img src={logo} alt="logo" className="w-24 lg:w-40 md:w-32" />
                
                {/* Desktop Menu */}
                <div className="flex-row items-center hidden space-x-6 md:flex">
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Therapist</Link>
                    <Link to="">FAQ</Link>
                    {token ? (
                        <button onClick={handleLogout} className="px-3 py-1 transition border-2 border-orange-500 rounded-lg outline-none hover:bg-orange-500 hover:text-white">Logout</button>
                    ) : (
                        <Link to="/login" className="px-3 py-1 transition border-2 border-orange-500 rounded-lg outline-none hover:bg-orange-500 hover:text-white">Login</Link>
                    )}
                </div>

                {/* Mobile Burger Icon */}
                <button
                    onClick={toggleMenu}
                    className="text-black md:hidden focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4 space-y-4 text-center px-5 py-3 items-center justify-center flex flex-col pb-8 shadow-md`}>
                <Link to="/" className="block text-black">Home</Link>
                <Link to="/dashboard" className="block text-black">Therapist</Link>
                <Link to="" className="block text-black">FAQ</Link>
                {token ? (
                    <button onClick={handleLogout} className="block text-black">Logout</button>
                ) : (
                    <Link to="/login" className="block text-black">Login</Link>
                )}
                <Link to="/dashboard" className="block px-3 py-1 text-sm text-white bg-orange-500 rounded-lg ">
                    Book a Therapy
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
