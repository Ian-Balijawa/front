import {faPlus, faPager} from '@fortawesome/free-solid-svg-icons'
import GPDashCard from '../../../components/GPDashCard'
import GPLayout from '../../../components/GPLayout/GPLayout'

const CountsDashBoard = () => {
    const crumbs = [
        {
            text: 'Inventory',
            href: '/inventory',
        },
        {
            text: 'Stock',
            href: '/stock',
        },
        {
            text: 'Outlets',
            href: '#',
        },
    ]

    return (
        <GPLayout breadIcon={faPager} crumbs={crumbs}>
            <h4
                style={{
                    borderBottom: '0.5px solid #7A7A7A',
                    padding: '1rem',
                }}
            >
                For which outlet do you want to manage Counts
            </h4>
            <div className="col-md-12 text-center d-flex mt-3">
                <GPDashCard
                    className="text"
                    gpIcon={faPlus}
                    gpTitle={'Bake My Day Entebbe'}
                    gpLink={`/inventory/preparation/${'bake_my_day_entebbe'}`}
                    gpClassName={'mx-4'}
                />

                <GPDashCard
                    className="text"
                    gpIcon={faPlus}
                    gpTitle={'Bake My Day Ntinda'}
                    gpLink={`/inventory/preparation/${'bake_my_day_'}`}
                    gpClassName={'mx-4'}
                />
            </div>
        </GPLayout>
    )
}

export default CountsDashBoard
