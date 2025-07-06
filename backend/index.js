import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import connectDB from "./utils/db.js";
import progressRoute from "./routes/progress.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

//CORS 
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

//API routes
app.use("/api/progress",progressRoute);

app.get("/",(req,res)=>{
    res.send("Came from bakcend.");
});

app.listen(PORT, ()=>{
    connectDB();
    console.log(`App listening on port : ${PORT}`);
});