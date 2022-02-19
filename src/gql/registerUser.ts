import {gql} from '@apollo/client'
import {DocumentNode} from 'graphql'
export const REGISTER_USER: DocumentNode = gql`
    mutation createUserAccount($input: UserInput) {
        createUserAccount(input: $input) {
            message
            status
            success
            User {
                active
                password
                businessName
                businessName
                password
                active
            }
        }
    }
`
export const LOGIN_USER: DocumentNode = gql`
    query Query($input: LoginInput) {
        loginUser(input: $input) {
            token
            message
            status
            success
        }
    }
`
export const REQUEST_RESET_LINK: DocumentNode = gql`
    query SendPasswordResetToken($input: PasswordResetInput) {
        sendPasswordResetToken(input: $input) {
            status
            message
            success
        }
    }
`
export const CHANGE_PASSWORD: DocumentNode = gql`
    mutation ChangePassword($input: ChangePasswordInput) {
        changePassword(input: $input) {
            status
            message
            success
        }
    }
`
