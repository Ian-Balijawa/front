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

const SideBar = ({drawerWidth}) => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    background: '#1e1414',
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
                    padding: '1rem',
                    background: 'gray',
                    margin: '5px 10px',
                    borderRadius: '4px',
                }}
            >
                <Typography variant="h5">Bake My Day</Typography>
            </Box>
            <Divider />
            <List>
                {['Home', 'Inventory', 'Reports', 'Settings'].map(
                    (text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                sx={{
                                    color: 'white',
                                    background:
                                        text === 'Inventory'
                                            ? '#ff4400'
                                            : '#1e1414',
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
