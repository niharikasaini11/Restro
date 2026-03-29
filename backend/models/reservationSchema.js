import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        minLength: [3, "First name must contain atleast 3 character"],
        maxlength: [30, "First name can not exceed 30 characters"],
    },
    lastName: {
        type: String,
        require: true,
        minLength: [3, "Last name must contain atleast 3 character"],
        maxlength: [30, "Last name can not exceed 30 characters"],
    },
    email: {
        type: String,
        require: true,
        validate: [validator.isEmail, "Provide a valid email"],
    },
    phone: {
        type: String,
        require: true,
        minLength: [10, "Phone number must contain only 10 digits!"],
        maxLength: [10, "Phone number cannot exceed 10 digits!"],
    },
    time: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);