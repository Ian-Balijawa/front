import './new-ingredient.css'

import React, {useState} from 'react'
import GPLayout from '../../../../components/GPLayout'
import {
    faArrowsUpDownLeftRight,
    faArrowUpRightFromSquare,
    faBars,
    faChevronRight,
    faEllipsis,
    faEye,
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
import GPIconButton from '../../../../components/GPIconButton'
import GPBlockButton from '../../../../components/GPBlockButton'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Form, Tab, Tabs} from 'react-bootstrap'
import GPTextInput from '../../../../components/GPTextInput/GPTextInput'
import {Link, Routes, useNavigate} from 'react-router-dom'
import * as yup from 'yup'
import {routes} from '../../../../routes'
import {useForm} from 'react-hook-form'
import {
    requiredValidation,
    useYupValidationResolver,
} from '../../../../constant'
import GPTextarea from '../../../../components/GPTextarea'
import {ImagePlaceholder} from '../../../../components/GPIcon'

import ImageP from '../../../../assets/img/imagePlaceholder.PNG'
import ImageP2 from '../../../../assets/img/imagePlaceholder2.PNG'
import GPModal from '../../../../components/GPModal/GPModal'
import GPTable from '../../../../components/GPTable'
import GPRadioButton from '../../../../components/GPRadioButton'

