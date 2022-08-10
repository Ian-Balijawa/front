import Home from '../../assets/icons/home.svg'
import Inventory from '../../assets/icons/inventoryIcon.svg'
import Report from '../../assets/icons/reportsIcon.svg'
import Setting from '../../assets/icons/settingGear.svg'
import ImportI from '../../assets/icons/importicon.svg'
import './gp_icon.css'

export const ImportIcon = () => {
    return (
        <>
            <img
                style={{color: '#232A3B'}}
                src={ImportI}
                width={20}
                height={20}
                className="m-2 svg-black"
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
  );
};

