import { Container, Typography } from "@mui/material"
import { useStateValue } from "../../assets/StateProvider"
import { useStyles } from "./Checkout.style"
import CheckoutItem from "./CheckoutItem/CheckoutItem"

function Checkout() {
    const [{basket}, dispatch] = useStateValue()
    const classes = useStyles()
    return (
        <div>
            <div className={classes.checkoutTitleContainer}>
                <Typography variant="h3" className={classes.checkoutTitle} >Checkout ({basket.length} items)</Typography>
            </div>
            <Container>
                <CheckoutItem title='Delivery Address' text='123 React Lane Los Angeles, CA' />
                <CheckoutItem title='Review items & delivery' basketItems />
                <CheckoutItem title='Payment Method' paymentMethod/>
            </Container>
        </div>
    )
}

export default Checkout
