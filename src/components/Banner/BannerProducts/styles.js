import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme) => ({
    gridItem:{
        padding: 0,
    },
    paper:{
        padding: '1rem 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff !important',
    },
    productImg:{
        objectFit:'contain',
        height: '250px',
    },
    addToBasketBtn:{
        textTransform: 'none !important',
        backgroundColor: '#febd69 !important',
    },
    btnText:{
        color: '#222 !important',
    }
}))