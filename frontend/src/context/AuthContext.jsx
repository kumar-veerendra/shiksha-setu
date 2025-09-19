import axios from "axios";
import httpStatus from "http-status";
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import server from "../environment";


export const AuthContext = createContext({});

const client = axios.create({
  baseURL: `${server}/api/v1/users`
});

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    // initialize from localStorage if available
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const router = useNavigate();

  useEffect(() => {
    // keep localStorage in sync whenever userData changes
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
  }, [userData]);

  // REGISTER
  const handleRegister = async (name, username, password, role) => {
    try {
      const request = await client.post("/register", {
        name,
        username,
        password,
        role
      });

      if (request.status === httpStatus.CREATED) {
        return request.data.message;
      }
    } catch (err) {
      throw err;
    }
  };



  // LOGIN
  const handleLogin = async (username, password) => {
    try {
      const request = await client.post("/login", { username, password });

      // ✅ Log full response
     console.log("Full response:", request);

     // ✅ Log only data from backend
     console.log("Backend data:", request.data);

      // if (request.status === httpStatus.OK) {
      //   const { token, role, redirect } = request.data;

      //   const user = { username, role, token };
      //   setUserData(user);
      //   localStorage.setItem("user", JSON.stringify(user));

      //   // Redirect based on role with replace to fix back button issue
      //   router(redirect, { replace: true });
      // }

      if (request.status === httpStatus.OK) {
        const { token, role, redirect, username, name } = request.data;

        const user = { token, role, username, name };
        setUserData(user);
        localStorage.setItem("user", JSON.stringify(user));

        router(redirect, { replace: true });
      }


    } catch (err) {
        // Log the error response from backend
        console.log("Error response:", err.response?.data);
      throw err;
    }
  };

  // GET USER HISTORY
  const getHistoryOfUser = async () => {
    try {
      const request = await client.get("/get_all_activity", {
        params: { token: userData?.token }
      });
      return request.data;
    } catch (err) {
      throw err;
    }
  };

  // ADD ACTIVITY TO USER HISTORY
  const addToUserHistory = async (meetingCode) => {
    try {
      const request = await client.post("/add_to_activity", {
        token: userData?.token,
        meeting_code: meetingCode
      });
      return request.data;
    } catch (err) {
      throw err;
    }
  };

  const data = {
    userData,
    setUserData,
    handleRegister,
    handleLogin,
    getHistoryOfUser,
    addToUserHistory
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

// ✅ Custom hook to use context in other files
export const useAuth = () => useContext(AuthContext);