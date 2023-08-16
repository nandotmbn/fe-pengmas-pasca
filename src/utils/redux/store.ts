import userReducer from "./slices/user";
import masterReducer from "./slices/master";
import loadingReducer from "./slices/loading";
import { configureStore } from "@reduxjs/toolkit";
import selectedClassReducer from "./slices/selected-class";

export const store = configureStore({
	reducer: {
		user: userReducer,
		master: masterReducer,
		loading: loadingReducer,
		selectedClass: selectedClassReducer,
	},
});
