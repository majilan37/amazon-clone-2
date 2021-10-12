import { Button, Grid, Paper, Rating, Typography } from "@mui/material"
import { useStyles } from "./styles"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../../../assets/StateProvider";

function BannerProducts({id, image, title, price, isLargeGrid, rating}) {
    const classes = useStyles()
    const [{}, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                image:image,
                title: title,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <>
            <Grid className={classes.gridItem} item xs={`${isLargeGrid && 12}`} lg={`${isLargeGrid ? 12 : 6}`}>
                <Paper className={classes.paper} variant='outlined' >
                    <div>
                        <Typography variant='body1' gutterBottom>{title}</Typography>
                        <CurrencyFormat 
                            value={price} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'$'} 
                            renderText={(value) => (
                                <Typography variant="subtitle1">
                                    <strong>{value}</strong>
                                </Typography>
                            ) }
                        />
                        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                    </div>
                    <img className={classes.productImg} src={image} alt="" />
                    <br />
                    <Button onClick={addToBasket} variant='outlined' className={classes.addToBasketBtn} color='warning'  >
                        <Typography className={classes.btnText} variant='body2' >Add to basket</Typography>
                    </Button>
                </Paper>
            </Grid>
        </>
    )
}

export default BannerProducts
