import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Grid } from '@mui/material';
import EmployeeTabs from './Tabs/EmployeeTabs';
import EmployeeRolesTabs from './Tabs/EmployeeRolesTabs';
import './settingStyles.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};   

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="SettingsWrapper" sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "970px" }}>

      <div className="settingsIndexTabs" sx={{flex: 1,}}>
        <Tabs className="verticalTabs" orientation="vertical"  value={value} onChange={handleChange} aria-label="Vertical tabs example" sx={{}}>
          <Tab className="Tab" label="Employees" {...a11yProps(0)} />
          <Tab className="Tab" label="Employee Roles" {...a11yProps(1)} />
          <Tab className="Tab" label="Reports" {...a11yProps(2)} />
        </Tabs>
      </div>

      <Grid fullWidth className="verticalTabsPane" sx={{}}>
        <TabPanel fullWidth sx={{m: 0, p: 0}} value={value} index={0}>
          <EmployeeTabs />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EmployeeRolesTabs />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Grid>
    </Box>
  );
}
