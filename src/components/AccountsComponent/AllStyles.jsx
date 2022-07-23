import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(theme => ({
    loginWrapper: {
        width: '400px',
        position: 'fixed',
        top: '30%',
        left: '40%',
        marginTop: '-100px',
        marginLeft: '-100px',
    },
    box: {
        backgroundColor: '#FFFEFE',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: '5px',
    },
    logoWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '306px',
        height: '54px',
        margin: '10px 0',
    },
    title: {
        marginBottom: '15px',
    },
    form: {
        margin: '10px',
    },
    userInput: {
        height: '25px',
        marginBottom: '20px',
        marginTop: '1px',
    },
    loginLink: {
        float: 'right',
        textDecoration: 'none !important',
        color: '#E46036 !important',
    },
    loginButton: {
        background: '#35B858 !important',
        outline: 'none',
        border: 'none',
        margin: '10px 0px !important',
    },
    loginOthers: {
        marginTop: '30px',
    },
    loginotherLink: {
        textDecoration: 'none !important',
        color: '#E46036 !important',
    },
    signupWrapper: {
        width: '400px',
        position: 'fixed',
        top: '18%',
        left: '40%',
        marginTop: '-100px',
        marginLeft: '-100px',
    },
    signupBox: {
        backgroundColor: '#FFFEFE',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: '5px',
    },
    signupButton: {
        background: '#E46036 !important',
        outline: 'none !important',
        border: 'none !important',
    },
    signupPara: {
        lineHeight: '15px',
    },
    signupLink: {
        textDecoration: 'none',
        color: '#E46036',
    },
    passButton: {
        background: '#35B858 !important',
        outline: 'none !important',
        border: 'none !important',
        marginBottom: '20px !important',
    },
}))

export default useStyles
