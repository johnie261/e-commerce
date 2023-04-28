// domain/.netlify/functions/create-payment-intent
require("dotenv").config()

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY)
console.log(stripe)

exports.handler = async (event, context) => {
    if(event.body){
        const {cart, totalAmount, shippingFee} = JSON.parse(event.body)
        
        const calculateOrderAmount = () => {
            return shippingFee + totalAmount
        }
        try {
            const PaymentIntent = await stripe.paymentIntents.create({
                amount: calculateOrderAmount(),
                currency: "kes"
            })
            return {
                statusCode: 200,
                body: JSON.stringify({clientSecret: PaymentIntent.client_secret})
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({error: error.message})
            }
        }
    }
    return {
        statusCode: 200,
        body:"create payment intent"
    }
}