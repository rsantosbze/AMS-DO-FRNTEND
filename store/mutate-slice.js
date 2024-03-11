import { createSlice } from '@reduxjs/toolkit';

const mutateSlice = createSlice({
    name: "mu",
    initialState: {operation:'', item: []},
    reducers: {
        mutate(state, action) {
            state.item = action.payload.item;
            state.operation = action.payload.operation;
        },

        clear(state) {
            state.item = null;
            state.operation = null;
        }
    }
    
})

export const mutateActions = mutateSlice.actions;

export default mutateSlice;