import React from 'react'
import GPLayout from '../../components/GPLayout'
import {
    faGear,
    faSitemap,
    faCartShopping,
    faPlus,
    faCartPlus,
    faCartArrowDown,
    faCartFlatbed,
    faBagShopping,
    faBox,
} from '@fortawesome/free-solid-svg-icons'

import './inventory.css'

import GPDashCard from '../../components/GPDashCard'
import GPDashTitle from '../../components/GPDashTitle'
import {
    CountIcon,
    CreateIcon,
    IngredientsIcon,
    StockIcon,
} from '../../components/GPIcon'

function Inventory() {
    const crumbs = [
        {
            text: 'Inventroy',
            href: '/inventory',
        },
    ]

    return (
        <GPLayout breadIcon={faBox} crumbs={crumbs}>
            <div className="row mb-4">
                <GPDashTitle gpTitle={'Items'} />
                <div className="col-md-12 text-center d-flex">
                    <GPDashCard
                        renderIcon={IngredientsIcon}
                        gpTitle={'Ingredients'}
                        gpLink={'/inventory/ingredients'}
                        gpClassName={'mx-3'}
                    />

                    <GPDashCard
                        gpIcon={faSitemap}
                        gpTitle={'Recipes'}
                        gpLink={'/inventory/recipes'}
                        gpClassName={'mx-3'}
                    />
                </div>
            </div>

            <div className="row mb-4">
                <GPDashTitle gpTitle={'Procurement'} />
                <div className="col-md-12 text-center d-flex">
                    <GPDashCard
                        gpIcon={faCartPlus}
                        gpTitle={'New Order'}
                        gpLink={'/orders'}
                        gpClassName={'mx-3'}
                    />

                    <GPDashCard
                        gpIcon={faCartShopping}
                        gpTitle={'Open Orders'}
                        gpLink={'/orders'}
                        gpClassName={'mx-3'}
                    />

                    <GPDashCard
                        gpIcon={faCartFlatbed}
                        gpTitle={'Sent Orders'}
                        gpLink={'/inventory/outlets'}
                        gpClassName={'mx-3'}
                    />

                    <GPDashCard
                        gpIcon={faBagShopping}
                        gpTitle={'Delivered'}
                        gpLink={'/delivered'}
                        gpClassName={'mx-3'}
                    />

                    <GPDashCard
                        gpIcon={faCartArrowDown}
                        gpTitle={'External Orders'}
                        gpLink={'/orders'}
                        gpClassName={'mx-3'}
                    />

                    <GPDashCard
                        gpIcon={faCartShopping}
                        gpTitle={'Suppliers'}
                        gpLink={'/suppliers'}
                        gpClassName={'mx-3'}
                    />

                    <GPDashCard
                        gpIcon={faCartShopping}
                        gpTitle={'All Concepts'}
                        gpLink={'/order-list'}
                        gpClassName={'mx-3'}
                    />
                </div>
            </div>

            <div className="row mb-4">
                <GPDashTitle gpTitle={'Inventory Management'} />
                <div className="col-md-12 text-center d-flex">
                    <GPDashCard
                        renderIcon={StockIcon}
                        gpTitle={'Stock'}
                        gpLink={'#'}
                        gpClassName={'mx-3'}
                    />

                    <GPDashCard
                        renderIcon={CountIcon}
                        gpTitle={'Count'}
                        gpLink={'#'}
                        gpClassName={'mx-3'}
                    />

                    <GPDashCard
                        renderIcon={CreateIcon}
                        gpTitle={'Create'}
                        gpLink={'#'}
                        gpClassName={'mx-3'}
                    />

                    <GPDashCard
                        renderIcon={StockIcon}
                        gpTitle={'Transfer'}
                        gpLink={'#'}
                        gpClassName={'mx-3'}
                    />

                    <GPDashCard
                        renderIcon={StockIcon}
                        gpTitle={'Waste'}
                        gpLink={'#'}
                        gpClassName={'mx-3'}
                    />
                </div>
            </div>
        </GPLayout>
    )
}

export default Inventory
