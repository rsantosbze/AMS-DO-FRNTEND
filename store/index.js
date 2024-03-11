import { configureStore } from '@reduxjs/toolkit';
import assetSlice from './asset-slice';
import mutateSlice from './mutate-slice';
import recordSlice from './record-slice';

const store = configureStore({
    reducer : {mu: mutateSlice.reducer, asset:assetSlice.reducer, record:recordSlice.reducer}
})

export default store;