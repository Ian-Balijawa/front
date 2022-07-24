import DashboardLayout from "../Dashboard";
import SettingsIndex from '../../Settings/SetttingsIndex';
import Header from "../Header";
import ButtonsSaveChanges from '../HeaderComponents/ButtonsSaveChanges';
import ButtonSaveStartNew from '../HeaderComponents/ButtonSaveStartNew';
import SearchBar from '../HeaderComponents/SearchBar';
import { Grid } from "@mui/material";
import { Add } from "@mui/icons-material";

const Settings = () => {
    return(
        <DashboardLayout>
            <div>
                <Header>
                    <Grid container fullWidth sx={{ borderBottom: 'solid 1px #7A7A7A', padding: '8px'}}>
                        <Grid item xs></Grid>
                        <Grid item>
                            <SearchBar />
                        </Grid>
                        <Grid item xs></Grid>
                    </Grid> 
                </Header>
                <SettingsIndex />
            </div>
        </DashboardLayout>
    )
}

export default Settings
