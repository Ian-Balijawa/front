import Home from "../../assets/icons/home.svg";
import ArrowD from "../../assets/icons/arrowDown.svg";
import LeftArrow from "../../assets/icons/paginationLeftArrow.svg";
import RightArrow from "../../assets/icons/paginationRightArrow.svg";
import Ingredients from "../../assets/icons/IngredientsIcon.svg";
import Stock from "../../assets/icons/StockIcon.svg";
import Count from "../../assets/icons/CountIcon.svg";
import Create from "../../assets/icons/CreateIcon.svg";




import Inventory from "../../assets/icons/inventoryIcon.svg";
import Report from "../../assets/icons/reportsIcon.svg";
import Close from "../../assets/icons/closeIcon.svg";
import Setting from "../../assets/icons/settingGear.svg";
import "./gp_icon.css";

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

export const ArrowDown = () => {
  return (
      <>
          <img src={ArrowD} width={14} height={14} className="m-2" alt="" />
      </>
  )
}

export const PaginationLeftArrow = () => {
  return (
      <>
          <img src={LeftArrow} width={16} height={16} className="m-2" alt="" />
      </>
  )
}

export const PaginationRightArrow = () => {
  return (
      <>
          <img src={RightArrow} width={16} height={16} className="m-2" alt="" />
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

export const CloseIcon = () => {
  return (
    <>
      <img src={Close} width={20} height={20} className="m-2" alt="" />
    </>
  );
};


export const IngredientsIcon = () => {
  return (
    <>
      <img src={Ingredients} width={60} height={60} className="m-2" alt="" />
    </>
  );
};


export const StockIcon = () => {
  return (
    <>
      <img src={Stock} width={60} height={60} className="m-2" alt="" />
    </>
  );
};


export const CountIcon = () => {
  return (
    <>
      <img src={Count} width={60} height={60} className="m-2" alt="" />
    </>
  );
};


export const CreateIcon = () => {
  return (
    <>
      <img src={Create} width={60} height={60} className="m-2" alt="" />
    </>
  );
};
