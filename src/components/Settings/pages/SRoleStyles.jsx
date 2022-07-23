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
        marginLeft: '82px',
        marginBottom :'10px',
        marginTop: '15px'
    },
    RadioLabelGroupCashier1: {
        display: 'flex',
        alignItems: 'flex-start',
        marginLeft: '88px',
        marginBottom :'10px',
        marginTop: '2px'
    },
    RadioLabel: {
        display: 'block',
        marginLeft: '5em',
        marginTop: '3px',
    },
    
    RadioLabels: {
        marginLeft: '-60px',
    },
    RadioLabelsCashier: {
        marginLeft: '-55px',
    },
    RoleDefaultPay: {
        marginLeft: '4em'
    },
    RadioLabelLabel: {
        
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
    userPermissions: {
        marginBottom: '-2px !important', 
        marginRight:'25px !important',
        marginLeft: '-18px !important'
    },
    userPermissionsLink: {
        color: '#e46036 !important',
        marginLeft: '11px !important'
    },
    permissionsTable: {
        width: '750px !important'
    },
}));

export default SRoleStyles;