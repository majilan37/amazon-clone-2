import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    imageListItem:{
        width: '120px',
        position: 'relative',
        padding: '10px 15px',
    },
    imgLogo:{
        marginTop: '10px' ,
        objectFit: 'contain',
        objectPosition:'center center',
    },
    appBar:{
        background:'#222 !important',
    },
    toolbar:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonGroup:{
        textTransform: 'lowercase',
        color: '#fff',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
    },
    button:{
        display: 'flex',
        flexDirection: 'column',
    },
    typography:{
        fontSize: '11px !important',
        opacity: 0.8,
        textTransform: 'none !important',
    },
    typography2:{
        fontSize: '14px !important',
        marginRight: 'auto !important',
        fontWeight: '600 !important',
    },
    buttonIcon:{
        width: '50px',
        height: '50px',
    },
    span:{
        fontSize:'15px',
        marginLeft: '5px'
    }
}))