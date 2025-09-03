import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import { Link } from "react-router-dom";

const StuNavbar = ({ user, setUser }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
    // implement logout logic here
  };

  return (
    <>
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
            className="navbar-brand d-flex align-items-center navbar-brand-custom" 
            to="/student-dashboard"
            style={{height: "70px", width: "auto"}}
          >
            <img 
              src="./logo.png" 
              alt="Government of Rajasthan Logo" 
              style={{ 
                height: "50px", 
                width: "auto", 
                borderRadius: "8px",
                marginRight: "1rem",
                transition: "transform 0.3s ease"
              }} 
            />

          </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link 
              to="/courses" 
              className="font-semibold hover:text-blue-600 cursor-pointer"
            >
              Courses
          </Link>

          <Link 
              to="/assignments" 
              className="font-semibold hover:text-blue-600 cursor-pointer"
            >
              Assignments
          </Link>

          <Link 
              to="/student-classroom" 
              className="font-semibold hover:text-blue-600 cursor-pointer"
            >
              Live Classes
          </Link>

          {/* User Profile */}
          <div
            className="relative"
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >
            <div
              className="w-10 h-10 bg-blue-500 text-white font-bold rounded-full flex items-center justify-center cursor-pointer"
            >
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>

            {/* Profile Dropdown */}
            {profileOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded z-50">
                <li
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => setModalOpen(true)}
                >
                  Edit Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => alert("Change Picture clicked")}
                >
                  Change Picture
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Settings</li>
                <li
                  className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>

      {/* Profile Modal */}
      {modalOpen && <ProfileModal user={user} setUser={setUser} setModalOpen={setModalOpen} />}
    </>
  );
};

export default StuNavbar;
