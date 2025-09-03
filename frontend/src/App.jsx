import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import LandingPage from "./pages/LandingPage";
import Authentication from "./pages/Authentication";
import StudentPage from "./layouts/student/StudentPage";
import TeacherPage from "./layouts/teacher/TeacherPage";
import StudClassroom from "./layouts/student/StudClassroom";
import VideoMeet from "./pages/VideoMeet";

function App() {
  return (
    <>
      <Routes>
        <Route path="/"element={<HomePage />} />
        <Route path="/home"element={<LandingPage />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/online-classroom" element={<LandingPage />} />
        <Route path="/student-dashboard" element={<StudentPage />} />
        {/* <Route path="/Student-classroom" element={<StudClassroom />} /> */}
        <Route path="/teacher-dashboard" element={<TeacherPage />} />
        <Route path="/:url" element={<VideoMeet />} />
      </Routes>
    </>
  );
}

export default App;
