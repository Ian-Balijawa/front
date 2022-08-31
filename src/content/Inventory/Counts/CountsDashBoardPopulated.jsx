import {faPager, faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import GPCustomTable from '../../../components/GPCustomTable'
import GPIconButton from '../../../components/GPIconButton'
import GPLayout from '../../../components/GPLayout/GPLayout'

const CountsDashBoardPopulated = () => {
    const crumbs = [
        {
            text: 'Inventory',
            href: '/inventory',
        },
        {
            text: 'Outlets',
            href: '/outlets',
        },
        {
            text: 'count',
            href: '#',
        },
    ]

    const _columns = [
        {title: 'Status', field: 'status'},
        {title: 'Created By', field: 'created_by'},
        {title: 'Sent By', field: 'sent_by'},
        {title: 'Started On', field: 'started_on'},
        {title: 'Sent On', field: 'Sent_on'},
        {title: 'Stock Change', field: 'stock_change'},
    ]

    const _data = [
        {
            status: 'Nic&nico supplies',
            created_by: 'Nic&nico',
            sent_by: 'ian',
            started_on: '23/08/2022',
            sent_on: '20/08/2022',
            stock_change: '$231',
        },
        {
            status: 'Nic&nico supplies',
            created_by: 'Nic&nico',
            sent_by: 'ian',
            started_on: '23/08/2022',
            sent_on: '20/08/2022',
            stock_change: '$231',
        },
        {
            status: 'Nic&nico supplies',
            created_by: 'Nic&nico',
            sent_by: 'ian',
            started_on: '23/08/2022',
            sent_on: '20/08/2022',
            stock_change: '$231',
        },
        {
            status: 'Nic&nico supplies',
            created_by: 'Nic&nico',
            sent_by: 'ian',
            started_on: '23/08/2022',
            sent_on: '20/08/2022',
            stock_change: '$231',
        },
        {
            status: 'Nic&nico supplies',
            created_by: 'Nic&nico',
            sent_by: 'ian',
            started_on: '23/08/2022',
            sent_on: '20/08/2022',
            stock_change: '$231',
        },
        {
            status: 'Nic&nico supplies',
            created_by: 'Nic&nico',
            sent_by: 'ian',
            started_on: '23/08/2022',
            sent_on: '20/08/2022',
            stock_change: '$231',
        },
    ]

    return (
        <GPLayout breadIcon={faPager} crumbs={crumbs}>
            <div
                style={{
                    borderBottom: '0.5px solid #7A7A7A',
                    padding: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: '400',
                    fontSize: '26px',
                    lineHeight: '38.4px',
                }}
            >
                Count Events from Bake My Day Entebbe
                <GPIconButton
                    title={'Start Count'}
                    to={'#'}
                    icon={faPlayCircle}
                    gpClassName="btn-count"
                    style={{
                        background: '#ffff',
                        border: '1px solid #a5a5a5',
                        color: '#e46036',
                    }}
                />
            </div>

            <GPCustomTable
                columns={_columns}
                data={_data}
                style={{
                    boxShadow: '0px 6px 15px rgba(84, 84, 84, 0.1)',
                    margin: '1rem auto',
                    padding: '1.3rem',
                    background: '#FFFEFE',
                    borderRadius: '6px',
                }}
            />
        </GPLayout>
    )
}

export default CountsDashBoardPopulated
