

// domain/.netlify/functions/create-payment-intent

exports.handler = async (event, context) => {
    const {cart, totalAmount, shippingFee} = JSON.parse(event.body)
    console.log(cart)
    return {
        statusCode: 200,
        body: JSON.stringify(cart)
    }
}