function NewIngredient() {
    const crumbs = [
        {
            text: 'Inventory',
            href: '/inventory',
        },
        {
            text: 'Ingredients: New',
            href: '#',
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

    const gpColumns = [
        {title: 'Package Type', field: 'PackageType'},
        {title: 'Content', field: 'Content'},
        {title: 'Storable', field: 'Storable'},
        {title: 'Avg Price', field: 'avgPrice'},
        {title: 'Base Price', field: 'basePrice'},
        {
            title: 'Supplier',
            field: 'Supplier',
            render: rowData => (
                <div className="d-flex justity-content-between">
                    <small>
                        <FontAwesomeIcon
                            icon={faPlus}
                            className="mx-2 theme-b-r"
                        />
                    </small>
                </div>
            ),
        },
        {
            title: 'Actions',
            field: 'ordering',
            render: rowData => (
                <div className="d-flex justity-content-between">
                    <small>
                        <FontAwesomeIcon
                            icon={faPen}
                            className="mx-2 theme-b-r"
                        />
                    </small>
                    <small>
                        <FontAwesomeIcon
                            icon={faTrashCan}
                            className="mx-2 theme-b-r"
                        />
                    </small>
                </div>
            ),
        },
    ]

    const gpData = [
        {
            PackageType: 'Bottle',
            Content: '0.51 l',
            Storable: 'Rice',
            avgPrice: 'Uhs 5,000',
            basePrice: '0',
            Supplier: 0,
        },
    ]

    const gpColumns2 = () => {
        return (
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
                <span className="new-ing-title">Package Information</span>

                <GPIconButton
                    icon={faPlus}
                    onClick={() => {
                        navigate('/inventory/ingredients/new')
                    }}
                    title="Add New Ingredient"
                    gpClassName="cBtn bg-transparent text-theme "
                />
            </div>
        )
    }

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
                <span className="dash-title mb-3">Create a new Ingredient</span>

                <div className="row mb-3 mt-3 d-flex justify-content-start">
                    <label
                        for="inputEmail3"
                        class="col-md-2 col-form-label text-start"
                    >
                        Product Name
                    </label>
                    <div class="col-md-3">
                        <GPTextInput
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Product Name"
                            register={register}
                            errors={errors}
                        />
                    </div>
                </div>
            </div>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit(handleForgotPassword)}
                className="needs-validation"
            >
                <div className="new-outlet">
                    <Tabs
                        defaultActiveKey="General"
                        id="uncontrolled-tab-example"
                        className=""
                    >
                        <Tab eventKey="General" title="General">
                            <div className="gp-tab-content px-4 py-5">
                                <div class="row mb-5">
                                    <div className="col-4">
                                        <span className="outlet-title">
                                            Identification
                                        </span>
                                        <hr className="gp-divider" />

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-3 col-form-label"
                                            >
                                                EAN/UPC
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Barcode"
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
                                                System ID
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    disabled={true}
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
                                                Custom ID
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Custom ID"
                                                    register={register}
                                                    errors={errors}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <span className="outlet-title">
                                            Specifications
                                        </span>
                                        <hr className="gp-divider" />

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-3 col-form-label"
                                            >
                                                Brand
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    placeholder="Brand"
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
                                                Storage Instructions
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Storage Instructions"
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
                                                    gpClassName={'form-control'}
                                                    rows={2}
                                                    placeholder="Description"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <span className="outlet-title">
                                            Used In
                                        </span>
                                        <hr className="gp-divider" />

                                        <p>
                                            No recipes found using this
                                            ingredient
                                        </p>
                                    </div>

                                    <div className="col-4 mt-4">
                                        <span className="outlet-title">
                                            Categorization
                                        </span>
                                        <hr className="gp-divider" />

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-3 col-form-label"
                                            >
                                                Accounting Category
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Accounting Category"
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
                                                Article Type
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Article  Type"
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
                                                Category
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Category"
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
                                                Subcategory
                                            </label>
                                            <div class="col-sm-9">
                                                <GPTextInput
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Subcategory"
                                                    register={register}
                                                    errors={errors}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4 mt-4">
                                        <span className="outlet-title">
                                            Categorization
                                        </span>
                                        <hr className="gp-divider" />

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-4 col-form-label"
                                            >
                                                Created by
                                            </label>
                                            <div class="col-sm-8">-</div>
                                        </div>

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-4 col-form-label"
                                            >
                                                Created on
                                            </label>
                                            <div class="col-sm-8">-</div>
                                        </div>

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-4 col-form-label"
                                            >
                                                Last modified by
                                            </label>
                                            <div class="col-sm-8">-</div>
                                        </div>

                                        <div className="row mb-3">
                                            <label
                                                for="inputEmail3"
                                                class="col-sm-4 col-form-label"
                                            >
                                                Last modified on
                                            </label>
                                            <div class="col-sm-8">-</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab
                            eventKey="PackagePricing"
                            title="Package and Pricing"
                        >
                            <div className="gp-tab-content px-4 py-5">
                                <div class="row mb-5">
                                    <div className="col-6">
                                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3">
                                            <span className="new-ing-title">
                                                Package Information
                                            </span>

                                            <GPIconButton
                                                icon={faPlus}
                                                onClick={handleShow}
                                                title="Add New Ingredient"
                                                gpClassName="cBtn bg-transparent text-theme "
                                            />

                                            <GPModal
                                                title={'Create Package'}
                                                buttonText={'Add Package'}
                                                handleClose={handleClose}
                                                onActionButtonClick={''}
                                                size={'lg'}
                                                Add
                                                Package
                                                show={show}
                                            >
                                                <div className="px-4 py-2 align-items-end">
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-3 col-form-label text-end"
                                                        >
                                                            Package Description
                                                        </label>
                                                        <div className="col-sm-9 ">
                                                            <GPTextInput
                                                                type="text"
                                                                id="email"
                                                                name="email"
                                                                placeholder="e.g. Bottle, Can, Bag"
                                                                register={
                                                                    register
                                                                }
                                                                errors={errors}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-3 col-form-label text-end"
                                                        >
                                                            Package Quantity
                                                        </label>
                                                        <div className="col-sm-9 ">
                                                            <GPTextInput
                                                                type="text"
                                                                id="email"
                                                                name="email"
                                                                placeholder="e.g. 21"
                                                                register={
                                                                    register
                                                                }
                                                                errors={errors}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-3 col-form-label text-end"
                                                        >
                                                            Package name
                                                        </label>
                                                        <div className="col-sm-9 ">
                                                            <GPTextInput
                                                                type="text"
                                                                id="email"
                                                                name="email"
                                                                disabled={true}
                                                                register={
                                                                    register
                                                                }
                                                                errors={errors}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-3 col-form-label text-end"
                                                        >
                                                            Unit
                                                        </label>
                                                        <div className="col-sm-9">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                            >
                                                                <option
                                                                    selected
                                                                >
                                                                    Select Unit
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
                                                            EAN/UPC
                                                        </label>
                                                        <div className="col-sm-9 ">
                                                            <GPTextInput
                                                                type="text"
                                                                id="email"
                                                                name="email"
                                                                placeholder="e.g. 600962262001"
                                                                register={
                                                                    register
                                                                }
                                                                errors={errors}
                                                            />
                                                        </div>
                                                    </div>

                                                    <hr className="gp-divider" />

                                                    <div className="row mb-3 mt-4 justify-content-end">
                                                        <div className="col-md-3">
                                                            Is Active?
                                                            <br />
                                                            <GPRadioButton
                                                                gpType="checkbox"
                                                                id="no"
                                                                name="no"
                                                            />
                                                        </div>

                                                        <div className="col-md-3">
                                                            Is stockable?
                                                            <br />
                                                            <GPRadioButton
                                                                gpType="checkbox"
                                                                id="no"
                                                                name="no"
                                                            />
                                                        </div>

                                                        <div className="col-md-3">
                                                            Is piece?
                                                            <br />
                                                            <GPRadioButton
                                                                gpType="checkbox"
                                                                id="no"
                                                                name="no"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </GPModal>
                                        </div>

                                        <div>
                                            <GPTable
                                                columns={gpColumns}
                                                data={gpData}
                                                gppagination={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="Inventory" title="Inventory">
                            <div className="gp-tab-content px-4 py-4">
                                <div class="row mb-5">
                                    <span className="custom-title">
                                        Custom Inventory fields
                                    </span>
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

                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary text-theme"
                                        >
                                            <FontAwesomeIcon icon={faPlus} />{' '}
                                            Add New Custom Field
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Outlets" title="Outlets">
                            Outlets
                        </Tab>
                    </Tabs>
                </div>
            </Form>
        </GPLayout>
    )
}

export default NewIngredient
