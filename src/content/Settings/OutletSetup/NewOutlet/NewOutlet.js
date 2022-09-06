import React, {useState} from 'react'
import GPLayout from '../../../../components/GPLayout'
import {
    faArrowsUpDownLeftRight,
    faEllipsis,
    faPager,
    faPen,
    faPlus,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import GPIconButton from '../../../../components/GPIconButton'
import GPBlockButton from '../../../../components/GPBlockButton'
import './new-outlet.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Form, Tab, Tabs} from 'react-bootstrap'
import GPTextInput from '../../../../components/GPTextInput/GPTextInput'
import {Link, useNavigate} from 'react-router-dom'
import * as yup from 'yup'
import {routes} from '../../../../routes'
import {useForm} from 'react-hook-form'
import {
    requiredValidation,
    useYupValidationResolver,
} from '../../../../constant'
import GPTextarea from '../../../../components/GPTextarea'

import ImageP from '../../../../assets/img/imagePlaceholder.PNG'
import ImageP2 from '../../../../assets/img/imagePlaceholder2.PNG'
import GPModal from '../../../../components/GPModal/GPModal'

function NewOutlet() {
    const crumbs = [
        {
            text: 'Home',
            href: '/',
        },
        {
            text: 'Outlets',
            href: '/outlet-setup',
        },
        {
            text: 'New Outlet',
            href: '/new-outlet',
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

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <GPLayout breadIcon={faPager} crumbs={crumbs}>
            <div className="d-flex justify-content-start flex-wrap flex-md-nowrap align-items-center pt-3 py-4 mb-3 border-bottom">
                <GPIconButton
                    title="Save Changes"
                    gpClassName="cBtn px-4 py-2 bg-theme border-0 "
                />

                <GPBlockButton
                    gpClassName="cBtn bg-transparent py-2 text-theme px-4 mx-2"
                    title={'Save & Start New'}
                />
            </div>

            <div className="mb-5">
                <span className="dash-title">Outlet Details</span>
                <p className="dash-sub-title">Set the details of your outlet</p>
            </div>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit(handleForgotPassword)}
                className="needs-validation"
            >
                <div className="new-outlet">
                    <Tabs
                        defaultActiveKey="GeneralSettings"
                        id="uncontrolled-tab-example"
                        className=""
                    >
                        <Tab
                            eventKey="GeneralSettings"
                            title="General Settings"
                        >
                            <div className="gp-tab-content px-4 py-5">
                                <div class="row mb-3">
                                    <div className="col-7 mb-5">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="row mb-3">
                                                    <label
                                                        for="inputEmail3"
                                                        class="col-sm-3 col-form-label"
                                                    >
                                                        Name
                                                    </label>
                                                    <div class="col-sm-9">
                                                        <GPTextInput
                                                            type="text"
                                                            id="email"
                                                            name="email"
                                                            register={register}
                                                            errors={errors}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <label
                                                        for="inputEmail3"
                                                        class="col-sm-3 col-form-label"
                                                    >
                                                        Description
                                                    </label>
                                                    <div class="col-sm-9">
                                                        <GPTextarea
                                                            gpClassName={
                                                                'form-control'
                                                            }
                                                            rows={4}
                                                            placeholder="Description"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <img
                                                    width={165}
                                                    height={165}
                                                    src={ImageP}
                                                    className="rounded"
                                                />
                                            </div>

                                            <div className="col-md-11 ">
                                                <div className="outlet-dashed d-flex">
                                                    <img
                                                        width={40}
                                                        height={40}
                                                        src={ImageP2}
                                                        className="rounded"
                                                    />
                                                    <p className="text-p my-2 mx-3">
                                                        Logo: Drag image here or
                                                        <span className="text-theme">
                                                            upload
                                                        </span>{' '}
                                                        logo{' '}
                                                        <span className="text-theme">
                                                            here
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <p className="dash-sub-title">
                                            Supplier Outlet
                                        </p>

                                        <GPBlockButton
                                            gpClassName="cBtn bg-transparent py-2 text-theme w-180 px-4 mx-2"
                                            title={'Create Supplier Outlet'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="ContactDetails" title="Contact Details">
                            <div className="gp-tab-content px-4 py-5">
                                <div class="row mb-5">
                                    <div className="col-4">
                                        <span className="outlet-title">
                                            Delivery Address
                                        </span>
                                        <hr className="gp-divider" />

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-3 col-form-label"
                                            >
                                                Address
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextarea
                                                    gpClassName={'form-control'}
                                                    rows={2}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-3 col-form-label"
                                            >
                                                Postal Code
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="e.g. 256"
                                                    register={register}
                                                    errors={errors}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-3 col-form-label"
                                            >
                                                City
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="e.g. Mbale City"
                                                    register={register}
                                                    errors={errors}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-3 col-form-label"
                                            >
                                                Country
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="e.g. Uganda"
                                                    register={register}
                                                    errors={errors}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <span className="outlet-title">
                                            Outlet Responsible
                                        </span>
                                        <hr className="gp-divider" />

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-3 col-form-label"
                                            >
                                                Contact Name
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    register={register}
                                                    errors={errors}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-3 col-form-label"
                                            >
                                                Responsible Phone
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    register={register}
                                                    errors={errors}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-3 col-form-label"
                                            >
                                                Responsible Email
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    register={register}
                                                    errors={errors}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <span className="outlet-title">
                                            Procurement Responsible
                                        </span>
                                        <hr className="gp-divider" />

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-3 col-form-label"
                                            >
                                                Contact Name
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    register={register}
                                                    errors={errors}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-3 col-form-label"
                                            >
                                                Phone
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    register={register}
                                                    errors={errors}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-3 col-form-label"
                                            >
                                                Email
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    register={register}
                                                    errors={errors}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="CustomFields" title="Custom Fields">
                            <div className="gp-tab-content px-4 py-4">
                                <div class="row mb-5">
                                    <span className="custom-title">
                                        Custom Inventory fields
                                    </span>
                                    <div className="col-3 my-3">
                                        <div className="custom-fields mb-3 d-flex justify-content-between p-1">
                                            <span className="custom-name">
                                                Storage Location
                                            </span>
                                            <div className="d-flex justify-content-end py-1">
                                                <FontAwesomeIcon icon={faPen} />
                                                {/* <FontAwesomeIcon
                                                    className="text-theme mx-3 dropdown"
                                                    icon={faEllipsis}
                                                /> */}

                                                <ul
                                                    className="p-0 m-0 d-flex"
                                                    style={{listStyle: 'none'}}
                                                >
                                                    <li className="dropdown">
                                                        <a
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            href="#"
                                                            role="button"
                                                            aria-expanded="false"
                                                        >
                                                            <FontAwesomeIcon
                                                                className="text-theme mx-3 dropdown"
                                                                icon={
                                                                    faEllipsis
                                                                }
                                                            />
                                                        </a>
                                                        <ul className="dropdown-menu custom-dropdown">
                                                            <li>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to="#"
                                                                >
                                                                    <span className="delete-link">
                                                                        Delete
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <GPIconButton
                    icon={faPlus}
                    onClick={handleShow}
                    title="Add New Custom Field"
                    gpClassName="cBtn bg-transparent text-theme "
                />

                                        
                                        <GPModal
                                            title={
                                                'Add a custom field to Inventory'
                                            }
                                            handleClose={handleClose}
                                            onActionButtonClick={''}
                                            size={'lg'}
                                            show={show}
                                        >
                                            <div className="px-4 py-2 align-items-end">
                                                <div className="row mb-3">
                                                    <label
                                                        for="inputEmail3"
                                                        className="col-sm-3 col-form-label text-end"
                                                    >
                                                        Custom field name
                                                    </label>
                                                    <div className="col-sm-9 ">
                                                        <GPTextInput
                                                            type="text"
                                                            id="email"
                                                            name="email"
                                                            register={register}
                                                            errors={errors}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label
                                                        for="inputEmail3"
                                                        className="col-sm-3 col-form-label text-end"
                                                    >
                                                        Field type
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                        >
                                                            <option selected>
                                                                Open this select
                                                                menu
                                                            </option>
                                                            <option value="1">
                                                                One
                                                            </option>
                                                            <option value="2">
                                                                Two
                                                            </option>
                                                            <option value="3">
                                                                Three
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label
                                                        for="inputEmail3"
                                                        className="col-sm-3 col-form-label text-end"
                                                    >
                                                        Values
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <div className="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                aria-label="Dollar amount (with dot and two decimal places)"
                                                            />

                                                            <span
                                                                style={{
                                                                    border: '0.7px solid #7A7A7A',
                                                                    borderRadius:
                                                                        '3px',
                                                                }}
                                                                className="input-group-text bg-transparent mx-1"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faTrashCan
                                                                    }
                                                                />
                                                            </span>
                                                            <span
                                                                style={{
                                                                    border: '0.7px solid #7A7A7A',
                                                                    borderRadius:
                                                                        '3px',
                                                                }}
                                                                className="input-group-text bg-transparent mx-1"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faArrowsUpDownLeftRight
                                                                    }
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="input-group mt-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                aria-label="Dollar amount (with dot and two decimal places)"
                                                            />

                                                            <span
                                                                style={{
                                                                    border: '0.7px solid #7A7A7A',
                                                                    borderRadius:
                                                                        '3px',
                                                                }}
                                                                className="input-group-text bg-transparent mx-1"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faTrashCan
                                                                    }
                                                                />
                                                            </span>
                                                            <span
                                                                style={{
                                                                    border: '0.7px solid #7A7A7A',
                                                                    borderRadius:
                                                                        '3px',
                                                                }}
                                                                className="input-group-text bg-transparent mx-1"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faArrowsUpDownLeftRight
                                                                    }
                                                                />
                                                            </span>
                                                        </div>

                                                        <GPTextInput
                                                            type="text"
                                                            id="email"
                                                            gpClassName={'mt-3'}
                                                            name="email"
                                                            register={register}
                                                            errors={errors}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </GPModal>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Intergrations" title="Intergrations">
                            Intergrations
                        </Tab>
                        <Tab eventKey="Inventory" title="Inventory">
                            Inventory
                        </Tab>
                    </Tabs>
                </div>
            </Form>
        </GPLayout>
    )
}

export default NewOutlet
