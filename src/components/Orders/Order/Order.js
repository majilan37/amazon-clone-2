import { Divider, Paper, Rating, Typography } from '@mui/material'
import { useStyles } from './Order.style'
import moment from 'moment'

function Order({order}) {
    const {basket, amount, timestamp, created} = order.data
    const classes = useStyles()
    console.log(created);
    return (
        <Paper className={classes.paper} elevation={3}>
            <Typography variant='subtitle2' >{moment.unix(created).format('MMM Do YYY, h:mma')}</Typography>
            <Typography variant='caption'>{order.id}</Typography>
            {basket.map((item, index) => (
                <div key={index} className={classes.paperContainer}>
                    <img className={classes.productImg} src={item.image} alt="" />
                    <div className={classes.productInfo}>
                        <Typography variant='body1' gutterBottom>{item.title}</Typography>
                        <strong>{'$'+item.price}</strong>
                        <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                    </div>
                    <Divider />
                </div>
            ))}
        </Paper>
    )
}

export default Order
