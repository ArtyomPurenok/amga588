import { configureStore } from "@reduxjs/toolkit";

import allData from "./reducer/dataInputsReducer";


export const store = configureStore({
    reducer: {
        dataInputsReducer: allData,
    },
});