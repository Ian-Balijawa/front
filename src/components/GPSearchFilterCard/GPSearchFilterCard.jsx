import React, {useState} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import GPBlockButton from '../GPBlockButton'
import GPCard from '../GPCard/GPCard'
import GPSearchInput from '../GPSearchInput/GPSearchInput'
import GPSelectInput from '../GPSelectInput.js/GPSelectInput'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './gp-search-filter-card.css'
import GPCheckBox from '../GPCheckBox/GPCheckBox'
import {ArrowDown} from '../GPIcon'

const GPSearchFilterCard = () => {
    const [toggleCard, setToggleCard] = useState(false)

    const handleToggleCard = () => {
        setToggleCard(!toggleCard)
    }

    return (
        <GPCard classes="search-card">
            <div className="search-top-wrapper">
                <Row>
                    <Col lg="4" md="4" sm="4">
                        <GPSearchInput label="Search for Supplier" />
                    </Col>

                    <Col lg="3">
                        <GPSelectInput
                            label="#"
                            placeholder="#"
                            className="select-input"
                        />
                    </Col>

                    <Col lg="3">
                        <GPSelectInput
                            label="#"
                            placeholder="#"
                            className="select-input"
                        />
                    </Col>

                    <Col lg="2" md="2" style={{position: 'relative'}}>
                        <GPBlockButton
                            title={'Search'}
                            gpClassName="bg-theme border-0 btn-sm select-btn"
                        />
                    </Col>
                </Row>
            </div>

            <div className="search-middle-switch">
                <div>Advanced Search</div>

                <div onClick={() => handleToggleCard()}>
                    <ArrowDown />
                </div>
            </div>

            {toggleCard ? (
                <div className="search-bottom-wrapper">
                    <Container>
                        <Row>
                            <Col lg="3" md="3">
                                <GPSelectInput
                                    label="Season"
                                    placeholder="All Seasons"
                                    className="select-input"
                                />
                            </Col>

                            <Col lg="3" md="3">
                                <GPSelectInput
                                    label="Class"
                                    placeholder="All Classes"
                                    className="select-input"
                                />
                            </Col>

                            <Col lg="3" md="3">
                                <GPSelectInput
                                    label="Created By"
                                    placeholder="Category"
                                    className="select-input"
                                />
                            </Col>

                            <Col lg="3" md="3" style={{position: 'relative'}}>
                                <GPCheckBox
                                    label={'Show archived only'}
                                    labelTop={true}
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            ) : (
                <div></div>
            )}
        </GPCard>
    )
}

export default GPSearchFilterCard
