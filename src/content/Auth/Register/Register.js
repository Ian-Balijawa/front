import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {requiredValidation, useYupValidationResolver} from '../../../constant'
import {routes} from '../../../routes'
import Logo from '../../../assets/LogoDark.svg'
import './register.css'
import GPTextInput from '../../../components/GPTextInput/GPTextInput'
import GPSelectInput from '../../../components/GPSelectInput.js/GPSelectInput'
import GPPhoneInput from '../../../components/GPPhoneInput/GPPhoneInput'
import CountrySelect from 'react-bootstrap-country-select'
import {Form} from 'react-bootstrap'
import GPBlockButton from '../../../components/GPBlockButton'
function App() {
    const [validated, setValidated] = useState(false)

    const validationSchema = yup.object({
        email: yup.string().email().required(`Email ${requiredValidation}`),
        fullname: yup
            .string()
            .required(`Full Name ${requiredValidation}`)
            .min(8)
            .max(25),
        businessname: yup
            .string()
            .required(`Business Name ${requiredValidation}`)
            .min(4)
            .max(50),
        password: yup
            .string()
            .required(`Password ${requiredValidation}`)
            .min(8)
            .max(50),
    })

    const resolver = useYupValidationResolver(validationSchema)
    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm({resolver})

    const handleRegister = async data => {
        console.log('login form data =>', data)
        try {
            const res = await fetch(routes.register, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            const resData = await res.json()
            console.log('handleRegister data = ', resData)
        } catch (error) {
            console.log(error)
        }
        setValidated(true)
    }

    console.log('errors => ', errors)

    const occupation = [
        {
            id: '1 - Jerry',
            name: 'Name Of Occuaption',
        },
        {
            id: '2 - Elaine',
            name: 'Elaine',
        },
        {
            id: '3 - Kramer',
            name: 'Kramer',
        },
        {
            id: '4 - George',
            name: 'George',
        },
    ]

    const business = [
        {
            id: '1',
            name: 'Business type',
        },
        {
            id: '2 - Elaine',
            name: 'Elaine',
        },
        {
            id: '3 - Kramer',
            name: 'Kramer',
        },
        {
            id: '4 - George',
            name: 'George',
        },
    ]

    return (
        <div className="auth-bg">
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-6">
                            <div
                                className="card text-dark bg-transparent border-0  mb-5"
                                // style={{ width: "450px" }}
                            >
                                <div className="card-body py-4">
                                    <div className="text-center">
                                        <img
                                            src={Logo}
                                            width="220"
                                            className="img-fluid"
                                            alt="logo"
                                        />
                                        <hr className="divider" />
                                    </div>
                                    <h3 className="register_header">
                                        Let's create your account.
                                    </h3>
                                    <span className="text-dark-50 login__text">
                                        Explore the world’s most powerful <br />{' '}
                                        POS for your business.
                                    </span>
                                    <br />
                                    <Form
                                        noValidate
                                        validated={validated}
                                        onSubmit={handleSubmit(handleRegister)}
                                        className="needs-validation mt-5"
                                    >
                                        <GPTextInput
                                            type="text"
                                            id="fullname"
                                            name="fullname"
                                            placeholder="Full Name"
                                            register={register}
                                            errors={errors}
                                            gpClassName="mb-3"
                                        />

                                        <GPTextInput
                                            type="text"
                                            id="email"
                                            name="email"
                                            placeholder="Email Address"
                                            register={register}
                                            errors={errors}
                                            gpClassName="mb-3"
                                        />

                                        {/* <GPPhoneInput arrayOfData={ctycode} /> */}
                                        <GPTextInput
                                            type="text"
                                            id="businessname"
                                            name="businessname"
                                            placeholder="Business name"
                                            register={register}
                                            errors={errors}
                                            gpClassName="mb-3"
                                        />
                                        <GPPhoneInput/>
                                        <GPTextInput
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            register={register}
                                            errors={errors}
                                            gpClassName="mb-3"
                                        />

                                        <GPSelectInput
                                            label=""
                                            placeholder="occupation"
                                            name="occupation"
                                            arrayOfData={occupation}
                                            className="border border_color mb-3 form-select"
                                        />

                                        <GPSelectInput
                                            label=""
                                            placeholder="business"
                                            name="business"
                                            arrayOfData={business}
                                            className="border border_color mb-3 form-select"
                                        />

                                        <div className="d-flex justify-content-between mt-5">
                                            <GPBlockButton
                                                type="submit"
                                                gpClassName="bg-theme outline-dark px-5 bg-theme border-0 text-white"
                                                title="Sign Up"
                                            />

                                            <span>
                                                Already have an account?{' '}
                                                <Link
                                                    to="/login"
                                                    className="my-3"
                                                >
                                                    Sign In
                                                </Link>
                                            </span>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App
