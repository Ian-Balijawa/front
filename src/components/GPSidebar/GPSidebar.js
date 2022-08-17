import React from 'react'
import GPBlockButton from '../GPBlockButton/GPBlockButton'
import {HomeIcon, InventoryIcon, ReportIcon, SettingIcon} from '../GPIcon'
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
                        gpClassName="p-3 gp-btn-margin border-0 rounded-1 mt-4 text-start align-left btn-lg bg-bake"
                    />
                    <hr className="divider bg-white" />
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({isActive}) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                <HomeIcon />
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink
                                to="/inventory"
                                className={({isActive}) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                <InventoryIcon />
                                Inventory
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/reports"
                                className={({isActive}) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                <ReportIcon />
                                Reports
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/settings"
                                className={({isActive}) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                <SettingIcon />
                                Settings
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default GPSidebar
