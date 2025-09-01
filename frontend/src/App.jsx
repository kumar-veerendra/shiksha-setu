import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  // paths where you DON’T want Navbar/Footer
  const hideNavbarFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
