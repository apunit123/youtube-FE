import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import route from "./routes/userRoute.js";
import cors from "cors";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URI;
app.use(cors()); 
app.use(express.json());

// ✅ mount routes ONLY ONCE
app.use("/api/user", route);

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
