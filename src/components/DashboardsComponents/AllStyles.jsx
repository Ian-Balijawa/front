import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(theme => ({
    mainDivContainer: {
        display: 'flex',
    },
    sideBar: {
        width: '20%',
        height: '1080px',
        backgroundColor: '#18191D',
        padding: '20px',
        color: 'white',
    },
    mainContent: {
        width: '80%',
    },
    topNavBar: {
        height: '87px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10px',
    },
    contentArea: {
        backgroundColor: '#E5E5E5',
        height: '993px',
    },
    logoWrapper: {
        width: '200px',
        height: '55px',
    },
    logo: {},
    dashboardIcons: {
        width: '25px',
        height: '25px',
        marginRight: '5px',
    },
    bakeMyDay: {},
    dashboardLink: {
        textDecoration: 'none',
        color: 'white',
    },
    dashboardLinkActive: {
        backgroundColor: '#E46036',
    },
}))

export default useStyles
