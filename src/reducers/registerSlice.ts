import {createSlice} from '@reduxjs/toolkit'
import {registerUserInfo} from '../actions'
interface initialStateInterface {
    response: object
    loading: boolean
    error: object
}
const initialState: initialStateInterface = {
    response: {},
    loading: false,
    error: {},
}
export const registerSlice = createSlice({
    name: 'registerSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(
            registerUserInfo.fulfilled,
            (state, {payload, meta, type}) => {
                if (payload.errors) {
                    state.error = payload.errors[0]
                } else if (payload.data) {
                    state.response = payload['data']
                }
                state.loading = false
            }
        )
        builder.addCase(registerUserInfo.pending, (state, action) => {
            state.loading = true
        })
    },
})

export default registerSlice.reducer
