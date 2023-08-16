/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		data: { profile: {} },
	},
	reducers: {
		changeUserComplete: (state: any, action) => {
			state.data = action.payload.data;
		},
	},
});

export const { changeUserComplete } = userSlice.actions;
export const getUser = (state: any) => state;
export default userSlice.reducer;
