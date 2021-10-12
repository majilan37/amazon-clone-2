import { Button, Container, CssBaseline, Paper, Rating, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useStateValue } from "../../../assets/StateProvider"
import { useStyles } from "./ShoppingBasket.style"

function ShoppingBasket() {
    const [{basket}, dispatch] = useStateValue()
    const classes = useStyles()
    const removeFromBasket = (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    const EmptyBasket = () => {
        dispatch({
            type: 'EMPTY_BASKET',
        })
    }
    return (
        <Container className={classes.container} >
            <CssBaseline />
            <Typography variant="h4">Your Shopping Basket</Typography>
            {!basket.length ? (
                <Typography variant="subtitle1">Your basket is empty, try to 
                    <Link className={classes.link} to='/' >add some</Link>
                </Typography>
            ) : (
                <>
                    {basket?.map((item, index) => (
                        <div className={classes.paperContainer}>
                            <Paper className={classes.paper} key={index} elevation={2}>
                                <img className={classes.productImg} src={item.image} alt="" />
                                <div className={classes.productInfo}>
                                    <Typography variant='body1' gutterBottom>{item.title}</Typography>
                                    <strong>{'$'+item.price}</strong>
                                    <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                                    <Button onClick={() => removeFromBasket(item.id)} variant='outlined' color='warning' className={classes.removeFromBasketBtn}>Remove from basket</Button>
                                </div>
                            </Paper>
                        </div>
                    ))}
                    <Button onClick={EmptyBasket} className={classes.emptyBasketBtn} variant="contained" color='error' >Empty basket</Button>
                </>
            )}
        </Container>
    )
}

export default ShoppingBasket
