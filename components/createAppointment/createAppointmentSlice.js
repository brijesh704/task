import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    slots: [],
    status: 'idle',
};

export const appointmentSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        createSlots: (state, action) => {
            state.slots = action.payload
        }
    }
})

export const { createSlots } = appointmentSlice.actions;

export default appointmentSlice.reducer;
