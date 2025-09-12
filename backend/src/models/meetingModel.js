import mongoose, { Schema } from "mongoose";

const meetingSchema = new Schema(
  {
    user_id: {
      type: String,
    },

    meetingCode: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      default: Date.now,
      required: true,
    },

    status: {
      type: String,
      enum: ["not_started", "started", "ended"],
      default: "not_started",
    },
  },
  { timestamps: true }
);

const Meeting = mongoose.model("Meeting", meetingSchema);

export { Meeting };
