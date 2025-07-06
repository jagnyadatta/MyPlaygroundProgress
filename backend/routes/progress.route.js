import express from "express";
import { addProgress, getAllProgress } from "../controllers/progress.controller.js";

const router = express.Router();

//routes
router.route("/add-progress").post(addProgress);
router.route("/get-progress").get(getAllProgress);

export default router;