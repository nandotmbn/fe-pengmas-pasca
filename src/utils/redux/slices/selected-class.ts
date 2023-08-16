/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const selectedClassSlice = createSlice({
	name: "selectedClass",
	initialState: {
		data:{}
	},
	reducers: {
		changeSelectedClassComplete: (state: any, action) => {
			state.data = action.payload.data;
		}
	},
});

export const { changeSelectedClassComplete } = selectedClassSlice.actions;
export const getselectedClass = (state: any) => state;
export default selectedClassSlice.reducer;
