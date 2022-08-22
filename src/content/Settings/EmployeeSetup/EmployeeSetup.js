import React, {useState} from 'react'
import GPLayout from '../../../components/GPLayout'
import {
    faGear,
    faPlus,
    faEllipsis,
    faPen,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import GPIconButton from '../../../components/GPIconButton'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import GPSearchLongInput from '../../../components/GPSearchLongInput'
import GPImportExportButton from '../../../components/GPImportExportButton'
import {Col, Nav, Row, Tab, Tabs} from 'react-bootstrap'
import './employee-setup.css'
import GPBlockButton from '../../../components/GPBlockButton'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import GPPagination from '../../../components/GPPagination/GPPagination'
import GPTable from '../../../components/GPTable'
import GPActionLinks from '../../../components/GPActionLinks'

function EmployeeSetup() {
    const crumbs = [
        {
            text: 'Settings',
            href: '/settings',
        },
        {
            text: 'EmployeeSetup',
            href: '#',
        },
    ]
    const navigate = useNavigate()

    const actionLinks = [
        {
            text: 'Archive',
            icon: '',
            href: '',
        },
        {
            text: 'Edit',
            icon: '',
            href: '',
        },
    ]

    const gpColumns = [
        {title: 'First Name', field: 'FirstName'},
        {title: 'Last Name', field: 'LastName'},
        {title: 'Job Title', field: 'JobTitle'},

        {
            title: 'Status',
            field: 'Status',
            render: rowData => (
                <div className="d-flex justity-content-between">
                    <span class="badge bg-success rounded-pill px-3 fw-normal">
                        Active
                    </span>
                </div>
            ),
        },
        {
            title: 'Actions',
            field: 'Actions',
            render: rowData => (
                <div className="d-flex justity-content-between">
                    <FontAwesomeIcon icon={faPen} className="mx-3" />
                    <GPActionLinks actionLinks={actionLinks} />
                </div>
            ),
        },
    ]

    const gpData = [
        {
            FirstName: 'Mwesigye',
            LastName: 'Nicholas',
            JobTitle: 'Admin',
        },
        {
            FirstName: 'Mwesigye',
            LastName: 'Nicholas',
            JobTitle: 'Admin',
        },
        {
            FirstName: 'Mwesigye',
            LastName: 'Nicholas',
            JobTitle: 'Admin',
        },
        {
            FirstName: 'Mwesigye',
            LastName: 'Nicholas',
            JobTitle: 'Admin',
        },
    ]

    const gpRoleColumns = [
        {title: 'Employee Role', field: 'EmployeeRole'},
        {title: 'Pay Basis', field: 'PayBasis'},
        {title: 'Default Pay', field: 'DefaultPay'},

        {
            title: 'Actions',
            field: 'Actions',
            render: rowData => (
                <div className="d-flex justity-content-between">
                    <GPActionLinks actionLinks={actionLinks} />
                </div>
            ),
        },
    ]

    const gpRoleData = [
        {
            EmployeeRole: 'General Manager',
            PayBasis: 'Salary',
            DefaultPay: 'USh 800,000',
        },
        {
            EmployeeRole: 'General Manager',
            PayBasis: 'Salary',
            DefaultPay: 'USh 800,000',
        },
        {
            EmployeeRole: 'General Manager',
            PayBasis: 'Salary',
            DefaultPay: 'USh 800,000',
        },
        {
            EmployeeRole: 'General Manager',
            PayBasis: 'Salary',
            DefaultPay: 'USh 800,000',
        },
        {
            EmployeeRole: 'General Manager',
            PayBasis: 'Salary',
            DefaultPay: 'USh 800,000',
        },
        {
            EmployeeRole: 'General Manager',
            PayBasis: 'Salary',
            DefaultPay: 'USh 800,000',
        },
        {
            EmployeeRole: 'General Manager',
            PayBasis: 'Salary',
            DefaultPay: 'USh 800,000',
        },
    ]

    const [activeButtonText, setActiveButtonText] = useState('')
    const [activeButtonURL, setActiveButtonURL] = useState('')

    const handleTabClick = (event, param) => {
        console.log(event)
        console.log(param)

        if (param === '1') {
            setActiveButtonText('New Employee')
            setActiveButtonURL('/settings/new-employee')
        }

        if (param === '2') {
            setActiveButtonText('New Employee Role')
            setActiveButtonURL('/settings/employee-role')
        }
    }

    return (
        <GPLayout breadIcon={faGear} crumbs={crumbs}>
            <div className="d-flex justify-content-end flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
                <GPSearchLongInput />
                <GPIconButton
                    icon={faPlus}
                    title={activeButtonText || 'New Employee'}
                    onClick={() =>
                        navigate(activeButtonURL || '/settings/new-employee')
                    }
                    gpClassName="border-0 bg-transparent text-theme fs-5"
                />
            </div>

            <hr className="divider mb-5" />

            <Tab.Container id="left-tabs-example" defaultActiveKey="employees">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item
                                onClick={event => handleTabClick(event, '1')}
                            >
                                <Nav.Link
                                    className="employees_tabs"
                                    eventKey="employees"
                                >
                                    Employees
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item
                                onClick={event => handleTabClick(event, '2')}
                            >
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
                                    className="mb-3 employee-setup-tabs"
                                >
                                    <Tab eventKey="actives" title="Active">
                                        <div className="d-flex justify-content-between mb-3">
                                            <GPPagination />

                                            <GPImportExportButton />
                                        </div>
                                        <div>
                                            <GPTable
                                                columns={gpColumns}
                                                data={gpData}
                                                gppagination={false}
                                                paddingBottom="5px"
                                                paddingTop="5px"
                                                options={{toolbar: false}}
                                            />
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <GPIconButton
                                                    icon={faPlus}
                                                    title="New Employee"
                                                    onClick={() => {
                                                        navigate(
                                                            '/settings/new-employee'
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
                                    <Tab eventKey="profile" title="Archived">
                                        Archived
                                    </Tab>

                                    <Tab eventKey="EmDisabled" title="Disabled">
                                        Disabled
                                    </Tab>
                                </Tabs>
                            </Tab.Pane>
                            <Tab.Pane eventKey="employees_roles">
                                <Tabs
                                    defaultActiveKey="roles_actives"
                                    id="uncontrolled-tab-example"
                                    className="mb-3 employee-setup-tabs"
                                >
                                    <Tab
                                        eventKey="roles_actives"
                                        title="Active"
                                    >
                                        <div className="d-flex justify-content-between mb-3">
                                            <GPPagination />
                                            <GPImportExportButton />
                                        </div>
                                        <div>
                                            <GPTable
                                                columns={gpRoleColumns}
                                                data={gpRoleData}
                                                gppagination={false}
                                                paddingBottom="5px"
                                                paddingTop="5px"
                                                options={{toolbar: false}}
                                            />
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <GPIconButton
                                                    icon={faPlus}
                                                    title="New Employee Role"
                                                    onClick={() => {
                                                        navigate(
                                                            '/settings/employee-role'
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
        </GPLayout>
    )
}

export default EmployeeSetup
