const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JOrCRH2MDO0OCdZw7giM5woh9z70R2ve9ma5f53PN2LEjvyht7o3c8Cw8cMicv0OSSgvKal6vXRyHrkLzG36qHw00Er1vSSYB')

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('hello world')
})

app.get('/majilan', (req, res) => {
    res.status(200).send('hi majilan')
})

app.post('/checkout/create', async (req, res) => {
    const total = req.query.total
    console.log('payment request recieved for this amount', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
        
    })
})

exports.api = functions.https.onRequest(app)

//http://localhost:5001/react-clone-f1d2c/us-central1/api