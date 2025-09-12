import { Meeting } from "../models/meetingModel.js";

export const createMeeting = async (req, res) => {
  try {
    const { meetingCode, userId } = req.body;
    const meeting = await Meeting.create({ meetingCode, user_id: userId, status: "started" });
    return res.status(201).json({ success: true, meeting });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const joinMeeting = async (req, res) => {
  try {
    const { meetingCode } = req.body;
    const meeting = await Meeting.findOne({ meetingCode });

    if (!meeting) {
      return res.status(404).json({ success: false, message: "Meeting not found" });
    }

    // ❌ Check if meeting is not started
    if (meeting.status !== "started") {
      return res.status(400).json({ success: false, message: "Class is not started yet" });
    }

    return res.status(200).json({ success: true, meeting });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const endMeeting = async (req, res) => {
  try {
    const { meetingCode } = req.params;

    const meeting = await Meeting.findOneAndUpdate(
      { meetingCode },
      { status: "ended" },
      { new: true }
    );

    if (!meeting) {
      return res.status(404).json({ success: false, message: "Meeting not found" });
    }

    return res.json({ success: true, meeting });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};


// meetingsController.js
export const getActiveMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.findOne({ status: "started" }).sort({ createdAt: -1 });

    if (!meeting) {
      return res.status(404).json({ success: false, message: "No active meeting" });
    }

    return res.json({ success: true, meeting });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
