import React, { useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import server from '../environment';

const server_url = server;

const socket = io("http://localhost:8000"); // replace with your backend URL

const TeacherUploadSlides = ({ roomId, socket }) => {
  // Now add the debug logs
  console.log('TeacherUploadSlides - roomId:', roomId);
  console.log('TeacherUploadSlides - socket:', socket);

  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    if (!files.length) return;

    console.log('Starting upload with roomId:', roomId); // Add this

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("slides", file));
    formData.append("roomId", roomId);

    try {
      setUploading(true);
      const res = await axios.post(
        "http://localhost:8000/api/v1/slides/upload",
        formData
      );

      console.log('Upload response:', res.data); // Add this

      const slides = res.data.slides;

      // This is the key socket emission
      console.log('Emitting slides-update to room:', roomId); // Add this

      // Emit slides-update to all participants in the room
      socket.emit("slides-update", { roomId, slides });

      setUploading(false);
      alert("Slides uploaded successfully!");
    } catch (err) {
      console.error('Upload error:', err); // Add this
      
      console.error(err);
      setUploading(false);
      alert("Upload failed");
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Slides"}
      </button>
    </div>
  );
};

export default TeacherUploadSlides;
