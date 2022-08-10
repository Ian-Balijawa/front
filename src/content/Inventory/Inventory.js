import React from "react";
import GPCard from "../../components/GPCard/GPCard";
import GPLayout from "../../components/GPLayout";
import GPModal from "../../components/GPModal/GPModal";

function Inventory() {
  return (
    <GPLayout>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Inventory</h1>
        </div>

        <GPCard
            
            >
               <div style={{width:"100%",height:"100%"}} >
   
                  Children
   
               </div>
   
           </GPCard>


           Modal

           <GPModal
              title="find all the tings"
            >

              {
              "I am a Modal"
              }

           </GPModal>

      </main>
    </GPLayout>
  );
}

export default Inventory
