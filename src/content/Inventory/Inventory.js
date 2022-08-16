import React from 'react'
import GPLayout from '../../components/GPLayout'
import {
  faGear,
  faSitemap,
  faCartShopping,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './inventory.css'
import { Link } from 'react-router-dom'
import GPDashCard from '../../components/GPDashCard'
import GPDashTitle from '../../components/GPDashTitle'
import { CountIcon, CreateIcon, IngredientsIcon, StockIcon } from '../../components/GPIcon'


function Inventory() {
  const crumbs = [
    {
      text: 'Settings',
      href: '/settings',
    },
  ]
  return (
    <GPLayout breadIcon={faGear} crumbs={crumbs}>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Settings</h1>
                </div> */}

        <div className="row mb-4">
          <GPDashTitle gpTitle={'Items'} />
          <div className="col-md-12 text-center d-flex">
            <GPDashCard
              renderIcon={IngredientsIcon}
              gpTitle={'Ingredients'}
              gpLink={'/order-list'}
            />

            <GPDashCard
              gpIcon={faSitemap}
              gpTitle={'Recipes'}
              gpLink={'/view-supplier'}
              gpClassName={'mx-4'}
            />

          </div>

        </div>

        <div className="row mb-4">
          <GPDashTitle gpTitle={'Procurement'} />
          <div className="col-md-12 text-center d-flex">
            <GPDashCard
              gpIcon={faCartShopping}
              gpTitle={'Suppliers'}
              gpLink={'/suppliers'}
            />

            <GPDashCard
              gpIcon={faPlus}
              gpTitle={'New Order'}
              gpLink={'/orders'}
              gpClassName={'mx-4'}
            />
          </div>
        </div>

        <div className="row mb-4">
          <GPDashTitle gpTitle={'Inventory Management'} />
          <div className="col-md-12 text-center d-flex">
            <GPDashCard
              renderIcon={StockIcon}
              gpTitle={'Stock'}
              gpLink={'/delivered'}
            />

            <GPDashCard
              renderIcon={CountIcon}
              gpTitle={'Count'}
              gpLink={'#'}
              gpClassName={'mx-4'}
            />

            <GPDashCard
              renderIcon={CreateIcon}
              gpTitle={'Create'}
              gpLink={'#'}
              gpClassName={'mx-4'}
            />

            <GPDashCard
              renderIcon={StockIcon}
              gpTitle={'Transfer'}
              gpLink={'#'}
              gpClassName={'mx-4'}
            />

            <GPDashCard
              renderIcon={StockIcon}
              gpTitle={'Waste'}
              gpLink={'#'}
              gpClassName={'mx-4'}
            />
          </div>
        </div>
      </main>
    </GPLayout>
  )
}

export default Inventory
