import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/auth.js";
import propertyRoutes from "./routes/property.js";
import tenantRoutes from "./routes/tenant.js";

dotenv.config();

const app = express();

/* =====================
   Global Middleware
===================== */

//mongodb connection
connectDB();

app.use(
    cors({
        origin: "http://localhost:5173", // frontend
        credentials: true
    })
);

app.use(express.json());

/* =====================
   API Routes
===================== */
app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/tenant", tenantRoutes);

/* =====================
   Health Check
===================== */
app.get("/", (req, res) => {
    res.send(" Settlr API is running");
});

/* =====================
   MongoDB Connection
===================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`Server running on ${PORT}`)
);

