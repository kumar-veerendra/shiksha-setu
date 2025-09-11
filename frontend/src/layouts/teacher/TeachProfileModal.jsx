import React, { useState } from "react";

const TeachProfileModal = ({ teacher, setTeacher, setModalOpen }) => {
  const [name, setName] = useState(teacher.name || "");
  const [email, setEmail] = useState(teacher.email || "");
  const [profilePic, setProfilePic] = useState(teacher.profilePic || "");

  const handleSave = () => {
    setTeacher({ ...teacher, name, email, profilePic });
    setModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded shadow-lg w-96 p-6 relative">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

        <div className="flex flex-col items-center mb-4">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-2" />
          ) : (
            <div className="w-24 h-24 bg-green-500 text-white text-3xl rounded-full flex items-center justify-center mb-2">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
          <input type="file" onChange={handleImageChange} className="text-sm" />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeachProfileModal;
