import {configureStore} from '@reduxjs/toolkit'
import register from './reducers/registerSlice'
import login from './reducers/loginSlice'
import resetPassword from './reducers/resetPasswordSlice'

export const store = configureStore({
    reducer: {register: register, login: login, resetPassword: resetPassword},
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
