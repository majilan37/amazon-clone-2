import { useEffect, useState } from "react";
import { useStyles } from "./Orders.styles"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useStateValue } from "../../assets/StateProvider";
import { Container, Typography } from "@mui/material";
import Login from "../Login/Login";
import Order from './Order/Order.js'

function Orders() {
    const [{basket, user}, dispatch] = useStateValue()
    const [orders, setOrders] = useState([])
    const classes = useStyles()
    useEffect(() => {
        const getOrders = async () => {
            const collectionRef = collection(db,'users', `${user?.uid}`, 'orders')
            const querySnap = query(collectionRef, orderBy('timestamp', 'desc'))

            onSnapshot(querySnap, (querySnapshot) => {
                const dataArr = []
                console.log(querySnapshot)
                querySnapshot.forEach((doc) => {
                    dataArr.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })
                setOrders(dataArr)
            })
            console.log(orders);
        }
        getOrders();
    }, [user])

    if (!user) return <Login />
    return (
        <Container style={{marginTop: '20px'}}>
            <Typography variant='h4' gutterBottom >Your orders {user.email} </Typography>
            {orders?.map((order, index) => { 
                return (
                    <Order key={index} order={order} />
                )
            })}
        </Container>
    )
}

export default Orders
