import express from "express";
import Rider from "../model/Rider.js";

const router = express.Router();

// Register a rider
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const newRider = new Rider({ name, email, password, phone });
        const savedRider = await newRider.save();
        res.status(201).json(savedRider);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get rider details
router.get("/:id", async (req, res) => {
    try {
        const rider = await Rider.findById(req.params.id);
        if (!rider) return res.status(404).json({ error: "Rider not found" });
        res.json(rider);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
