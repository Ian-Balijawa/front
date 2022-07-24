import * as React from 'react';
import { Box, Grid, Button, ButtonGroup, Tab, Container, Typography } from '@mui/material';
import { ArrowLeft, ArrowRight, ContentPasteGo } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import ERTable from '../Table/ERTable';
import TabPanel from '@mui/lab/TabPanel';
import './styles.css';

export default function EmployeeTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box className="employeeTabListBox" sx={{ borderBottom: 1, borderColor: 'divider', width: '750px' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{m: '0px', p: '0px'}}>
            <Tab label="Active" value="1" />
            <Tab label="Archived" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid container className="RolesTabButtonGroups">
                <Grid item xs >
                  <span className="topPagination">
                      <Typography variant="body1" sx={{mr:1, color: '#7a7a7a', fontSize:'14px'}}>4 Results</Typography>
                      <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                      <Button className="leftArrowButton"><ArrowLeft sx={{color: '#7a7a7a'}}/></Button>
                      <Button className="pageRangeButton">1-4</Button>
                      <Button className="rightArrowButton"><ArrowRight sx={{color: '#7a7a7a'}}/></Button>
                      </ButtonGroup>
                      <Typography variant="body1" sx={{ml:1, fontSize: "14px", color: '#000'}}>20 PER PAGE</Typography>
                    </span>
                </Grid>
                <Grid item>
                    <ButtonGroup className="importExportButtonGroup" variant="outlined">
                    <Button className="importButton" startIcon={<ContentPasteGo />}>Import</Button>
                    <Button className="exportButton" startIcon={<ContentPasteGo />}>Export</Button>
                    </ButtonGroup>
                </Grid>
          </Grid>
          <Grid className="employeeSetupTableWrapper" fulWidth>
              <ERTable />
          </Grid>
          <Grid container className="lowerSettingsButtons">
                <Grid item xs>
                    <Button className="LSBaddRole" variant="outlined" href="/addrole" color="error" startIcon={<AddIcon />}>New Employee Role</Button>
                    <Button className="LSBeditRole" variant="outlined" href="/editrole" color="error" sx={{ml:2}}>Edit</Button>
                </Grid>
                <Grid item></Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">Archived</TabPanel>
      </TabContext>
    </Box>
  );
}
