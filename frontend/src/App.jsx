import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import HomePage from "./pages/home/HomePage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import StudentDashboard from "./Dashboard/StudentDashboard";
import TeacherDashboard from "./Dashboard/TeacherDashboard";

function App() {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  // Sync user state if localStorage changes
  useEffect(() => {
    const handleStorage = () => setUser(JSON.parse(localStorage.getItem("user")));
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
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
  );
}

export default App;
