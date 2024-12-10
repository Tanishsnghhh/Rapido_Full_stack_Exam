import mongoose from "mongoose";

const RideSchema = new mongoose.Schema({
    riderId: { type: mongoose.Schema.Types.ObjectId, ref: "Rider", required: true },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: "Driver", required: true },
    pickupLocation: { type: String, required: true },
    dropoffLocation: { type: String, required: true },
    fare: { type: Number, required: true },
    status: { type: String, enum: ["requested", "accepted", "completed"], default: "requested" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Ride", RideSchema);
