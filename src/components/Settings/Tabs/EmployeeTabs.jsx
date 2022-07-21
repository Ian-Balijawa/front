import * as React from 'react';
import { Box, Grid, Button, ButtonGroup, Tab, Container, Typography } from '@mui/material';
import { ArrowLeft, ArrowRight, ContentPasteGo } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import ESetup from '../Table/ESetup';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import './styles.css';

export default function EmployeeTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <Box>
      <TabContext value={value}>
        <Box className="employeeTabListBox" sx={{ borderBottom: 1, borderColor: 'divider', width: '750px' }} component="div">
          <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{m: '0px', p: '0px'}}>
            <Tab label="Active" value="1" />
            <Tab label="Archived" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Grid container className="employeeTabButtonGroups" sx={{ml: '-10px'}}>
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
                    <Button className="importButton" startIcon={<ContentPasteGo sx={{color: '#7a7a7a'}}/>}>Import</Button>
                    <Button className="exportButton" startIcon={<ContentPasteGo sx={{color: '#7a7a7a'}}/>}>Export</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
            <Grid className="employeeSetupTableWrapper" fulWidth>
                <ESetup />
            </Grid>
            <Grid container className="lowerSettingsButtons">
                <Grid item xs>
                    <Button className="LSBaddRole" variant="outlined" href="/addrole" color="error" startIcon={<AddIcon className="addroleIcon"/>}>New Employee Role</Button>
                    <Button className="LSBeditRole"variant="outlined" color="error" sx={{ml:2}}>Edit</Button>
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
        </TabPanel>
        <TabPanel value="2">Archived</TabPanel>
      </TabContext>
    </Box>
    </div>
  );
}
