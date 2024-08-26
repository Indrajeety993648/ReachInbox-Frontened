import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from "../assets/logo.svg";

function SideBar({ onMenuItemClick }) {
    const [selectedItem, setSelectedItem] = useState("/");

    const handleMenuItemClick = (path) => {
        setSelectedItem(path);
        onMenuItemClick(path);
    };

    return (
        <div className="dark:bg-[#101113] bg-white overflow-y-scroll no-scrollbar h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10">
            <div className="rounded-xl">
                <img
                    src={logo}
                    className="h-8 rounded-xl object-left overflow-visible"
                    alt="Logo"
                />
            </div>
            <div className="text-[#AEAEAE] text-2xl space-y-10">
                <div
                    className={`cursor-pointer p-1 rounded-lg transition-colors duration-200 ${
                        selectedItem === "/" ? "bg-gray-600" : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleMenuItemClick("/")}
                >
                    {/* <RiHome5Fill className={`transition-colors duration-200 ${selectedItem === "/" ? "text-white" : "text-[#AEAEAE] hover:text-gray-500"}`} />
                </div> */}
                <div
                    className={`cursor-pointer p-1 rounded-lg transition-colors duration-200 ${
                        selectedItem === "/search" ? "bg-gray-600" : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleMenuItemClick("/search")}
                >
                    <RiUserSearchLine className={`transition-colors duration-200 ${selectedItem === "/search" ? "text-white" : "text-[#AEAEAE] hover:text-gray-500"}`} />
                </div>
                <div
                    className={`cursor-pointer p-1 rounded-lg transition-colors duration-200 ${
                        selectedItem === "/mail" ? "bg-gray-600" : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleMenuItemClick("/mail")}
                >
                    <RiMailFill className={`transition-colors duration-200 ${selectedItem === "/mail" ? "text-white" : "text-[#AEAEAE] hover:text-gray-500"}`} />
                </div>
                <div
                    className={`cursor-pointer p-1 rounded-lg transition-colors duration-200 ${
                        selectedItem === "/send" ? "bg-gray-600" : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleMenuItemClick("/send")}
                >
                    <IoIosSend className={`transition-colors duration-200 ${selectedItem === "/send" ? "text-white" : "text-[#AEAEAE] hover:text-gray-500"}`} />
                </div>
                <div
                    className={`cursor-pointer p-1 rounded-lg transition-colors duration-200 ${
                        selectedItem === "/stack" ? "bg-gray-600" : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleMenuItemClick("/stack")}
                >
                    <SiElasticstack className={`transition-colors duration-200 ${selectedItem === "/stack" ? "text-white" : "text-[#AEAEAE] hover:text-gray-500"}`} />
                </div>
                <div
                    className={`cursor-pointer p-1 rounded-lg transition-colors duration-200 ${
                        selectedItem === "/inbox" ? "bg-gray-600" : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleMenuItemClick("/inbox")}
                >
                    <FaInbox className={`transition-colors duration-200 ${selectedItem === "/inbox" ? "text-white" : "text-[#AEAEAE] hover:text-gray-500"}`} />
                </div>
                <div
                    className={`cursor-pointer p-1 rounded-lg transition-colors duration-200 ${
                        selectedItem === "/stacks" ? "bg-gray-600" : "hover:bg-gray-700"
                    }`}
                    onClick={() => handleMenuItemClick("/stacks")}
                >
                    <IoStatsChartSharp className={`transition-colors duration-200 ${selectedItem === "/stacks" ? "text-white" : "text-[#AEAEAE] hover:text-gray-500"}`} />
                </div>
            </div>
            <div className="text-white bg-green-700 p-2 rounded-full">IY</div>
        </div>
    );
}

export default SideBar;
