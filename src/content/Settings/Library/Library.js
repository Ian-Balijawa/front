import React, {useState} from 'react'
import GPLayout from '../../../components/GPLayout'
import {
    faArrowsUpDownLeftRight,
    faArrowUpRightFromSquare,
    faBars,
    faChevronRight,
    faEllipsis,
    faFaceGrinWide,
    faGrinBeamSweat,
    faInr,
    faPager,
    faPen,
    faPenToSquare,
    faPlus,
    faTrashCan,
    faUserPen,
} from '@fortawesome/free-solid-svg-icons'
import GPIconButton from '../../../components/GPIconButton'
import GPBlockButton from '../../../components/GPBlockButton'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Form, Tab, Tabs} from 'react-bootstrap'
import GPTextInput from '../../../components/GPTextInput/GPTextInput'
import {Link, Routes, useNavigate} from 'react-router-dom'
import * as yup from 'yup'
import {routes} from '../../../routes'
import {useForm} from 'react-hook-form'
import {requiredValidation, useYupValidationResolver} from '../../../constant'
import GPTextarea from '../../../components/GPTextarea'
import {ImagePlaceholder} from '../../../components/GPIcon'

import ImageP from '../../../assets/img/imagePlaceholder.PNG'
import ImageP2 from '../../../assets/img/imagePlaceholder2.PNG'
import GPModal from '../../../components/GPModal/GPModal'
import './library.css'
import GPRadioButton from '../../../components/GPRadioButton'

function Library() {
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
    const [showSub, setShowSub] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleShowSub = () => setShowSub(true)
    const handleCloseSub = () => setShowSub(false)

    return (
        <GPLayout breadIcon={faPager} crumbs={crumbs}>
            <div className="my-5">
                <span className="dash-title">Library settings</span>
                <p className="dash-sub-title">
                    Set library specific settings here. Variables added on this
                    page are used throught the whole system.{' '}
                </p>
            </div>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit(handleForgotPassword)}
                className="needs-validation "
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
                                    <div className="col-3 mb-5 mx-3">
                                        <div className="lib-bg-ffe">
                                            Inventory
                                        </div>
                                        <GPRadioButton
                                            gpType="checkbox"
                                            id="Blindcount"
                                            name="Blind count"
                                            label="Blind count"
                                        />

                                        <p className="mt-2">
                                            <small>
                                                Blind count means that
                                                theoretical stock will be hidden
                                                when counting , so the user does
                                                not see what the stock should
                                                be.
                                            </small>
                                        </p>
                                    </div>

                                    <div className="col-3 mb-5 mx-3">
                                        <div className="lib-bg-ffe">
                                            Default currency
                                        </div>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option selected>USh</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>

                                        <small>Set the efault currency</small>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab
                            eventKey="CostingDefaults"
                            title="Costing Defaults(Foods & Production)"
                        >
                            <div className="gp-tab-content px-4 py-5">
                                <div class="row mb-5">
                                    Costing Defaults(Foods & Production)
                                </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey="SupplierIntergrations"
                            title="Supplier Intergrations"
                        >
                            <div className="gp-tab-content px-4 py-5">
                                <div class="row mb-5">
                                    SupplierIntergrations
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Categories" title="Categories">
                            <div className="gp-tab-content px-4 py-5">
                                <div class="row mb-5">
                                    <div className="col-6 px-4">
                                        <span className="lib-title">
                                            Ingredients Categories
                                        </span>

                                        <table
                                            className="table table-sm table-striped mt-3"
                                            style={{width: '100%'}}
                                        >
                                            <thead>
                                                <tr className="lib-table lib-table-row-title">
                                                    <th
                                                        scope="col"
                                                        style={{width: '60%'}}
                                                    >
                                                        Name
                                                    </th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    data-toggle="collapse"
                                                    className="accordion-toggle"
                                                    data-target="#demo10"
                                                >
                                                    <th
                                                        scope="row"
                                                        className="accordion-item"
                                                    >
                                                        <span
                                                            className="accordion-button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseOne"
                                                            aria-expanded="false"
                                                            aria-controls="flush-collapseOne"
                                                        >
                                                            <FontAwesomeIcon
                                                                style={{
                                                                    color: '#3E4347',
                                                                }}
                                                                icon={
                                                                    faChevronRight
                                                                }
                                                                className="mx-2"
                                                            />
                                                            <span className="table-tr-title ">
                                                                Desserts
                                                            </span>
                                                        </span>
                                                    </th>

                                                    <td>
                                                        <FontAwesomeIcon
                                                            icon={faPen}
                                                            className="mx-2"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faTrashCan}
                                                            className="mx-2 theme-b-r"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faArrowsUpDownLeftRight
                                                            }
                                                            className="mx-2 theme-b-r"
                                                        />
                                                    </td>
                                                </tr>

                                                <tr
                                                    id="flush-collapseOne"
                                                    className=" accordion-collapse collapse"
                                                    aria-labelledby="flush-headingOne"
                                                    data-bs-parent="#accordionFlushExample"
                                                >
                                                    <td>Wine</td>
                                                    <td>
                                                        <FontAwesomeIcon
                                                            icon={faPen}
                                                            className="mx-2"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faTrashCan}
                                                            className="mx-2 theme-b-r"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faArrowsUpDownLeftRight
                                                            }
                                                            className="mx-2 theme-b-r"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="d-flex justify-content-start flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
                                            <GPIconButton
                                                icon={faPlus}
                                                onClick={handleShow}
                                                title="Add Category"
                                                gpClassName="cBtn bg-transparent text-theme mx-2"
                                            />

                                            <GPIconButton
                                                icon={faPlus}
                                                onClick={handleShowSub}
                                                title="Add Sub Category"
                                                gpClassName="cBtn bg-transparent text-theme mx-2"
                                            />

                                            <GPIconButton
                                                title="Edit"
                                                gpClassName="px-4 bg-transparent border-1 text-dark border-secondary"
                                            />
                                        </div>
                                    </div>

                                    <GPModal
                                        title={'Add New Sub Category'}
                                        handleClose={handleCloseSub}
                                        onActionButtonClick={''}
                                        size={'lg'}
                                        show={showSub}
                                    >
                                        <div className="px-4 py-2 align-items-end">
                                            <div className="row mb-3">
                                                <label
                                                    for="inputEmail3"
                                                    className="col-sm-3 col-form-label text-end"
                                                >
                                                    Category Name
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
                                                    Category
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
                                        </div>
                                    </GPModal>

                                    <GPModal
                                        title={'Add New Item Category'}
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
                                                    Category Name
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
                                        </div>
                                    </GPModal>

                                    <div className="col-6 px-4">
                                        <span className="lib-title">
                                            Recipe and Menu Categories
                                        </span>

                                        <table
                                            className="table table-sm table-striped mt-3"
                                            style={{width: '100%'}}
                                        >
                                            <thead>
                                                <tr className="lib-table lib-table-row-title">
                                                    <th
                                                        scope="col"
                                                        style={{width: '60%'}}
                                                    >
                                                        Name
                                                    </th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="2">
                                                        <span className="table-no-records text-center">
                                                            No Categories found
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </Form>
        </GPLayout>
    )
}

export default Library
