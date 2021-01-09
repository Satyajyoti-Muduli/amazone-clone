const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { request } = require('express');
const { response } = require('express');
const stripe = require("stripe")('sk_test_51I5RZrFJ6hrMuI6GXJzi5nGM9bHF69w5AlmzftHGRBRnn6GNu0xwG6RaRUJEiIkvPyEexaN8D8IGYUNj04pQUP4S00C6WlRDuM')


const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!!', total)
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)

//http://localhost:5001/e-challenge-96d8f/us-central1/api