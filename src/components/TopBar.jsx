// topBar.jsx

import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import LogoutPopUp from "./LogoutPopUp";

function TopBar() {
  const [showLogoutPopUp, setShowLogoutPopUp] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowLogoutPopUp(false);
    window.location.href = "/";
  };

  const handleLogoutClick = () => {
    setShowLogoutPopUp(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutPopUp(false);
  };

  return (
    <div className="h-16 w-screen bg-white dark:bg-[#1F1F1F] fixed px-4 md:px-10 lg:px-14 text-[#5B5F66] dark:text-white top-0 flex justify-between items-center border-b-2 dark:border-[#343A40] border-[#E0E0E0]">
      <b className="text-lg md:text-xl">Onebox</b>
      <div className="pr-4 md:pr-10 flex items-center">
        <ThemeToggle /> &nbsp;
        <span
          className="cursor-pointer flex items-center text-sm md:text-base"
          onClick={handleLogoutClick}
        >
          Tim's Workspace
          <MdOutlineKeyboardArrowDown className="text-2xl md:text-3xl ml-2" />
        </span>
      </div>
      {showLogoutPopUp && (
        <LogoutPopUp onCancel={handleCancelLogout} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default TopBar;
