import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme) => ({
    container:{
        padding:'50px 0',
        display:'flex',
        flexDirection:'column',
    },
    imgContainer:{
        position: 'relative',
        margin: '10px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImg:{
        margin: 'auto !important',
        objectFit: 'contain',
        height: '50px'
    },
    paper:{
        padding: '30px 20px',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '10px'
    },
    textField:{
        marginBottom: '10px !important',
        flex: 1,
        width: '100%',
    },
    signInBtn:{
        textTransform: 'none !important',
        margin: '10px 0 !important'
    },
    btnText:{
        letterSpacing: '1px !important',
        fontWeight: '550 !important',
    }
}))