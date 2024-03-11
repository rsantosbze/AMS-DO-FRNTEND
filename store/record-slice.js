import { createSlice } from '@reduxjs/toolkit';

const recordSlice = createSlice({
    name: "asset",
    initialState: { assetId: '', facilityId: '', operation: '', record: {}
},
    reducers: {
        addInfo(state, action) {
            state.record = action.payload.record;
            state.operation = action.payload.operation;
            state.facilityId = action.payload.facilityId;
            state.assetId = action.payload.assetId;
        },
    }
    
})

export const recordActions = recordSlice.actions;

export default recordSlice;