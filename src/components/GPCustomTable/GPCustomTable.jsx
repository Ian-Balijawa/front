import React from 'react'
import GPCard from '../GPCard/GPCard'
import GPPagination from '../GPPagination/GPPagination'

import Table from 'react-bootstrap/Table';
import './gp-custom-table.css'

const GPCustomTable = ({ columns, data }) => {





    const GPTable = (colums,data) => (
        <Table striped bordered hover className='table-main' >
            <thead className='gp-th-main'>
                <tr className='gp-tr'>
                    <th className='gp-th'>#</th>
                    <th className='gp-th'> First Name</th>
                    <th className='gp-th'>Last Name</th>
                    <th className='gp-th'>Username</th>
                </tr>

            </thead>

            <tbody >
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    )



    return (
        <GPCard
            classes={"custom-table-card"}
        >

            {/* pagination container */}
            <div className='pagination-container'>
                <GPPagination />
            </div>

            {/* table */}
            
            <GPTable columns={columns} data={data} />
       
        </GPCard>
    )
}

export default GPCustomTable