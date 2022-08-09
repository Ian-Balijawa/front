import { useLocation, Link } from "react-router-dom";
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useStyles from "./AllStyles";
import logo from '../../resources/Images/LogoLight.svg';
import homeIcon from '../../resources/Images/homeIcon.svg';
import inventoryIcon from '../../resources/Images/inventoryIcon.svg';
import reportsIcon from '../../resources/Images/reportsIcon.svg';
import settingGear from '../../resources/Images/settingGear.svg';
import Header from "./Header";




const DashboardLayout = ({children}) => {

    const classes = useStyles();

    const location = useLocation();

    return(
      <div className={classes.mainDivContainer}>
        <div className={classes.sideBar}>
            <div className={classes.logoWrapper}>
                <img className={classes.logo} src={logo} alt="GOLDPOS logo" />
            </div>
            <div>
            <ListItemButton 
              className={classes.bakeMyDay} 
              sx={{
                bgcolor: '#303034',  
                "&:hover": { bgcolor: '#303034'}
              }}>
              <ListItemText primary="Bake My Day" />
            </ListItemButton>
                <List component="div" disablePadding>
                  <div className={location.pathname == '/dashboard' ? classes.dashboardLinkActive : ''}>
                    <Link to='/dashboard' className={classes.dashboardLink}>
                      <ListItemButton 
                          sx={{ pl: 4 }}
                      >
                          <img className={classes.dashboardIcons} src={homeIcon} alt="home icon" />
                          <ListItemText primary="Home" />
                      </ListItemButton>
                    </Link>
                  </div>
                  <div className={location.pathname == '/inventory' ? classes.dashboardLinkActive : ''}>
                    <Link to='/inventory' className={classes.dashboardLink}>
                      <ListItemButton sx={{ pl: 4 }}>
                          <img className={classes.dashboardIcons} src={inventoryIcon} alt="inventory icon" />
                          <ListItemText primary="Inventory" />
                      </ListItemButton>
                    </Link>
                  </div>
                  <div className={location.pathname == '/reports' ? classes.dashboardLinkActive : ''}>
                    <Link to='/reports' className={classes.dashboardLink}>
                      <ListItemButton sx={{ pl: 4 }}>
                          <img className={classes.dashboardIcons} src={reportsIcon} alt="reports icon" />
                          <ListItemText primary="Reports" />
                      </ListItemButton>
                    </Link>
                  </div>
                  <div className={location.pathname == '/settings' ? classes.dashboardLinkActive : ''}>
                    <Link to='/settings' className={classes.dashboardLink}>
                      <ListItemButton sx={{ pl: 4 }}>
                          <img className={classes.dashboardIcons} src={settingGear} alt="setting gear" />
                          <ListItemText primary="Settings" />
                      </ListItemButton>
                    </Link>
                  </div>
                </List>
            </div>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.contentArea}>{children}</div>
        </div> 
      </div>
    )
}

export default DashboardLayout
