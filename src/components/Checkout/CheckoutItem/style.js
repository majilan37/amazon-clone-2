import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme) => ({
    productImg:{
        objectFit: 'contain',
        height: '200px'
    },
    paper:{
        padding: '20px',
        margin: '5px 0 ',
        marginBottom: '20px',
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
    gridItem:{
        margin: '20px 0 !important',
        flexGrow: 1,
    },
    gridItemTitle:{
        margin: '20px 0 !important',
    },
    form:{
        flexGrow : '1 !important',
        maxWidth: '500px',
        margin: '7px 0',
    },
    paymentPaper:{
        marginTop: '10px !important',
        padding: '20px',
        backgroundColor: '#F4F4F4 !important',
    }
}))