import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    registered: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            const { email } = action.payload;
            const existingUser = state.users.find(user => user.email === email);
            if (existingUser) {
                state.registered = true;
            } else {
                state.users.push(action.payload);
                state.registered = false;
            }
        }
    }
});

export const { registerUser } = userSlice.actions;
export default userSlice.reducer;