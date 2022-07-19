import { makeStyles } from '@mui/styles';
import { fontSize, width } from '@mui/system';

const SRoleStyles = makeStyles((theme) => ({
    SettingsRoles: {
        flex: '4',
        backgroundColor: 'white',
    },
    SettingsRolesForm: {
        width: '90%',
        marginLeft: '20%',
        marginTop: '8%',

    },
    formStack: {
        marginTop: '15px',
    },
    RoleInput: {
        width: '575px',
        marginLeft: '1.7em',
    },
    RoleCurrency: {
        marginLeft: '1.7em',
        marginTop: '2px',
        position: 'absolute',
        backgroundColor: '#EEEEEE',
        fontSize: '16px !important',
        width: 'inherit'
    },
    RadioLabelGroup1: {
        display: 'flex',
        alignItems: 'flex-start',
        marginLeft: '82px'
    },
    RadioLabel: {
        display: 'block',
        marginLeft: '5em',
        marginTop: '3px',
    },  
    RadioLabels: {
        marginLeft: '-60px',
    },
    RoleDefaultPay: {
        marginLeft: '4em'
    },
    rolesTable: {
        width: '600px',
        marginTop: '20px',
        height: '200px',
        backgroundColor: 'orange',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10px',
    },
}));

export default SRoleStyles;