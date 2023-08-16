/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const masterSlice = createSlice({
	name: "master",
	initialState: {
		data:{}
	},
	reducers: {
		changeMasterComplete: (state: any, action) => {
			state.data = action.payload.data;
		}
	},
});

export const { changeMasterComplete } = masterSlice.actions;
export const getMaster = (state: any) => state;
export default masterSlice.reducer;
