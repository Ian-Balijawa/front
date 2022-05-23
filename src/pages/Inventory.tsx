import { Card, CardActionArea, CardContent, CardMedia, Divider, Grid, IconButton, menuItemClasses, Paper, Stack, Typography } from '@mui/material'
import {Link} from "react-router-dom"
import Box from '@mui/material/Box/Box'
import React from 'react'
import GPAppBar from '../components/GPAppBar'
import GPMain from '../components/GPMain'
import GPSideBar from '../components/GPSideBar'
import search from "../resources/Images/search.svg"
import special from "../resources/Images/special.svg"
import vendor from "../resources/Images/vendor-returns.svg"
import add from "../resources/Images/add.svg"
import orders from "../resources/Images/orders.svg"
import { display } from '@mui/system'
const itemsmenu = [
  {
    icon: search,
    text: "ItemSearch",
  },
  {
    icon: "",
    text: "NewItem",
  },
  {
    icon: "",
    text: "ImportItems",
  },
  {
    icon: "",
    text: "VariableItems",
  },
]
const ordersmenu = [
  {
    icon: orders,
    text: "Purchase Orders",
  },
  {
    icon: add,
    text: "NewOrder",
  },
  {
    icon: vendor,
    text: "Vendor Returns",
  },
  {
    icon: special,
    text: "Special Orders",
  },
]

function Inventory() {
  return (
      <Box sx={{ display: 'grid', margin: '0'}}>
          <GPAppBar />
          <GPSideBar />
          <GPMain>
            <Box sx={{
              display: "grid",
              alignItems: "end",
            }}>
              <Box >
                <Typography variant='h6' mb="10px" sx={{color: "#777"}}>ITEMS</Typography>
                <Divider />
                <Stack  direction='row' spacing={2} sx={{ mt: "20px"}}>
                  <Card variant='outlined' sx={{height: "10%", width: "auto"}}>
                  <CardActionArea>
                    <CardContent sx={{display: "grid", justifyItems: "center"}}>
                      <img src={search} alt="Add Item" className='svg' />
                      <Box sx={{ display: "grid", alignContent: "center"}}>
                        <Typography  variant="caption"
                        sx={{fontSize: "1rem", display: "grid", wordWrap: "normal"}} p="14px" color="#666" component="h5">
                          Item Search
                        </Typography>
                      </Box>
                      
                    </CardContent>
                  </CardActionArea>
                  </Card>
                  <Card variant='outlined' sx={{height: "150px", width: "150px"}}>1</Card>
                  <Card variant='outlined' sx={{height: "150px", width: "150px"}}>1</Card>
                  <Card variant='outlined' sx={{height: "150px", width: "150px"}}>1</Card>
                </Stack>
              </Box>
              {/* <Box>2</Box>
              <Box>3</Box> */}
            </Box>
              {/* <Typography variant="subtitle1" component="h6">
                  ITEMS
              </Typography>
              <Divider />
              <Grid mt={0} sx={{}} container spacing={2}>
                  <Grid container spacing={2}>
                      {itemsmenu.map(item => itemsMenu(item))}
                  </Grid>
              </Grid>
              <Box sx={{background: 'red'}}>
                  <Typography mt={3} variant="h6" component="h6">
                      PURCHASING ORDERS
                  </Typography>
                  <Divider />
                  <Grid mt={0} sx={{}} container spacing={2}>
                      <Grid container spacing={2}>
                          {ordersmenu.map(menuitem => itemsMenu(menuitem))}
                      </Grid>
                  </Grid>
              </Box> */}
          </GPMain>
      </Box>
  )


 

  function itemsMenu(item: { icon: any; text: any }) {
    return <Grid item>
      <Card
        variant='outlined'
        sx={{
          height: 120,
          width: 120,
          display: 'grid',
          justifyItems: 'center',
          gridTemplateRows: '5fr .2fr'
        }}
      >
        <Box display='grid' alignItems='end'>
          <IconButton>
            <img src={item.icon} alt="logo" style={{ height: '43px' }} />
          </IconButton>
        </Box>

        <CardContent>
          <Typography textAlign='center' variant="subtitle1" color="text.primary" component="div">
            {item.text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  }
}

export default Inventory