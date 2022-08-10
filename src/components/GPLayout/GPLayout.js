import React, {Children} from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu'
import GPHeader from '../../components/GPHeader/GPHeader'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GPSidebar from '../../components/GPSidebar/GPSidebar'

function GPLayout({ children }) {
  return (
    <>
      <GPHeader />
      <div className="container-fluid">
        <div className="row">
          <GPSidebar />

                    {children}
                </div>
            </div>
        </>
    )
}

export default GPLayout
