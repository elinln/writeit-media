import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./paymentForm.js";

const PUBLIC_KEY = "pk_test_51KGORrBgzzK8jGLEiaCxOCUM9Hc72UsO39zVDjXgnWhCxiLPmPc0aiWjg0vyBs9Xf6XJ2sIr6nVtTFqRQ0LwTNGg00tZiF00bk"

const stripePromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}