import React, { useState } from "react";
import TeachProfileModal from "./TeachProfileModal";

const TechNavbar = ({ teacher, setTeacher }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    console.log("Teacher logged out");
    alert("Logged out!");
    // implement real logout logic here
  };

  return (
    <>
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-green-600">Teacher Dashboard</div>

        <div className="flex items-center gap-6">
          <div className="font-semibold hover:text-green-600 cursor-pointer">My Classes</div>
          <div className="font-semibold hover:text-green-600 cursor-pointer">Assignments</div>
          <div className="font-semibold hover:text-green-600 cursor-pointer">Schedule</div>

          {/* Teacher Profile */}
          <div
            className="relative"
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >
            <div className="w-10 h-10 bg-green-500 text-white font-bold rounded-full flex items-center justify-center cursor-pointer">
              {teacher?.profilePic ? (
                <img src={teacher.profilePic} alt="avatar" className="w-10 h-10 rounded-full" />
              ) : (
                teacher.name.charAt(0).toUpperCase()
              )}
            </div>

            {profileOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded z-50">
                <li
                  className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                  onClick={() => setModalOpen(true)}
                >
                  Edit Profile
                </li>
                <li className="px-4 py-2 hover:bg-green-100 cursor-pointer">Change Picture</li>
                <li className="px-4 py-2 hover:bg-green-100 cursor-pointer">Settings</li>
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

      {modalOpen && <TeachProfileModal teacher={teacher} setTeacher={setTeacher} setModalOpen={setModalOpen} />}
    </>
  );
};

export default TechNavbar;
