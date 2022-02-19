import {createSlice} from '@reduxjs/toolkit'
import {loginUser} from '../actions'
interface LoginInterface {
    response: object
    error: object
    loading: boolean
}
const initialState: LoginInterface = {
    response: {},
    error: {},
    loading: false,
}
export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, {payload, meta, type}) => {
            if (payload.data) {
                state.response = payload.data
            } else if (payload.errors) {
                state.error = payload.errors
            }
            state.loading = false
        })
        builder.addCase(loginUser.pending, (state, {payload, meta, type}) => {
            state.loading = true
        })
    },
})

export default loginSlice.reducer
