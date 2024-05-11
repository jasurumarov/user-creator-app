import { createSlice } from "@reduxjs/toolkit";

export const selectedUsersSlice = createSlice({
    name: "selected users",
    initialState: {
        value: []
    },
    reducers: {
        toggleSelect(state, action){
            let index = state.value?.findIndex(el => el.id === action.payload.id)
            if (index < 0) {
                state.value = [ ...state.value, action.payload ]
            } else {
                state.value = state.value?.filter(el => el.id !== action.payload.id)
            }
        }
    }
})

export const { toggleSelect } = selectedUsersSlice.actions
export default selectedUsersSlice.reducer