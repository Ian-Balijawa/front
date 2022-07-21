import { useLocation, useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import useStyles from "./AllStyles";

const Header = ({children}) => {

    const classes = useStyles()

    const location = useLocation();
    let navigate = useNavigate();

    let pathNames = location.pathname.split('/').filter(x => x)
    console.log(pathNames,'yessoo')

    return(
        <div>
            <div className={classes.topNavBar}>
                <Breadcrumbs aria-label="breadcrumb">
                    {/* <Link color="inherit" onClick={() => navigate('/dashboard')}>
                        Home
                    </Link> */}
                    {
                        pathNames.map((name,index) => {
                            const routeTo = `${pathNames.slice(0, index + 1).join('/')}`
                            const isLast = index === pathNames.length - 1
                            return(
                                isLast ?
                                <Typography>{name}</Typography>
                                :
                                <Link color="inherit" onClick={() => navigate(routeTo)}>
                                {name}
                                </Link> 
                            )
                        })
                    }
                </Breadcrumbs>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default Header
