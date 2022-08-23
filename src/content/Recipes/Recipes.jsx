import React,{useState} from 'react'
import CustomPlusIconButton from '../../components/CustomPlusIconButton/CustomPlusIconButton'
import GPActionLinks from '../../components/GPActionLinks/GPActionLinks'
import GPBlockButton from '../../components/GPBlockButton/GPBlockButton'
import GPCard from '../../components/GPCard/GPCard'
import GPCheckBox from '../../components/GPCheckBox/GPCheckBox'
import GPCustomTable from '../../components/GPCustomTable/GPCustomTable'
import GPImportExportButton from '../../components/GPImportExportButton/GPImportExportButton'
import GPLayout from '../../components/GPLayout/GPLayout'
import GPSearchFilterCard from '../../components/GPSearchFilterCard/GPSearchFilterCard'
import SupplierTableActions from '../../components/SupplierTableActions/SupplierTableActions'


import './recipes.css'

const Recipes = () => {

  let name = "Mayonnaise"

  const _recipeData = [
      {id:"001",upc:"0063002575",recipe_name:"Rice",category:"Nico&Nic Supplies",shell_life:3,difficulty:"N/A"},
      {id:"002",upc:"1163002485",recipe_name:"Mayonnaise",category:"Nico&Nic Supplies",shell_life:3,difficulty:"N/A"},
      {id:"003",upc:"2263002465",recipe_name:"Salmon",category:"Nico&Nic Supplies",shell_life:3,difficulty:"N/A"}


  ]

  const _recipeTableColumns = [
     {title:"ID",field:"id" },
     {title:"EAN/UPC",field:"upc"},
     {title:"Recipe Name", field:"recipe_name"},
     {title:"Category",field:"category"},
     {title:"Shell Life",field:"shell_life"},
     {title:"Difficulty",field:"difficulty"},
     {title:"Actions",field:"actions",render:(rowData)=> <SupplierTableActions record={rowData} url={`/recipes/${rowData.recipe_name}`}/> },



  ]

  const [recipes,setRecipes] = useState(_recipeData)

  return (
    <GPLayout>
        <div className='recipes-main-wrapper'>
           
           <div className='recipes-header-container'>
                <div className='recipes-top-btn-cont'>
                  <GPBlockButton title="Save Changes"  gpClassName="bg-theme border-0 btn-sm recipe-block-btn" />
                  <GPImportExportButton/>
                </div>
                  <CustomPlusIconButton title="Add New Recipe" url="/new-recipe"/>
                
           </div>

           <div className='recipes-search-container'>
                 <GPSearchFilterCard/>
           </div>

           <div className='recipes-extra-container'>
                 <GPCard classes="recipes-card-styles">
                      {
                        recipes ? <GPCustomTable
                                    data={_recipeData}
                                    columns={_recipeTableColumns}
                                    actions={[
                                      {
                                        icon:()=> <GPCheckBox/>,
                                        tooltip: 'Select Row',
                                        onClick: (event, rowData) => {
                                          // Do save operation
                                        }
                                      }
                                    ]}
                        /> :<div className='recipes-not-found-container'>
                        <div style={{marginBottom:"15px"}}>
                            No Recipes Found
                        </div>
                        <CustomPlusIconButton title="Add One Now" url="/new-recipe"/>

                      </div>
                      }
                 </GPCard>
           </div>

        </div>
    </GPLayout>
  )
}

export default Recipes