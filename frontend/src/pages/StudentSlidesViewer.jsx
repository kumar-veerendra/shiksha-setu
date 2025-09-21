import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000"); // replace with your backend URL

const StudentSlidesViewer = ({ roomId, socket }) => {
  console.log('StudentSlidesViewer - roomId:', roomId);
  console.log('StudentSlidesViewer - socket:', socket);

  const [slides, setSlides] = useState([]);

  useEffect(() => {

    console.log('Student setting up socket listeners'); // Add this

    // 1️⃣ Ask server for current slides when component mounts
    socket.emit("getSlides", roomId, (currentSlides) => {
      if (currentSlides) {
        console.log('Student received initial slides:', currentSlides);
        setSlides(currentSlides);
      }
    });
    

     // 2️⃣ Listen for real-time slide updates
    socket.on("slides-update", ({ slides }) => {
      console.log('Student received slides-update:', slides); // Add this
      setSlides(slides);
    });

    return () => {
      socket.off("slides-update");
    };
  }, []);

  return (
    <div>
      {slides.map((slide, index) => (
        <img
          key={index}
          src={`http://localhost:8000${slide.url}`}
          alt={`Slide ${index + 1}`}
          style={{ width: "80%", margin: "10px 0" }}
        />
      ))}
    </div>
  );
};

export default StudentSlidesViewer;
