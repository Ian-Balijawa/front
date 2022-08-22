import React from 'react'
import CustomPlusIconButton from '../../components/CustomPlusIconButton/CustomPlusIconButton'
import GPBlockButton from '../../components/GPBlockButton/GPBlockButton'
import GPCard from '../../components/GPCard/GPCard'
import GPImportExportButton from '../../components/GPImportExportButton/GPImportExportButton'
import GPLayout from '../../components/GPLayout/GPLayout'
import GPSearchFilterCard from '../../components/GPSearchFilterCard/GPSearchFilterCard'


import './recipes.css'

const Recipes = () => {
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
                      <div className='recipes-not-found-container'>
                        <div style={{marginBottom:"15px"}}>
                            No Recipes Found
                        </div>
                        <CustomPlusIconButton title="Add One Now" url="/new-recipe"/>

                      </div>
                 </GPCard>
           </div>

        </div>
    </GPLayout>
  )
}

export default Recipes