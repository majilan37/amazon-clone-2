import { Button, Divider, Grid, Paper, Rating, Typography } from "@mui/material"
import { CardElement ,useElements, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react"
import CurrencyFormat from "react-currency-format"
import { useHistory } from "react-router"
import axios from "../../../assets/axios"
import { getBasketTotal } from "../../../assets/reducer"
import { useStateValue } from "../../../assets/StateProvider"
import { useStyles } from "./style"
import {db} from '../../../firebase'
import { setDoc, doc, serverTimestamp } from "firebase/firestore"


function CheckoutItem({title, text, basketItems, paymentMethod}) {
    const [{basket, user}, dispatch] = useStateValue()

    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState(false)
    const [succeeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState('')

    const classes = useStyles()
    const stripe = useStripe()
    const elements = useElements()
    const history = useHistory()

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method:'post',
                url:`/checkout/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [basket])

    console.log('The secret is =>', clientSecret);

    const removeFromBasket = (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)

         await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            
            setDoc(doc(db,'users', `${user.uid}`, 'orders', `${paymentIntent.id}` ), {
                basket: basket,
                amount: paymentIntent.amount,
                timestamp: serverTimestamp(),
                created: paymentIntent.created,
            }, {merge: true});

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            history.replace('/orders')
            dispatch({
                type: 'EMPTY_BASKET',
            })
        })
    }
    const onCardChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '')
    }
    return (
        <>
            <Grid container spacing={3} >
                <Grid className={classes.gridItemTitle} item>
                    <Typography variant='h6' >{title}</Typography>
                </Grid>
                <Grid className={classes.gridItem} item>
                    {text && <Typography variant='h6' gutterBottom>{text}</Typography>}
                    {basketItems && (
                        <>
                            {basket?.map((item, index) => (
                                <div className={classes.paperContainer}>
                                    <Paper className={classes.paper} key={index} elevation={5} variant='outlined'>
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
                        </>
                    )}
                    {paymentMethod && (
                        <form onSubmit={handleSubmit} className={classes.form}>
                            <CardElement onChange={onCardChange} />
                            <Paper className={classes.paymentPaper}>
                                <CurrencyFormat
                                    value={getBasketTotal(basket)} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'} 
                                    renderText={(value) => (
                                        <Typography variant="h6" gutterBottom>
                                            <span> Order Total ({basket.length} items): </span>
                                            <strong> Pay {value}</strong>
                                        </Typography>
                                    ) }
                                />
                                <Button type="submit" disabled={disabled || processing || succeeded} variant='contained' color="primary" >
                                    <Typography variant='body2' >
                                        {processing ? 'processing' : `Pay${' $'+getBasketTotal(basket)}`} 
                                    </Typography>
                                </Button>
                                {error && <div>{error}</div>}
                            </Paper>
                        </form>
                    )}
                </Grid>
            </Grid>
            <Divider /> 
        </>
    )
}

export default CheckoutItem
