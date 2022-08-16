import React, {useState} from 'react'
import GPLayout from '../../../components/GPLayout'
import {faGear, faPlus, faEllipsis} from '@fortawesome/free-solid-svg-icons'
import GPIconButton from '../../../components/GPIconButton'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import GPSearchInput from '../../../components/GPSearchInput'
import GPImportExportButton from '../../../components/GPImportExportButton'
import {Col, Form, Nav, Row, Tab, Tabs} from 'react-bootstrap'
import './employee-role.css'
import GPBlockButton from '../../../components/GPBlockButton'
import GPTextInput from '../../../components/GPTextInput/GPTextInput'
import {routes} from '../../../routes'
import {requiredValidation, useYupValidationResolver} from '../../../constant'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import GPRadioButton from '../../../components/GPRadioButton'

function EmployeeRole() {
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
                        <span className="e-heading mb-5">
                            Add New Employee Role
                        </span>
                        <hr />

                        <div className="container">
                            <div className="row row-cols-2">
                                <div className="col-3 text-start">
                                    <label htmlFor="name">
                                        Employee Role Title
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

                            <div className="row row-cols-2 mb-3">
                                <div className="col-3 text-start">
                                    <label htmlFor="name">Pay Basis</label>
                                </div>
                                <div className="col-9">
                                    <GPRadioButton
                                        gpType="radio"
                                        gpTitle="Hourly"
                                        id="hourly"
                                        name="hourly"
                                    />
                                    <GPRadioButton
                                        gpType="radio"
                                        id="salary"
                                        name="salary"
                                        gpTitle="Salary"
                                    />
                                </div>
                            </div>
                            <div className="row row-cols-2 mb-3">
                                <div className="col-3 text-start">
                                    <label htmlFor="name">Default Pay</label>
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
                            <div className="row row-cols-2 mb-3">
                                <div className="col-3 text-start">
                                    <label htmlFor="name">Pay Basis</label>
                                </div>
                                <div className="col-9">
                                    <GPRadioButton
                                        gpType="radio"
                                        gpTitle="Hourly"
                                        id="hourly"
                                        name="hourly"
                                    />
                                    <GPRadioButton
                                        gpType="radio"
                                        id="salary"
                                        name="salary"
                                        gpTitle="Salary"
                                    />
                                </div>
                            </div>
                            <div className="row row-cols-2 mb-3">
                                <div className="col-3 text-start">
                                    <label htmlFor="name">Cashier</label>
                                </div>
                                <div className="col-9">
                                    <GPRadioButton
                                        gpType="radio"
                                        gpTitle="Yes"
                                        id="yes"
                                        name="yes"
                                    />
                                    <GPRadioButton
                                        gpType="radio"
                                        id="no"
                                        name="no"
                                        gpTitle="No"
                                    />
                                </div>
                            </div>

                            <div className="row row-cols-2 mb-3">
                                <div className="col-3 text-start">
                                    <span className="e-heading mb-5">
                                        User Permisions
                                    </span>
                                    <p className="text-theme ">
                                        Permisions Guide
                                    </p>
                                </div>
                                <div className="col-9">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="text-bold table-head-empl"
                                                >
                                                    Permission
                                                </th>
                                                <th scope="col text-bold table-head-empl">
                                                    Enable?
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="">
                                                    1. POS Access
                                                </th>
                                                <td>
                                                    <GPRadioButton
                                                        gpType="checkbox"
                                                        id="no"
                                                        name="no"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Table service Mode</td>
                                                <td>
                                                    <GPRadioButton
                                                        gpType="checkbox"
                                                        id="no"
                                                        name="no"
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Cash Drawer Access</td>
                                                <td>
                                                    <GPRadioButton
                                                        gpType="checkbox"
                                                        id="no"
                                                        name="no"
                                                        checked={true}
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Reports</td>
                                                <td>
                                                    <GPRadioButton
                                                        gpType="checkbox"
                                                        id="no"
                                                        name="no"
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row" className="">
                                                    1. Dashboard
                                                </th>
                                                <td>
                                                    <GPRadioButton
                                                        gpType="checkbox"
                                                        id="no"
                                                        name="no"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Void Items</td>
                                                <td>
                                                    <GPRadioButton
                                                        gpType="checkbox"
                                                        id="no"
                                                        name="no"
                                                    />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Discounts</td>
                                                <td>
                                                    <GPRadioButton
                                                        gpType="checkbox"
                                                        id="no"
                                                        name="no"
                                                        checked={true}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </GPLayout>
    )
}

export default EmployeeRole
