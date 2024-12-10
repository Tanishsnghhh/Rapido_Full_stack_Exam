import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    rideId: { type: mongoose.Schema.Types.ObjectId, ref: "Ride", required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Payment", PaymentSchema);
