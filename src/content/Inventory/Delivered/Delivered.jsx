import React from 'react'
import CustomDeliveredIconCard from '../../../components/CustomDeliveredIconCard/CustomDeliveredIconCard'
import GPCard from '../../../components/GPCard/GPCard'
import { BlueCalenderIcon, BlueSupplierIcon, HashIcon, OrangeCalenderIcon, OrangeUserIcon } from '../../../components/GPIcon'
import GPLayout from '../../../components/GPLayout/GPLayout'
import GPSelectInput from '../../../components/GPSelectInput.js/GPSelectInput'

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

          <CustomDeliveredIconCard
            title="Ordered By"
            value="21/07/2022 12:00"
            renderIcon={OrangeUserIcon}
            transparent={true}
          />


          <CustomDeliveredIconCard
            title="Expected Delivery Date"
            value="21/07/2022 12:00"
            renderIcon={OrangeCalenderIcon}
            transparent={true}
          />

        </div>

        <div className='delivered-input-area-wrapper-md'>

          <GPSelectInput label="Invoice Status" placeholder="Not Yet Recieved" />

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