import express from "express";
import { joinMeeting, createMeeting, endMeeting, getActiveMeeting } from "../controllers/meetingsController.js";

const router = express.Router();

router.post("/create", createMeeting);  // teacher creates meeting
router.post("/join", joinMeeting);      // student/guest joins meeting

router.put("/end/:meetingCode", endMeeting);
router.get("/active", getActiveMeeting);


export default router;
