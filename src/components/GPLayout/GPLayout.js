import React, {Children} from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu'
import GPHeader from '../../components/GPHeader/GPHeader'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GPSidebar from '../../components/GPSidebar/GPSidebar'

function GPLayout({children}) {
    return (
        <>
            <GPHeader />
            <div className="container-fluid">
                <div className="row">
                    <GPSidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default GPLayout
