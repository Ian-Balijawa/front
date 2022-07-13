import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CottageIcon from '@mui/icons-material/Cottage';
import InventoryIcon from '@mui/icons-material/Inventory';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import useStyles from "./AllStyles";
import logo from '../../resources/Images/LogoLight.svg';

const DashboardLayout = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    return(
      <div className={classes.mainDivContainer}>
        <div className={classes.sideBar}>
            <div className={classes.logoWrapper}>
                <img className={classes.logo} src={logo} alt="GOLDPOS logo" />
            </div>
            <div>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Bake My Day" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <CottageIcon style={{ color: 'white' }}/>
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <InventoryIcon style={{ color: 'white' }}/>
                    </ListItemIcon>
                    <ListItemText primary="Inventory" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <TextSnippetIcon style={{ color: 'white' }}/>
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <SettingsApplicationsIcon style={{ color: 'white' }}/>
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </List>
              </Collapse>
            </div>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.topNavBar}>nav bar here</div>
          <div className={classes.contentArea}>content here</div>
        </div> 
      </div>
    )
}

export default DashboardLayout
