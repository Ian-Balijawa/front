import React from 'react'
import GPBlockButton from '../GPBlockButton/GPBlockButton'
import {
    HomeIcon,
    InventoryIcon,
    MenuIcon,
    ReportIcon,
    SalesIcon,
    SettingIcon,
} from '../GPIcon'
import './sidebar.css'
import {NavLink} from 'react-router-dom'

function GPSidebar() {
    return (
        <div>
            <nav
                id="sidebarMenu"
                className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
            >
                <div className="position-sticky pt-3 sidebar-sticky">
                    <GPBlockButton
                        title="Bake My Cake"
                        gpClassName="gp-btn-margin border-0 rounded-0 p-3 text-start align-left btn-lg bg-bake theme-b-r"
                    />
                    <hr className="divider bg-white p-0 m-0" />
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({isActive}) =>
                                    isActive
                                        ? 'sidebar-p nav-link active'
                                        : 'nav-link sidebar-p'
                                }
                            >
                                <HomeIcon />
                                Home
                            </NavLink>
                        </li>
                        <hr className="divider bg-white  p-0 m-0" />
                        <li className="nav-item ">
                            <NavLink
                                to="/inventory"
                                className={({isActive}) =>
                                    isActive
                                        ? 'sidebar-p nav-link active'
                                        : 'nav-link sidebar-p'
                                }
                            >
                                <InventoryIcon />
                                Inventory
                            </NavLink>
                        </li>
                        <hr className="divider bg-white  p-0 m-0" />
                        <li className="nav-item ">
                            <NavLink
                                to="/menu"
                                className={({isActive}) =>
                                    isActive
                                        ? 'sidebar-p nav-link active'
                                        : 'nav-link sidebar-p'
                                }
                            >
                                <MenuIcon />
                                Menu
                            </NavLink>
                        </li>
                        <hr className="divider bg-white  p-0 m-0" />
                        <li className="nav-item ">
                            <NavLink
                                to="/sales"
                                className={({isActive}) =>
                                    isActive
                                        ? 'sidebar-p nav-link active'
                                        : 'nav-link sidebar-p'
                                }
                            >
                                <SalesIcon />
                                Sales
                            </NavLink>
                        </li>
                        <hr className="divider bg-white  p-0 m-0" />
                        <li className="nav-item ">
                            <NavLink
                                to="/reports"
                                className={({isActive}) =>
                                    isActive
                                        ? 'sidebar-p nav-link active'
                                        : 'nav-link sidebar-p'
                                }
                            >
                                <ReportIcon />
                                Reports
                            </NavLink>
                        </li>
                        <hr className="divider bg-white  p-0 m-0" />

                        <li className="nav-item">
                            <NavLink
                                to="/settings"
                                className={({isActive}) =>
                                    isActive
                                        ? 'sidebar-p nav-link active'
                                        : 'nav-link sidebar-p'
                                }
                            >
                                <SettingIcon />
                                Settings
                            </NavLink>
                        </li>
                        <hr className="divider bg-white  p-0 m-0" />
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default GPSidebar
