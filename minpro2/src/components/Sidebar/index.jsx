import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
// list icon
import { RiDashboardFill } from "react-icons/ri";
import { IoIosContacts } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaBlogger } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false); // State for sidebar visibility
    const token = localStorage.getItem("access_token");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        setTimeout(() => {
            navigate("/");
        }, 1000);
    };

    return (
        <>
            
            {/* Burger Menu */}
            <div className="fixed top-4 right-4 z-50 md:hidden ">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-3xl text-orange-600 focus:outline-none"
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-orange-100 transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:static md:translate-x-0 w-64 z-40`}
            >
                <div className="md:pt-10 space-y-5 h-full md:pl-5 md:pr-5 md:pb-5">
                    <div className="bg-white shadow-md p-6 h-full md:h-auto rounded-md">
                        {/* Logo */}
                        <div>
                            <Link to="/">
                                <img src={logo} alt="logo" className="px-5" />
                            </Link>
                        </div>

                        {/* General Links */}
                        <div className="pt-10 md:space-y-3">
                            <h1 className="text-gray-700 font-bold">General</h1>
                            <button className="flex items-center w-full gap-2 py-3 pl-3 pr-10 rounded-lg hover:bg-gray-400">
                                <IoIosContacts /> Psycologist
                            </button>
                            <Link
                                to="/dashboard"
                                className="flex items-center w-full gap-2 py-3 pl-3 pr-10 rounded-lg hover:bg-gray-400"
                            >
                                <RiDashboardFill /> Dashboard
                            </Link>
                            <button className="flex items-center w-full gap-2 py-3 pl-3 pr-10 rounded-lg hover:bg-gray-400">
                                <SlCalender /> Calendar
                            </button>
                            <button className="flex items-center w-full gap-2 py-3 pl-3 pr-10 rounded-lg hover:bg-gray-400">
                                <FaBookOpenReader /> Education
                            </button>
                            <button className="flex items-center w-full gap-2 py-3 pl-3 pr-10 rounded-lg hover:bg-gray-400">
                                <FaBlogger /> Blog
                            </button>
                        </div>

                        {/* Tools Links */}
                        <div className=" pt-5 md:space-y-3">
                            <h1 className="text-gray-700 font-bold">Tools</h1>
                            <button className="flex items-center w-full gap-2 py-3 pl-3 pr-10 rounded-lg hover:bg-gray-400">
                                <IoChatbubblesSharp /> Chat
                            </button>
                            <button className="flex items-center w-full gap-2 py-3 pl-3 pr-10 rounded-lg hover:bg-gray-400">
                                <IoMdSettings /> Setting
                            </button>
                        </div>

                        {/* Logout/Login */}
                        <div className="pt-10">
                            {token ? (
                                <button
                                    className="flex items-center w-full gap-2 py-3 pl-3 pr-10 rounded-lg hover:bg-gray-400"
                                    onClick={handleLogout}
                                >
                                    <TbLogout2 /> Log out
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="flex items-center w-full gap-2 py-3 pl-3 pr-10 rounded-lg hover:bg-gray-400"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
};

export default SideBar;
