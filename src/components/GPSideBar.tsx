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

const links = [
    {
        name: 'Home',
        path: '/dashbord/index',
        icon: <HomeIcon />,
        component: <Home />,
    },
    {
        name: 'Inventory',
        path: '/inventory',
        icon: <Inventory2OutlinedIcon />,
        component: <Inventory />,
    },
    {
        name: 'Sales',
        path: '/sales',
        icon: <SsidChartOutlinedIcon />,
        component: <Sales />,
    },
    {
        name: 'Reports',
        path: '/reports',
        icon: <DescriptionOutlinedIcon />,
        component: <Reports />,
    },
    {
        name: 'Settings',
        path: '/settings',
        icon: <SettingsOutlinedIcon />,
        component: <Settings />,
    },
]

function GPSideBar() {
    const { pathname } = useLocation()
    return (
        <Box sx={{ background: '#18191d', maxWidth: 240,height: '98vh',display: 'grid',gridTemplateRows: '100px 90px 1px auto'}}>
            {logoSection()}
            {select()}
            <Divider variant="fullWidth" sx={{ background: '#666' }} />
            {navLinks()}
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
                            <MenuItem value=""><em>None</em></MenuItem>
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
