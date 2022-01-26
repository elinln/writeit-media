/* import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";
import PaymentForm from "./paymentForm.js";

const PUBLIC_KEY = "pk_test_51KGORrBgzzK8jGLEiaCxOCUM9Hc72UsO39zVDjXgnWhCxiLPmPc0aiWjg0vyBs9Xf6XJ2sIr6nVtTFqRQ0LwTNGg00tZiF00bk"

const stripePromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="App">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
            )}
        </div>
    );

} */

/* import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./paymentForm"

const PUBLIC_KEY = "pk_test_51KGORrBgzzK8jGLEiaCxOCUM9Hc72UsO39zVDjXgnWhCxiLPmPc0aiWjg0vyBs9Xf6XJ2sIr6nVtTFqRQ0LwTNGg00tZiF00bk"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
} */