import { Button, Container, Paper, Typography } from "@mui/material"
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from "../../assets/reducer"
import { useStateValue } from "../../assets/StateProvider"
import { useStyles } from "./Basket.style"
import { useHistory } from 'react-router'
import ShoppingBasket from "./ShoppingBasket/ShoppingBasket"

function Basket() {
    const classes = useStyles()
    const [{basket}, dispatch] = useStateValue()
    const history = useHistory()
    return (
        <div className={classes.container} >
            <div className={classes.topContainer}>
                <div className={classes.imgWrapper}>
                    <img className={classes.imgAd} src="https://bit.ly/3Fr5Jrz" alt="" />
                </div>
                <Paper className={classes.paper}>
                    <Typography variant="body1" gutterBottom>
                        <CurrencyFormat
                            value={getBasketTotal(basket)} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'$'} 
                            renderText={(value) => (
                                <Typography variant="subtitle1">
                                    <span>Subtotal ({basket?.length} items) </span>
                                    <strong>{value}</strong>
                                </Typography>
                            ) }
                        />
                    </Typography>
                    <Button 
                        disabled={!basket.length} 
                        className={classes.proceedBtn} 
                        onClick={() => history.push('/checkout')} 
                        variant='contained' 
                        color='warning' 
                        // style={!basket.length && {background : 'lightgray'} }
                    >
                        Proceed to checkout
                    </Button>
                </Paper>
            </div>
            <ShoppingBasket />
        </div>
    )
}

export default Basket
