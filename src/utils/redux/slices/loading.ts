/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
	name: "loading",
	initialState: {
		status: true,
    width: "w-0"
	},
	reducers: {
		changeStateLoading: (state: any, action) => {
			state.status = action.payload;
		},
		changeLoadingWidth: (state: any, action) => {
			state.width = action.payload;
		}
	},
});

export const { changeStateLoading, changeLoadingWidth } = loadingSlice.actions;
export const getLoading = (state: any) => state;
export default loadingSlice.reducer;
