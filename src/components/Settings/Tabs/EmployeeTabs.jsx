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
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Active" value="1" />
            <Tab label="Archived" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Grid container className="HomeContentButtonGroups">
                <Grid item xs >
                  <span className="topPagination">
                      <Typography variant="body1" sx={{mr:1}}>4 Results</Typography>
                      <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                      <Button><ArrowLeft /></Button>
                      <Button></Button>
                      <Button><ArrowRight /></Button>
                      </ButtonGroup>
                      <Typography variant="body1" sx={{ml:1}}>20 PER PAGE</Typography>
                    </span>
                </Grid>
                <Grid item>
                    <ButtonGroup disableElevation variant="outlined">
                    <Button startIcon={<ContentPasteGo />}>Import</Button>
                    <Button startIcon={<ContentPasteGo />}>Export</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
            <Grid fulWidth>
                <ESetup />
            </Grid>
            <Grid container className="lowerSettingsButtons">
                <Grid item xs>
                    <Button variant="outlined" href="/addrole" color="error" startIcon={<AddIcon />}>New Employee Role</Button>
                    <Button variant="outlined" color="error" sx={{ml:2}}>Edit</Button>
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
        </TabPanel>
        <TabPanel value="2">Archived</TabPanel>
      </TabContext>
    </Box>
  );
}
