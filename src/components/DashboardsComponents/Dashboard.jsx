import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useStyles from "./AllStyles";
import logo from '../../resources/Images/LogoLight.svg';
import homeIcon from '../../resources/Images/homeIcon.svg';
import inventoryIcon from '../../resources/Images/inventoryIcon.svg';
import reportsIcon from '../../resources/Images/reportsIcon.svg';
import settingGear from '../../resources/Images/settingGear.svg';




const DashboardLayout = ({children}) => {

    const navigate = useNavigate();

    const classes = useStyles();

    const [open, setOpen] = useState(true);
    const [clicked, setclicked] = useState(false)

    const handleClick = () => {
      setOpen(!open);
    };

    const handleHomeClick = () => {
          navigate("home")      
    }

    return(
      <div className={classes.mainDivContainer}>
        <div className={classes.sideBar}>
            <div className={classes.logoWrapper}>
                <img className={classes.logo} src={logo} alt="GOLDPOS logo" />
            </div>
            <div>
            <ListItemButton 
              className={classes.bakeMyDay} 
              onClick={handleClick} 
              sx={{
                bgcolor: '#303034',  
                "&:hover": { bgcolor: '#303034'}
              }}>
              <ListItemText primary="Bake My Day" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton 
                      sx={{ pl: 4 }}
                      onClick={handleHomeClick} 
                  >
                      <img className={classes.dashboardIcons} src={homeIcon} alt="home icon" />
                      <ListItemText primary="Home" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                      <img className={classes.dashboardIcons} src={inventoryIcon} alt="inventory icon" />
                      <ListItemText primary="Inventory" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                      <img className={classes.dashboardIcons} src={reportsIcon} alt="reports icon" />
                      <ListItemText primary="Reports" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                      <img className={classes.dashboardIcons} src={settingGear} alt="setting gear" />
                      <ListItemText primary="Settings" />
                  </ListItemButton>
                </List>
              </Collapse>
            </div>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.topNavBar}>nav bar here</div>
          <div className={classes.contentArea}>{children}</div>
        </div> 
      </div>
    )
}

export default DashboardLayout
