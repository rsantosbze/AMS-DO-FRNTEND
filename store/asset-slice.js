import { createSlice } from '@reduxjs/toolkit';

const assetSlice = createSlice({
    name: "asset",
    initialState: {
        suppliers: [], contractors: [], assetTypes: [], facilityId: '', operation: '', asset: {}
    },
    reducers: {
        addInfo(state, action) {
            state.suppliers = action.payload.suppliers;
            state.contractors = action.payload.contractors;
            state.assetTypes = action.payload.assetTypes;
            state.operation = action.payload.operation;
            state.facilityId = action.payload.facilityId;
            state.asset = action.payload.asset;
        },
    }
})

export const assetActions = assetSlice.actions;

export default assetSlice;