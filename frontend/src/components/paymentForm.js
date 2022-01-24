import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from 'react';


export default function PaymentForm() {

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:3000/payment", {
                    amount: 1000,
                    id,
                    headers: { "Content-Type": "application/json" },
                    method: "POST",
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("An error has been made.", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <div style={{ marginLeft: "20%", padding: "5%", width: "70%", background: "#FFDD8F" }} >
                        <CardElement />
                        <button>Pay</button>
                    </div>
                </form>
                :
                <div style={{ color: "#FFDD8F", marginLeft: "20%", marginTop: "10%", padding: "5%", width: "70%" }}>
                    <h2>Thank you! We will be in contact with you within 2-3 business days.</h2>
                </div>
            }

        </>
    )
}