import { makeStyles } from '@mui/styles';

const IndexStyles = makeStyles((theme) => ({
    SettingsWrapper: {
        // marginTop: "20px"
    },
    VerticalTab: {
        "& .MuiTabs-vertical": {
            color: 'orange !important',
          },
        
          "& .Mui-selected": {
            textDecoration: "underline",
            color: "orange !important",
          }
    },
}));

export default IndexStyles;