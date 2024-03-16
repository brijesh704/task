import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "../components/createAppointment/createAppointmentSlice"

export const appStore = configureStore({
    reducer: {
        appointments: appointmentReducer
    }
})