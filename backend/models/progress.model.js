import mongoose from "mongoose";

const ProgressListSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content:{
            type: String,
            required: true,
        },
        dateTime:{
            type: String,
            required: true
        }
    }
);

export const Progress = mongoose.model("Progress", ProgressListSchema);
