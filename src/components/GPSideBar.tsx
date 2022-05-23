import {
    Box,
    Divider,
    FormControl,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Select,
} from '@mui/material'
import logo from '../resources/Images/Goldpos light-logo.svg'

import Home from '../pages/Home'
import Inventory from '../pages/Inventory'
import Sales from '../pages/Sales'
import Reports from '../pages/Reports'
import Settings from '../pages/Settings'
import { Link, useLocation } from 'react-router-dom'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import HomeIcon from '@mui/icons-material/Home'

export const links = [
    {
        name: 'Home',
        path: '/dashboard/home',
        icon: <HomeIcon />,
        component: <Home />,
        sublinks: []
    },
    {
        name: 'Inventory',
        path: '/dashboard/inventory',
        icon: <Inventory2OutlinedIcon />,
        component: <Inventory />,
        sublinks: []
    },
    {
        name: 'Sales',
        path: '/dashboard/sales',
        icon: <SsidChartOutlinedIcon />,
        component: <Sales />,
        sublinks: []
    },
    {
        name: 'Reports',
        path: '/dashboard/reports',
        icon: <DescriptionOutlinedIcon />,
        component: <Reports />,
        sublinks: []
    },
    {
        name: 'Settings',
        path: '/dashboard/settings',
        icon: <SettingsOutlinedIcon />,
        component: <Settings />,
        sublinks: []
    },
]

function GPSideBar() {
    const { pathname } = useLocation()
    return (
        <Box sx={{ position: "fixed",background: '#18191d',width: "100%", maxWidth: "240px",height: "100%",display: 'grid',gridTemplateRows: '100px 90px 1px auto'}}>
            { logoSection() }
            { select() }
            <Divider variant="fullWidth" sx={{ background: '#666' }} />
            { navLinks() }
        </Box>
    )

    
    function logoSection(): JSX.Element {
        return <Box display="grid" alignContent="center" justifyContent="center" boxSizing="border-box">
                <img className="logo" src={logo} alt="logo" />
            </Box>
    }

    function select(): JSX.Element {
        return <Box sx={{ boxSizing: 'border-box', display:"grid", justifyItems: "center"}}>
                    <FormControl sx={{ m: 0, width: '90%', svg: { color: '#707070', path: {} } }}>
                        <Select sx={{ background: '#303034',height: '45px',color: '#fff',}}>
                            <MenuItem value={10}>Mega Standard</MenuItem>
                            <MenuItem value={20}>Harris International</MenuItem>        
                            <MenuItem value={30}>GP Computer Center</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            }

    function navLinks(): JSX.Element {
        return <Box p={2} mt={2}>
            <List sx={{ display: 'grid' }}>
                {links.map(link => (
                    <Link key={link.name} to={link.path} className={pathname === link.path ? 'active' : ''} >
                        <ListItem>
                            <ListItemIcon sx={{display: 'grid',justifyContent: 'center', color: '#f7e3ca',}}>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    }
}

export default GPSideBar
