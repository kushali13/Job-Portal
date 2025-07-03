//TO run database open chrome->mongodb atlas->job_portal->test->user
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";
dotenv.config({});

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials:true
}
app.use(cors(corsOptions));
const PORT=process.env.PORT || 8080;

//apis
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

// Serve static files from uploads folder
app.use("/uploads", express.static(path.join(process.cwd(), "backend", "uploads")));

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})