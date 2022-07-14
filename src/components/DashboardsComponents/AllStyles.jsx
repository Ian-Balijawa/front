import { makeStyles } from '@mui/styles';
import { padding } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    mainDivContainer: {
        display: 'flex',
    },
    sideBar: {
        width: '20%',
        height: '1080px',
        backgroundColor: '#18191D',
        padding: '20px',
        color:'white'
    },
    mainContent: {
        width: '80%'
    },
    topNavBar: {
        height: '87px',
        backgroundColor: '#FFFFFF'
    },
    contentArea: {
        backgroundColor: '#E5E5E5',
        height: '993px'
    },
    logoWrapper: {
        width: '200px',
        height: '55px'
    },
    logo: {

    },
    dashboardIcons: {
        width: '25px',
        height: '25px',
        marginRight: '5px'
    },
    bakeMyDay: {
        // borderBottom: '1px solid grey'
    }
}));

export default useStyles;
