import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    userAppointments: []
};

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user.push(action.payload);
        },
        removeUser: (state, action) => {
            state.user = state.user.filter((user) => user.id !== action.payload);
        },
        addAppointment: (state, action) => {
            state.userAppointments.push(action.payload);
        },
        removeAppointment: (state, action) => {
          /*   state.userAppointments = []; */
          state.userAppointments = state.userAppointments.filter((appointment) => appointment.id !== action.payload); 
        }
    }
})

export const { addUser, removeUser, addAppointment, removeAppointment } = userSlice.actions;

export default userSlice.reducer;
