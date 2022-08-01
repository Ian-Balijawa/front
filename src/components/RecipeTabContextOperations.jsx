import * as React from 'react'
import PropTypes from 'prop-types'
import {Tabs, Tab, Typography} from '@mui/material'
import Box from '@mui/material/Box'
import {
    GeneralContainer,
    InventoryContainer,
    PortioningContainer,
    ProductionContainer,
    OutletsContainer,
    FinancialContainer,
    ImagesContainer,
} from '../containers'

const operations = [
    'General',
    'Inventory',
    'Portioning',
    'Production',
    'Financial',
    'Outlets',
    'Images',
]

function TabPanel(props) {
    const {children, value, index, ...rest} = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...rest}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export default function RecipeTabContextOperations() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box sx={{width: '100%'}}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Recipe Operations"
                >
                    {operations.map((label, index) => (
                        <Tab
                            label={label}
                            {...a11yProps(index)}
                            sx={{
                                marginLeft: '3px',
                                borderTopLeftRadius: '5px',
                                borderTopRightRadius: '5px',
                                '&:focus': {
                                    background: '#ff4400',
                                    color: 'white',
                                },
                            }}
                        />
                    ))}
                </Tabs>
            </Box>

            {operations.map((text, index) => (
                <TabPanel value={value} index={index} key={index}>
                    {text === 'General' ? (
                        <GeneralContainer />
                    ) : text === 'Inventory' ? (
                        <InventoryContainer />
                    ) : text === 'Portioning' ? (
                        <PortioningContainer />
                    ) : text === 'Production' ? (
                        <ProductionContainer />
                    ) : text === 'Outlets' ? (
                        <OutletsContainer />
                    ) : text === 'Financial' ? (
                        <FinancialContainer />
                    ) : text === 'Images' ? (
                        <ImagesContainer />
                    ) : (
                        text
                    )}
                </TabPanel>
            ))}
        </Box>
    )
}
