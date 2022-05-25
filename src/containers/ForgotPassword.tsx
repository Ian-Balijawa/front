// import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
// import GPButton from '../components/GPButton'
// import {useForm, SubmitHandler} from 'react-hook-form'
// import {useDispatch, useSelector} from 'react-redux'
// import { GPLogo } from '../components/GPIconsBase'
// import {sendPasswordResetLink} from '../actions'
// import {RootState} from '../store'
// // import {} from '../components/GPLoader'
// // import {} from '../components/GPMessage'
// type PasswordResetInput = {
//     emailAddress: string
// }
// const PasswordReset = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: {errors},
//     } = useForm<PasswordResetInput>()
//     const dispatch = useDispatch()
//     const {response, error, loading}: any = useSelector(
//         (state: RootState) => state.resetPassword
//     )
//     const sendPasswordResetMail: SubmitHandler<PasswordResetInput> = data => {
//         const {emailAddress}: PasswordResetInput = data
//         dispatch(sendPasswordResetLink({emailAddress}))
//     }

// }
// export default PasswordReset

import React from 'react'

function ForgotPassword() {
  return (
    <div>ForgotPassword</div>
  )
}

export default ForgotPassword