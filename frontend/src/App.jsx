import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import HomePage from "./pages/home/HomePage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Footer from "./components/Footer";
import StudentNavbar from "./components/StudentNavbar";
import StudentDashboard from "./Dashboard/StudentDashboard";
import TeacherNavbar from "./components/TeacherNavbar";
import TeacherDashboard from "./Dashboard/TeacherDashboard";
import PublicNavbar from "./components/PublicNavbar";
import PublicDashboard from "./Dashboard/PublicDashboard";

function App() {
  const location = useLocation();
  const hideNavbarFooter = ["/login", "/register"].includes(location.pathname);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  // Optional: sync state if localStorage changes
  useEffect(() => {
    const handleStorage = () => setUser(JSON.parse(localStorage.getItem("user")));
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <>
      {!hideNavbarFooter && <PublicNavbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Signup />} />

        <Route
          path="/studentDashboard"
          element={user?.role === "student" ? <StudentDashboard /> : <Login setUser={setUser} />}
        />
        <Route
          path="/teacherDashboard"
          element={user?.role === "teacher" ? <TeacherDashboard /> : <Login setUser={setUser} />}
        />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </>
  );
}
