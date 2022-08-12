import React from 'react'
import GPLayout from '../../../components/GPLayout'
import {
    faGear,
    faPlus,
    faEllipsis,
    faPen,
} from '@fortawesome/free-solid-svg-icons'
import GPIconButton from '../../../components/GPIconButton'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import GPSearchInput from '../../../components/GPSearchInput'
import GPImportExportButton from '../../../components/GPImportExportButton'
import {Col, Nav, Row, Tab, Tabs} from 'react-bootstrap'
import './employee-setup.css'
import GPBlockButton from '../../../components/GPBlockButton'
import {Link, Navigate, useNavigate} from 'react-router-dom'

function EmployeeSetup() {
    const crumbs = [
        {
            text: 'Home',
            href: '/',
        },
        {
            text: 'Settings',
            href: '/settings',
        },
        {
            text: 'EmployeeSetup',
            href: '/employee-setup',
        },
    ]
    const navigate = useNavigate()

    return (
        <GPLayout breadIcon={faGear} crumbs={crumbs}>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-5 mt-3">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3  border-bottom">
                    <h1 className="h2"></h1>
                    <GPSearchInput />
                    <GPIconButton
                        icon={faPlus}
                        title="New Employee Role"
                        gpClassName="border-0 bg-transparent text-theme fs-5"
                    />
                </div>

                <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="employees"
                >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link
                                        className="employees_tabs"
                                        eventKey="employees"
                                    >
                                        Employees
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className="employees_tabs"
                                        eventKey="employees_roles"
                                    >
                                        Employees Roles
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className="employees_tabs"
                                        eventKey="tabs_reports"
                                    >
                                        Reports
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="employees">
                                    <Tabs
                                        defaultActiveKey="actives"
                                        id="uncontrolled-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="actives" title="Active">
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <span className="fc-7A">
                                                        4 Results
                                                    </span>
                                                    <span className="fw-bold fz-20">
                                                        20 PER PAGE
                                                    </span>
                                                </div>

                                                <GPImportExportButton />
                                            </div>
                                            <div>
                                                <table class="table">
                                                    <thead className="table-head">
                                                        <tr>
                                                            <th scope="col">
                                                                First Name
                                                            </th>
                                                            <th scope="col">
                                                                Last Name
                                                            </th>
                                                            <th scope="col">
                                                                Job Title
                                                            </th>
                                                            <th scope="col">
                                                                Status
                                                            </th>
                                                            <th scope="col">
                                                                Actions
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td scope="row">
                                                                Mwesigye
                                                            </td>
                                                            <td>Hourly</td>
                                                            <td>Nicholas</td>
                                                            <td>
                                                                <span class="badge bg-success rounded-pill px-3 fw-normal">
                                                                    Active
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <FontAwesomeIcon
                                                                    icon={faPen}
                                                                    className="mx-3"
                                                                />
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faEllipsis
                                                                    }
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row">
                                                                Mwesigye
                                                            </td>
                                                            <td>Hourly</td>
                                                            <td>Nicholas</td>
                                                            <td>
                                                                <span class="badge bg-success rounded-pill px-3 fw-normal">
                                                                    Active
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link to="/update-employee">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faPen
                                                                        }
                                                                        className="mx-3"
                                                                    />
                                                                </Link>
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faEllipsis
                                                                    }
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="row">
                                                <div className="col-3">
                                                    <GPIconButton
                                                        icon={faPlus}
                                                        title="New Employee"
                                                        onClick={() => {
                                                            navigate(
                                                                '/new-employee'
                                                            )
                                                        }}
                                                        gpClassName="cBtn bg-transparent text-theme "
                                                    />
                                                </div>
                                                <div className="col-1">
                                                    <GPBlockButton
                                                        gpClassName="cBtn bg-transparent text-theme "
                                                        title={'Edit'}
                                                    />
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab
                                            eventKey="profile"
                                            title="Archived"
                                        >
                                            Archived
                                        </Tab>

                                        <Tab
                                            eventKey="EmDisabled"
                                            title="Disabled"
                                        >
                                            Disabled
                                        </Tab>
                                    </Tabs>
                                </Tab.Pane>
                                <Tab.Pane eventKey="employees_roles">
                                    <Tabs
                                        defaultActiveKey="roles_actives"
                                        id="uncontrolled-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab
                                            eventKey="roles_actives"
                                            title="Active"
                                        >
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <span className="fc-7A">
                                                        4 Results
                                                    </span>
                                                    <span className="fw-bold fz-20">
                                                        20 PER PAGE
                                                    </span>
                                                </div>

                                                <GPImportExportButton />
                                            </div>
                                            <div>
                                                <table class="table">
                                                    <thead className="table-head">
                                                        <tr>
                                                            <th scope="col">
                                                                Employee Role
                                                            </th>
                                                            <th scope="col">
                                                                Pay Basis
                                                            </th>
                                                            <th scope="col">
                                                                Default Pay
                                                            </th>
                                                            <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td scope="row">
                                                                General Manager
                                                            </td>
                                                            <td>Hourly</td>
                                                            <td>
                                                                <span className="text-secondary">
                                                                    USh
                                                                </span>
                                                                800,000
                                                            </td>
                                                            <td>
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faEllipsis
                                                                    }
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr className="tableEven">
                                                            <td scope="row">
                                                                Admin
                                                            </td>
                                                            <td>Hourly</td>
                                                            <td>
                                                                <span className="text-secondary">
                                                                    USh
                                                                </span>
                                                                800,000
                                                            </td>
                                                            <td>
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faEllipsis
                                                                    }
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row">
                                                                Chef
                                                            </td>
                                                            <td>Hourly</td>
                                                            <td>
                                                                <span className="text-secondary">
                                                                    USh
                                                                </span>
                                                                800,000
                                                            </td>
                                                            <td>
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faEllipsis
                                                                    }
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="row">
                                                <div className="col-3">
                                                    <GPIconButton
                                                        icon={faPlus}
                                                        title="New Employee Role"
                                                        gpClassName="cBtn bg-transparent text-theme "
                                                    />
                                                </div>
                                                <div className="col-1">
                                                    <GPBlockButton
                                                        gpClassName="cBtn bg-transparent text-theme "
                                                        title={'Edit'}
                                                    />
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab
                                            eventKey="roles_Archived"
                                            title="Archived"
                                        >
                                            Archived
                                        </Tab>
                                    </Tabs>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tabs_reports">
                                    <h1>Reports</h1>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </main>
        </GPLayout>
    )
}

export default EmployeeSetup
