import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {PUBLISHABLE_KEY} from '../../config/auth'
const TAG = 'stripe-button.component'
const onToken = token=>{
    console.log(TAG,token)
    alert('Payment successfull')
}
const StripeCheckoutButton=({price})=>{
    const priceForStripe = price * 100 // because every price for stripe must be in cents
    
    return(
        <StripeCheckout
            label='Pay now'
            name = 'CRWN Clothing'
            billingAddress
            shippingAddress
            image ='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token ={onToken}
            stripeKey = {PUBLISHABLE_KEY}
        />
    )
}

export default StripeCheckoutButton