import mongoose from "mongoose";

const DriverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    vehicleDetails: {
        type: {
            type: String, // e.g., Car, Bike
            required: true,
        },
        licensePlate: { type: String, required: true },
    },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Driver", DriverSchema);
