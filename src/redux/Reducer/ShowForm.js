import { createSlice } from '@reduxjs/toolkit'

export const ShowForm = createSlice({
    name: 'form',
    initialState: {
        showForm: false,
        showUpdateForm: false,
        id: ""
    },
    reducers: {
        setShowForm: (state) => {
            state.showForm = !state.showForm;
        },
        setShowUpdateForm: (state, idUpdate) => {
            state.showUpdateForm = !state.showUpdateForm;
            state.id = idUpdate.payload

        },
    },
})

// Action creators are generated for each case reducer function
export const { setShowForm, setShowUpdateForm } = ShowForm.actions;

export default ShowForm.reducer;