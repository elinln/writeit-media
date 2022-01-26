import axios from "axios";
/* import React, { Component } from 'react';
 */import '../stripe-styling.css'

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React, { useState } from 'react'


const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

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
                    id
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button>Pay</button>
                </form>
                :
                <div>
                    <h2>We will contact you.</h2>
                </div>
            }

        </>
    )
}

/* export default class PaymentForm extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.newOrder = this.newOrder.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            username: "",
            description: "",
            title: "",
            id: null,
            published: false,
            users: [],
        }

    }

    componentDidMount() {
        this._isMounted = true;
    }

    onSubmit = () => {

        this.setState({
            localName: localStorage.getItem('username'),
            cartItems: localStorage.getItem('cartItems')
        })

        console.log(this.cartItems)

        const orders = {
            username: this.state.localName,
            description: this.state.description,
            title: this.state.title,
            published: true
        }

        console.log(orders)

        axios.post("http://localhost:3000/orders/add", orders)
            .then(response => {
                console.log(response.data);
                this.newOrder();
            })
        this.props.history.push("/verifyOrder")
            .catch(e => {
                console.log(e);
            })
    }

    newOrder() {
        this.setState({
            username: "",
            id: null,
            title: "",
            description: "",
            published: true,
        })
    }

    handleSubmit = async () => {
        const { elements, stripe } = this.props;
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            // ... SEND to your API server to process payment intent
        }
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div style={{ marginLeft: "20%", padding: "5%", width: "70%", background: "#FFDD8F" }} >
                        <CardElement />
                        <button
                            onClick={this.onSubmit}
                            className="btn btn-success"
                            type="submit"
                            value="Create order"
                        >Pay</button>
                    </div>
                </form>
            </>
        )
    }
} 
*/