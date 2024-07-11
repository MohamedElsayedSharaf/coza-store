import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(sessionStorage.getItem("authUser")) || {
            name: "",
            password: "",
            authUser: false,
        },
    },
    reducers: {
        login(state, action) {
            const userId = action.payload;
            const userValid = /^[A-Za-z]{4,10}$/i.test(userId.name);
            const passwordValid =
                /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
                    userId.password
                );
            state.user = userId;
            if (!userValid || !passwordValid) {
                state.user.authUser = true;
            } else {
                state.user.authUser = false;
                const saveState = JSON.stringify(userId);
                sessionStorage.setItem("authUser", saveState);
            }
        },
        logout(state) {
            state.user = {
                name: "",
                password: "",
                authUser: false,
            }
            sessionStorage.clear()
        },
    },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
