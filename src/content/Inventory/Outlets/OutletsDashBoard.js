import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GPDashCard from '../../../components/GPDashCard'
import GPLayout from '../../../components/GPLayout/GPLayout'

const OutletsDashBoard = () => {
    return (
        <GPLayout>
            <div style={{ width: "100%", padding: "22px" }}>

                <div style={{ width: "100%", height: "84px", borderBottom: "0.5px solid rgba(122, 122, 122, 0.8)", display: "flex", alignItems: "center" }}>
                    <h4>For which outlet do you want to manage prepared items</h4>
                </div>
                <div className="col-md-12 text-center d-flex mt-3">
                    <GPDashCard
                        gpIcon={faPlus}
                        gpTitle={'Bake My Day Entebbe'}
                        gpLink={'#'}
                        gpClassName={'mx-4'}
                    />

                    <GPDashCard
                        gpIcon={faPlus}
                        gpTitle={'Bake My Day Ntinda'}
                        gpLink={'#'}
                        gpClassName={'mx-4'}
                    />
                </div>
            </div>
        </GPLayout>
    )
}

export default OutletsDashBoard