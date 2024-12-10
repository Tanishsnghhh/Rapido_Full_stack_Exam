import express from "express";
import mongoose from "mongoose";
import riderRoutes from "./routes/riderRoutes.js";
import driverRoutes from "./routes/driverRoutes.js";

const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb://127.0.0.1:27017/rapido_db";

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB:", err));

// Routes
app.use("/riders", riderRoutes);
app.use("/drivers", driverRoutes);

// Default route
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
