import { User } from "../models/userModel.js";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import crypto from "crypto";

// Login
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please provide all required data" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "User not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password); // await here
    if (isMatch) {
      // Generate token
      const token = crypto.randomBytes(20).toString("hex");
      user.token = token;
      await user.save();

      // Redirect based on role
      let redirect = user.role === "teacher" ? "/teacher-dashboard" : "/student-dashboard";

      return res.status(httpStatus.OK).json({ token, role: user.role, redirect });
    } else {
      return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong: ${error}` });
  }
};

// Register
const register = async (req, res) => {
  const { name, username, password, role } = req.body;

  if (!name || !username || !password || !role) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Please provide all required data" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(httpStatus.CONFLICT)
        .json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      username,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    return res
      .status(httpStatus.CREATED)
      .json({ message: `${role} registered successfully` });
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `Something went wrong: ${error}` });
  }
};


export { login, register };
