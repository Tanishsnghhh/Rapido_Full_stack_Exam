import express from "express";
import Driver from "../model/Driver.js";

const router = express.Router();

// Register a driver
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, phone, vehicleDetails } = req.body;
        const newDriver = new Driver({ name, email, password, phone, vehicleDetails });
        const savedDriver = await newDriver.save();
        res.status(201).json(savedDriver);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get driver details
router.get("/:id", async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id);
        if (!driver) return res.status(404).json({ error: "Driver not found" });
        res.json(driver);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
