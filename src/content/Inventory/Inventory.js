import React,{useState} from "react";
import GPCard from "../../components/GPCard/GPCard";
import GPLayout from "../../components/GPLayout";
import GPModal from "../../components/GPModal/GPModal";

import { Button } from "react-bootstrap";
import GPSearchInput from "../../components/GPSearchInput/GPSearchInput";
import GPCheckBox from "../../components/GPCheckBox";
import Suppliers from "./Suppliers";


function Inventory() {


 

  return (
    <GPLayout>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

       {/* supplier screen  */}
        <Suppliers/>
       



      </main>
    </GPLayout>
  );
}

export default Inventory
