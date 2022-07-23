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
                </Header>
                <SettingsIndex />
            </div>
        </DashboardLayout>
    )
}

export default Settings
