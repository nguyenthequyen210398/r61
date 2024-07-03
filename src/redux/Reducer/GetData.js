import { createSlice } from '@reduxjs/toolkit'


export const GetData = createSlice({
    name: 'data',
    initialState: {
        account: ""
    },
    reducers: {
        setAccount: (state, listAccount) => {
            state.data = listAccount.payload;
        },

    },
})

// Action creators are generated for each case reducer function
export const { setAccount } = GetData.actions;

export default GetData.reducer;