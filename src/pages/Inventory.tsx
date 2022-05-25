import {
    Card,
    CardActionArea,
    CardContent,
    Divider,
    Stack,
    Typography,
} from '@mui/material'
import {
  GPAddIcon,
  GPAttributes,
  GPBrandsIcon,
  GPCategoriesIcon,
  GPImportIcon,
  GPOrdersIcon,
  GPSearchIcon,
  GPSpecialOrdersIcon,
  GPVariablepdtsIcon,
  GPVendorRtrnsIcon,
  GPVendorsIcon,
} from '../components/GPIconsBase'
import Box from '@mui/material/Box/Box'
import GPAppBar from '../components/GPAppBar'
import GPMain from '../components/GPMain'
import GPSideBar from '../components/GPSideBar'
import Categories from './Categories'
import Attributes from './Attributes'
import Brands from './Brands'
import Vendors from './Vendors'



const itemsmenu = [
    {
        icon: GPSearchIcon,
        text: 'Item Search',
    },
    {
        icon: GPAddIcon,
        text: 'New Item',
    },
    {
        icon: GPImportIcon,
        text: 'Import Items',
    },
    {
        icon: GPVariablepdtsIcon,
        text: 'Variable Items',
    },
]

const ordersmenu = [
    {
        icon: GPOrdersIcon,
        text: 'Purchase Orders',
    },
    {
        icon: GPAddIcon,
        text: 'New Order',
    },
    {
        icon: GPVendorRtrnsIcon,
        text: 'Vendor Returns',
    },
    {
        icon: GPSpecialOrdersIcon,
        text: 'Special Orders',
    },
]

const categoriesmenu = [
    {
        icon: GPCategoriesIcon,
        name: 'Categories',
        path: 'dashboard/inventory/categories',
        component: <Categories />,
    },
    {
        icon: GPVendorsIcon,
        name: 'Vendor',
        path: 'dashboard/inventory/vendor',
        component: <Vendors />,
    },
    {
        icon: GPBrandsIcon,
        name: 'Brands',
        path: 'dashboard/inventory/brands',
        component: <Brands />,
    },
    {
        icon: GPAttributes,
        name: 'Attributes',
        path: 'dashboard/inventory/attributes',
        component: <Attributes />,
    },
]

function Inventory() {
    return (
        <Box sx={{display: 'grid', margin: '0'}}>
            <GPAppBar />
            <GPSideBar />
            <GPMain>
                <Box sx={{alignItems: 'end', overflowX: 'hidden'}}>
                    <Box>
                        <Typography
                            variant="body1"
                            mb="10px"
                            sx={{color: '#666', fontWeight: 'bold'}}
                        >
                            ITEMS
                        </Typography>
                        <Divider />
                        <Stack direction="row" spacing={2} sx={{mt: '20px'}}>
                            {itemsmenu.map(el => {
                                return itemsMenu(el)
                            })}
                        </Stack>
                    </Box>
                    <Box>
                        <Typography
                            variant="body1"
                            mb="10px"
                            mt={4}
                            sx={{color: '#666', fontWeight: 'bold'}}
                        >
                            PURCHASING ORDERS
                        </Typography>
                        <Divider />
                        <Stack direction="row" spacing={2} sx={{mt: '20px'}}>
                            {ordersmenu.map(el => {
                                return ordersMenu(el)
                            })}
                        </Stack>
                    </Box>
                    <Box>
                        <Typography
                            variant="body1"
                            mb="10px"
                            mt={4}
                            sx={{color: '#666', fontWeight: 'bold'}}
                        >
                            INVENTORY SETTINGS
                        </Typography>
                        <Divider />
                        <Stack direction="row" spacing={2} sx={{mt: '20px'}}>
                            {categoriesmenu.map(el => {
                                return categoriesMenu({el})
                            })}
                        </Stack>
                    </Box>
                </Box>
            </GPMain>
        </Box>
    )

    function categoriesMenu({
        el,
    }: {
        el: {icon: string; name: string; path: string; component: JSX.Element}
    }): JSX.Element {
        return (
            <Card
                variant="outlined"
                sx={{
                    boxShadow: '-4px 4px 10px 1px #eee',
                    height: '170px',
                    width: '50%',
                    whiteSpace: 'normal',
                }}
            >
                <CardActionArea>
                    <CardContent sx={{display: 'grid', justifyItems: 'center'}}>
                        <img src={el.icon} alt="Add Item" className="svg" />
                        <Box sx={{display: 'grid', alignContent: 'center'}}>
                            <Typography
                                variant="caption"
                                sx={{
                                    fontSize: '1.0rem',
                                    display: 'grid',
                                    textAlign: 'center',
                                    whiteSpace: 'normal',
                                }}
                                pt="20px"
                                color="#444"
                                component="h6"
                            >
                                {el.name}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }

    function ordersMenu(el: {icon: string; text: string}): JSX.Element {
        return (
            <Card
                variant="outlined"
                sx={{
                    boxShadow: '-4px 4px 10px 1px #eee',
                    height: '170px',
                    width: '50%',
                }}
            >
                <CardActionArea>
                    <CardContent sx={{display: 'grid', justifyItems: 'center'}}>
                        <img src={el.icon} alt="Add Item" className="svg" />
                        <Box sx={{display: 'grid', alignContent: 'center'}}>
                            <Typography
                                variant="caption"
                                sx={{
                                    fontSize: '1.0rem',
                                    display: 'grid',
                                    textAlign: 'center',
                                    wordWrap: 'normal',
                                }}
                                p="23px"
                                color="#444"
                                component="h6"
                            >
                                {el.text}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }

    function itemsMenu(el: {icon: string; text: string}): JSX.Element {
        return (
            <Card
                variant="outlined"
                sx={{
                    boxShadow: '-4px 4px 10px 1px #eee',
                    height: '170px',
                    width: '50%',
                }}
            >
                <CardActionArea>
                    <CardContent sx={{display: 'grid', justifyItems: 'center'}}>
                        <img src={el.icon} alt="Add Item" className="svg" />
                        <Box sx={{display: 'grid', alignContent: 'center'}}>
                            <Typography
                                variant="caption"
                                sx={{
                                    fontSize: '1.0rem',
                                    display: 'grid',
                                    textAlign: 'center',
                                    wordWrap: 'normal',
                                }}
                                p="23px"
                                color="#444"
                                component="h6"
                            >
                                {el.text}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}
export default Inventory
