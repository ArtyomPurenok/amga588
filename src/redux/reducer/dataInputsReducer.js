import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputData: 2,
    textareaData: 2,
    checkboxData: 2,
};


const allData = createSlice({
    name: 'Data for fields',
    initialState,
    reducers: {
        setValue: (state, action) => {
            if (action.payload.input <= 0) {
                state.inputData = 0;
            }else {
                state.inputData = action.payload.input;
            }
            
            if (action.payload.textarea <= 0) {
                state.textareaData = 0;
            }else {
                state.textareaData = action.payload.textarea;
            }

            if (action.payload.checkbox <= 0) {
                state.checkboxData = 0;
            }else {
                state.checkboxData = action.payload.checkbox;
            }   
        },
    },

});


export const { inputData, textareaData, checkboxData, setValue } = allData.actions;
export default allData.reducer;