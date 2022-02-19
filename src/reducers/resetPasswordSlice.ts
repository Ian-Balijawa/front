import {createSlice} from '@reduxjs/toolkit'
import {sendPasswordResetLink} from '../actions'
type PasswordResetObject = {
    response: object | null
    error: object | null
    loading: boolean
}
//initial state for password reset slice
const initialState: PasswordResetObject = {
    response: null,
    error: null,
    loading: false,
}
const resetPasswordSlice = createSlice({
    name: 'ResetPassword',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(
            sendPasswordResetLink.fulfilled,
            (state, {payload, meta, type}) => {
                if (payload.errors) {
                    state.error = payload.errors
                }
                state.response = payload.sendPasswordResetToken
                state.loading = false
            }
        )
        builder.addCase(
            sendPasswordResetLink.pending,
            (state, {payload, meta, type}) => {
                state.loading = true
            }
        )
    },
})

export default resetPasswordSlice.reducer
