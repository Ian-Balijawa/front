import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {requiredValidation, useYupValidationResolver} from '../../../constant'
import {routes} from '../../../routes'
import './forgot-password.css'
import GPCardAuthHeader from '../../../components/GPCardAuthHeader'
import GPTextInput from '../../../components/GPTextInput/GPTextInput'
import GPBottomLinks from '../../../components/GPBottomLinks'
import GPBlockButton from '../../../components/GPBlockButton'
import {Form} from 'react-bootstrap'

function ForgotPassword() {
    const [validated, setValidated] = useState(false)

    const validationSchema = yup.object({
        email: yup.string().email().required(`Email ${requiredValidation}`),
    })

    const resolver = useYupValidationResolver(validationSchema)
    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm({resolver})

    const handleForgotPassword = async data => {
        console.log('forgotpassord form data =>', data)
        try {
            const res = await fetch(routes.forgotpassord, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            const resData = await res.json()
            console.log('handleForgotPassword data = ', resData)
        } catch (error) {
            console.log(error)
        }
        setValidated(true)
    }

    console.log('errors => ', errors)

    return (
        <div className="auth-bg">
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-4">
                            <div className="card bg-white text-dark goldpos__logo  mb-5">
                                <div className="card-body py-4">
                                    <GPCardAuthHeader title="Forgot Password?" />
                                    <span>
                                        Enter your email and we'll email you{' '}
                                        <br /> a link to reset your password.
                                    </span>
                                    <br />
                                    <br />
                                    <Form
                                        noValidate
                                        validated={validated}
                                        onSubmit={handleSubmit(
                                            handleForgotPassword
                                        )}
                                        className="needs-validation"
                                    >
                                        <GPTextInput
                                            type="email"
                                            id="email"
                                            name="email"
                                            label="Email Address"
                                            register={register}
                                            errors={errors}
                                            gpClassName="mb-3"
                                        />

                                        <div className="row">
                                            <div className="col-6">
                                                <GPBlockButton
                                                    title="Back to Sign In"
                                                    gpClassName="btn-light border p-2"
                                                />
                                            </div>
                                            <div className="col-6 text-white">
                                                <GPBlockButton
                                                    title="Reset Password"
                                                    type="submit"
                                                    gpClassName="btn outline-dark bg-theme border-0
                      text-white forgotBtn p-2 btn btn-primary"
                                                />
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                            <GPBottomLinks />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForgotPassword
