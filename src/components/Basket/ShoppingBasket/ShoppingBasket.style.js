import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme) => ({
    container:{
        marginLeft: '0rem !important',
        
    },
    productImg:{
        objectFit: 'contain',
        height: '200px'
    },
    paper:{
        padding: '20px',
        margin: '20px 0 ',
        display: 'flex',
    },
    productInfo:{
        paddingLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
    },
    removeFromBasketBtn:{
        alignSelf: 'flex-start',
        margin: '20px 0 !important',
        textTransform: 'none !important',
        fontWeight: 'bold !important'
    },
    link:{
        margin: '0 5px',
        textDecoration :'none',
        color: 'darkorange' ,
    },
    emptyBasketBtn:{
        alignSelf: 'center !important',
        // textTransform : 'none !important',
    }
}))