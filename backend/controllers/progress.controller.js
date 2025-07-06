import { Progress } from "../models/progress.model.js";
import getFormattedDateTime from "../utils/date.js";

export const addProgress = async (req, res) =>{
    try {
        const {title, content} = req.body;
        if(!title, !content){
            return res.status(400).json({
                message: "Something is Missing!",
                success: false
            });
        }
        const dateTime = getFormattedDateTime();
        await Progress.create(
            {
                title,
                content,
                dateTime
            }
        );
        return res.status(201).json({
            message: "Daily Progress added successfully!",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal serverl Error!",
            success: false
        });
    }
}

export const getAllProgress = async (req, res) => {
    try {
        const allProgress = await Progress.find({});
        // console.log(allProgress);
        return res.status(200).json({
            message: "All progress entries fetched successfully!",
            success: true,
            data: allProgress
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error!",
            success: false
        });
    }
}

