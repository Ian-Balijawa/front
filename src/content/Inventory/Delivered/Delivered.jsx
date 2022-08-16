import React from 'react'
import CustomDeliveredIconCard from '../../../components/CustomDeliveredIconCard/CustomDeliveredIconCard'
import GPCard from '../../../components/GPCard/GPCard'
import { BlueCalenderIcon, BlueSupplierIcon, HashIcon, OrangeCalenderIcon } from '../../../components/GPIcon'
import GPLayout from '../../../components/GPLayout/GPLayout'

const Delivered = () => {

  return (
      <GPLayout>
          
          <GPCard 
             classes="delivered-card-styles"
          >

            <div className='delivered-content-wrapper-md'>
            
              <CustomDeliveredIconCard
                 title="Purchase order number"
                 value="#3800034543"
                 renderIcon={HashIcon}
              />

<CustomDeliveredIconCard
                 title="Supplier"
                 value="Nic&Nico Suppliers"
                 renderIcon={BlueSupplierIcon}
              />

<CustomDeliveredIconCard
                 title="Ordered On"
                 value="21/07/2022 12:00"
                 renderIcon={BlueCalenderIcon}
              />

            </div>
            <div className='delivered-content-wrapper-md'>

            </div>
            <div className='delivered-content-wrapper-md'>

            </div>
            <div className='delivered-table-area-wrapper-md'>

            </div>
            <div className='delivered-button-area-wrapper'>

            </div>

          </GPCard>

      </GPLayout>
  )
}

export default Delivered