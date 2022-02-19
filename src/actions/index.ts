import {client} from '../utils/ApolloClient'
import {
    REGISTER_USER,
    LOGIN_USER,
    REQUEST_RESET_LINK,
} from '../gql/registerUser'
import {createAsyncThunk} from '@reduxjs/toolkit'
/**
 * signup users with various user information
 */
export const registerUserInfo = createAsyncThunk(
    'users/register',
    async (user: object, thunkApi) => {
        const {data, errors} = await client.mutate({
            mutation: REGISTER_USER,
            variables: {input: user},
            errorPolicy: 'all',
        })
        if (errors) {
            return {errors: errors}
        } else {
            return {data: data}
        }
    }
)
/**
 * function for sigin in users
 */
export const loginUser = createAsyncThunk(
    'users/signIn',
    async (user: object, thunkApi) => {
        const {data, errors, loading} = await client.query({
            query: LOGIN_USER,
            variables: {input: user},
            errorPolicy: 'all',
        })
        if (errors) {
            return {errors: errors[0]}
        } else {
            return {data: data}
        }
    }
)

/**
 * function for sending password resetlink
 */

export const sendPasswordResetLink = createAsyncThunk(
    'users/resetPassword',
    async (userInput: object, thunkApi) => {
        const {data, errors, loading} = await client.query({
            query: REQUEST_RESET_LINK,
            variables: {input: userInput},
            errorPolicy: 'all',
        })
        if (errors) {
            return {errors: errors[0]}
        }
        return data
    }
)
