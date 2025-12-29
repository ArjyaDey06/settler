import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Routes
import authRoutes from "./routes/auth.js";
import propertyRoutes from "./routes/property.js";
import tenantRoutes from "./routes/tenant.js";

dotenv.config();

const app = express();

/* =====================
   Global Middleware
===================== */
app.use(
    cors({
        origin: "http://localhost:5173", // Vite frontend
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
    res.send("🚀 Settlr API is running");
});

/* =====================
   MongoDB Connection
===================== */
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB connected");
        app.listen(PORT, () =>
            console.log(`🚀 Server running on port ${PORT}`)
        );
    })
    .catch((error) => {
        console.error("❌ MongoDB connection failed:", error.message);
    });
