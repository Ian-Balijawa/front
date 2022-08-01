import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import Logo from './Logo'
import {NEW_RECIPE} from '../constants/routes'
import {useLocation} from 'react-router-dom'

const SideBar = ({drawerWidth}) => {
    const {pathname} = useLocation()

    console.log(pathname)
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    background: '#18191D',
                    color: 'white',
                    padding: '1rem',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Logo />
            <Box
                sx={{
                    padding: '8px',
                    background: '#303034',
                    margin: '5px 10px',
                    borderRadius: '2px',
                }}
            >
                <Typography variant="paragraph">Bake My Day</Typography>
            </Box>
            <Divider />
            <List>
                {['Home', 'Inventory', 'Reports', 'Settings'].map(
                    (text, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                sx={{
                                    color: 'white',
                                    '&:hover': {
                                        background: '#E46036',
                                    },
                                    background:
                                        pathname === NEW_RECIPE &&
                                        text === 'Inventory'
                                            ? '#E46036'
                                            : '#18191D',
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: 'white',
                                    }}
                                >
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
        </Drawer>
    )
}

export default SideBar
