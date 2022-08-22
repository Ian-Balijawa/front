import React, {Children} from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu'
import GPHeader from '../../components/GPHeader/GPHeader'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GPSidebar from '../../components/GPSidebar/GPSidebar'

function GPLayout({breadIcon, crumbs, children}) {
    return (
        <>
            <GPHeader breadIcon={breadIcon} crumbs={crumbs} />
            <div className="container-fluid">
                <div className="row">
                    <GPSidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-5">
                        <div className="my-3 mx-2">{children}</div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default GPLayout
