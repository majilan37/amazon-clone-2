import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme) => ({
    container:{
        padding: 20 ,
        display: 'flex',
        flexDirection: 'column',
    },
    topContainer:{
        padding: 20 ,
        display: 'flex',
        alignItems: 'center'
    },
    imgWrapper: {
        height : 'auto',
        maxWidth: '100%',
        position: 'relative',
    },
    imgAd:{
        objectFit: 'contain',
        height: '100%',
        width: '100%',
    },
    paper:{
        margin: '0 10px',
        flexGrow: 1,
        padding: '20px',
        minWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
    },
    proceedBtn:{
        background: '#febd69 !important',
        textTransform :'none !important',
        // color: '#222 !important',
    }
}))