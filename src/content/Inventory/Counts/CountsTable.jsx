import React from 'react'
import CustomCountButton from '../../../components/CustomCountButton/CustomCountButton'
import GPCustomTable from '../../../components/GPCustomTable'

const CountsTable = ({data, columns}) => {
    return <GPCustomTable columns={columns} data={data} />
}

export default CountsTable
