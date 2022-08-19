import Home from '../../assets/icons/home.svg'
import ArrowD from '../../assets/icons/arrowDown.svg'
import LeftArrow from '../../assets/icons/paginationLeftArrow.svg'
import RightArrow from '../../assets/icons/paginationRightArrow.svg'
import Ingredients from '../../assets/icons/IngredientsIcon.svg'
import Stock from '../../assets/icons/StockIcon.svg'
import Count from '../../assets/icons/CountIcon.svg'
import Create from '../../assets/icons/CreateIcon.svg'
import Hash from '../../assets/icons/HashIcon.svg'
import BlueSupplier from '../../assets/icons/BlueSupplierIcon.svg'
import BlueCalender from '../../assets/icons/BlueCalenderIcon.svg'
import OrangeCalender from '../../assets/icons/OrangeCalenderIcon.svg'
import OrangeUser from '../../assets/icons/OrangeUserIcon.svg'

import Inventory from '../../assets/icons/inventoryIcon.svg'
import Report from '../../assets/icons/reportsIcon.svg'
import Close from '../../assets/icons/closeIcon.svg'
import Setting from '../../assets/icons/settingGear.svg'
import ImageP from '../../assets/img/imagePlaceholder.PNG'
import './gp_icon.css'
import Sales from '../../assets/icons/sales.svg'
import Menu from '../../assets/icons/menu.svg'

export const MenuIcon = () => {
    return (
        <>
            <img
                src={Menu}
                width={20}
                height={20}
                className="m-2 filter"
                alt=""
            />
        </>
    )
}

export const SettingIcon = () => {
    return (
        <>
            <img
                style={{color: '#232A3B'}}
                src={Setting}
                width={20}
                height={20}
                className="m-2 svg-black"
                alt=""
            />
        </>
    )
}

export const HomeIcon = () => {
    return (
        <>
            <img src={Home} width={20} height={20} className="m-2" alt="" />
        </>
    )
}

export const SalesIcon = () => {
    return (
        <>
            <img
                src={Sales}
                width={20}
                height={20}
                style={{fill: 'red'}}
                className="m-2"
                alt=""
            />
        </>
    )
}

export const ImagePlaceholder = () => {
    return (
        <>
            <img src={ImageP} alt="" />
        </>
    )
}

export const ArrowDown = () => {
    return (
        <>
            <img src={ArrowD} width={14} height={14} className="" alt="" />
        </>
    )
}

export const PaginationLeftArrow = () => {
    return (
        <>
            <img
                src={LeftArrow}
                width={16}
                height={16}
                className="m-2"
                alt=""
            />
        </>
    )
}

export const PaginationRightArrow = () => {
    return (
        <>
            <img
                src={RightArrow}
                width={16}
                height={16}
                className="m-2"
                alt=""
            />
        </>
    )
}

export const InventoryIcon = () => {
    return (
        <>
            <img
                src={Inventory}
                width={20}
                height={20}
                className="m-2"
                alt=""
            />
        </>
    )
}

export const ReportIcon = () => {
    return (
        <>
            <img src={Report} width={20} height={20} className="m-2" alt="" />
        </>
    )
}

export const CloseIcon = () => {
    return (
        <>
            <img src={Close} width={20} height={20} className="" alt="" />
        </>
    )
}

export const IngredientsIcon = () => {
    return (
        <>
            <img src={Ingredients} width={40} height={40} alt="" />
        </>
    )
}

export const StockIcon = () => {
    return (
        <>
            <img src={Stock} width={40} height={40} className="" alt="" />
        </>
    )
}

export const CountIcon = () => {
    return (
        <>
            <img src={Count} width={40} height={40} className="" alt="" />
        </>
    )
}

export const CreateIcon = () => {
    return (
        <>
            <img src={Create} width={40} height={40} className="" alt="" />
        </>
    )
}

export const HashIcon = () => {
    return (
        <>
            <img src={Hash} width={30} height={30} className="" alt="" />
        </>
    )
}

export const BlueSupplierIcon = () => {
    return (
        <>
            <img
                src={BlueSupplier}
                width={30}
                height={30}
                className="m-2"
                alt=""
            />
        </>
    )
}

export const BlueCalenderIcon = () => {
    return (
        <>
            <img
                src={BlueCalender}
                width={30}
                height={30}
                className="m-2"
                alt=""
            />
        </>
    )
}

export const OrangeCalenderIcon = () => {
    return (
        <>
            <img
                src={OrangeCalender}
                width={30}
                height={30}
                className="m-2"
                alt=""
            />
        </>
    )
}

export const OrangeUserIcon = () => {
    return (
        <>
            <img
                src={OrangeUser}
                width={30}
                height={30}
                className="m-2"
                alt=""
            />
        </>
    )
}
