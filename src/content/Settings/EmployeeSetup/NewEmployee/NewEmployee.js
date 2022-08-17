import React, {useState} from 'react'
import GPLayout from '../../../../components/GPLayout'
import {faGear, faPlus, faEllipsis} from '@fortawesome/free-solid-svg-icons'
import GPIconButton from '../../../../components/GPIconButton'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import GPSearchInput from '../../../../components/GPSearchInput'
import GPImportExportButton from '../../../../components/GPImportExportButton'
import {Col, Form, Nav, Row, Tab, Tabs} from 'react-bootstrap'

import GPBlockButton from '../../../../components/GPBlockButton'
import GPTextInput from '../../../../components/GPTextInput/GPTextInput'
import {routes} from '../../../../routes'
import {
    requiredValidation,
    useYupValidationResolver,
} from '../../../../constant'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import GPRadioButton from '../../../../components/GPRadioButton'
import {useNavigate} from 'react-router-dom'
import './new-employee.css'
import GPTextarea from '../../../../components/GPTextarea'
import GPSelectInput from '../../../../components/GPSelectInput.js/GPSelectInput'

function NewEmployee() {
    const crumbs = [
        {
            text: 'Home',
            href: '/',
        },
        {
            text: 'Employee Roles: New',
            href: '/employee-role',
        },
    ]

    const employeeRoles = [
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
    const navigate = useNavigate()
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
        <GPLayout breadIcon={faGear} crumbs={crumbs}>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit(handleForgotPassword)}
                className="needs-validation"
            >
                <div className="d-flex justify-content-start flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3  border-bottom">
                    <h1 className="h2"></h1>

                    <GPIconButton
                        title="Save Changes"
                        gpClassName="cBtn px-4 bg-theme border-0 "
                    />

                    <GPBlockButton
                        gpClassName="cBtn bg-transparent text-theme px-4 mx-2"
                        title={'Save & Start New'}
                    />
                </div>

                <div className="row">
                    <div className="col-md-8 offset-md-3">
                        <span className="e-heading mb-5">Add New Employee</span>
                        <hr />

                        <div className="container">
                            <div class="row mb-3">
                                <div className="col-6">
                                    <div className="row">
                                        <label
                                            for="inputEmail3"
                                            class="col-sm-4 col-form-label"
                                        >
                                            Fist Name
                                        </label>
                                        <div class="col-sm-8">
                                            <GPTextInput
                                                type="text"
                                                id="email"
                                                name="email"
                                                register={register}
                                                errors={errors}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <label
                                            for="inputEmail3"
                                            class="col-sm-4 col-form-label"
                                        >
                                            Last Name
                                        </label>
                                        <div class="col-sm-8">
                                            <GPTextInput
                                                type="text"
                                                id="email"
                                                name="email"
                                                register={register}
                                                errors={errors}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div className="col-6">
                                    <div className="row">
                                        <label
                                            for="inputEmail3"
                                            class="col-sm-4 col-form-label"
                                        >
                                            UserName
                                        </label>
                                        <div class="col-sm-8">
                                            <GPTextInput
                                                type="text"
                                                id="email"
                                                name="email"
                                                register={register}
                                                errors={errors}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <label
                                            for="inputEmail3"
                                            class="col-sm-4 col-form-label"
                                        >
                                            Employee Role
                                        </label>
                                        <div class="col-sm-8">
                                            <GPSelectInput
                                                label=""
                                                placeholder="employeeRoles"
                                                name="employeeRoles"
                                                arrayOfData={employeeRoles}
                                                className="border border_color mb-3 form-select"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row row-cols-2 mb-3">
                                <div className="col-3 text-start">
                                    <label htmlFor="name">Pay</label>
                                </div>
                                <div className="col-9">
                                    <div class="input-group">
                                        <div class="input-group-text">USh</div>
                                        <GPTextInput
                                            type="text"
                                            id="email"
                                            name="email"
                                            register={register}
                                            errors={errors}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row row-cols-2">
                                <div className="col-3 text-start">
                                    <label htmlFor="name">Passcode *</label>
                                    <small className="fz-12">
                                        Enter a 4 digit numerical code that your
                                        employee will enter to log into your POS
                                    </small>
                                </div>
                                <div className="col-9">
                                    <GPTextInput
                                        type="text"
                                        id="email"
                                        name="email"
                                        register={register}
                                        errors={errors}
                                        gpClassName="mb-3"
                                    />
                                </div>
                            </div>

                            <div className="row row-cols-2">
                                <div className="col-3 text-start">
                                    <label htmlFor="name">
                                        Email Address *
                                    </label>
                                </div>
                                <div className="col-9">
                                    <GPTextInput
                                        type="email"
                                        id="email"
                                        name="email"
                                        register={register}
                                        errors={errors}
                                        gpClassName="mb-3"
                                    />
                                </div>
                            </div>

                            <div className="row row-cols-2">
                                <div className="col-3 text-start">
                                    <label htmlFor="name">
                                        Tax Identificaion Number
                                    </label>
                                </div>
                                <div className="col-9">
                                    <GPTextInput
                                        type="text"
                                        id="email"
                                        name="email"
                                        register={register}
                                        errors={errors}
                                        gpClassName="mb-3"
                                    />
                                </div>
                            </div>

                            <div className="row row-cols-2">
                                <div className="col-3 text-start">
                                    <label htmlFor="name">
                                        National ID Number*
                                    </label>
                                </div>
                                <div className="col-9">
                                    <GPTextInput
                                        type="text"
                                        id="email"
                                        name="email"
                                        register={register}
                                        errors={errors}
                                        gpClassName="mb-3"
                                    />
                                </div>
                            </div>

                            <div className="row row-cols-2">
                                <div className="col-3 text-start">
                                    <label htmlFor="name">Address</label>
                                </div>
                                <div className="col-9">
                                    <GPTextarea
                                        gpClassName={'form-control'}
                                        rows={4}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </GPLayout>
    )
}

export default NewEmployee
