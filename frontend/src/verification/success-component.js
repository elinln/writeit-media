import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";


export default class Success extends Component {
    constructor(props) {
        super(props);
        this.notifySuccess = this.notifySuccess.bind(this);

        this.state = {
            username: "",
            email: "",
            description: "",
            title: "",
            price: null,
            id: null,
            published: false,
            orders: [],
            orderedItems: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/users")
            .then(response => {
                this.setState({ allUsers: response.data })
                console.log(this.state.allUsers)
                this.sendOrderToDB()
            })
            .catch((error) => {
                console.log(error)
            })

        /* const orderedItems = localStorage.getItem('cartItems');
        this.setState({
            orderedItems: localStorage.getItem('cartItems')
        })

        for (let i = 0; i < this.state.allUsers.length; i++) {
            if (this.state.allUsers[i].username === localName) {
                this.arr.push(this.state.allUsers[i])
                console.log(this.state.allUsers[i])
            }
        } */


    }

    sendOrderToDB() {
        const orderedItems = localStorage.getItem('cartItems');
        const localName = localStorage.getItem('username');
        const email = localStorage.getItem('email');
        console.log(localName, email, orderedItems)


        this.setState({
            localName: localStorage.getItem('username'),
            email: localStorage.getItem('email'),
            orderedItems: JSON.parse(localStorage.getItem('cartItems')),
            newOrder: [...this.state.orderedItems, ...[this.state.orders]]
        })

        console.log(this.state.orderedItems)

        const orders = {
            username: this.state.localName,
            email: this.state.email,
            description: this.state.orderedItems.description,
            title: this.state.orderedItems.title,
            price: this.state.orderedItems.price,
            id: this.state.orderedItems.id,
            published: true
        }


        console.log(typeof (this.state.newOrder))

        console.log(typeof (this.state.orderedItems))

        axios.post("http://localhost:3000/checkout/create", orders)
            .then(response => {
                console.log(response.data);
                this.newOrder()
                this.notifySuccess()
            })
            .catch(e => {
                console.log(e);
            })
    }

    newOrder() {
        this.setState({
            username: "",
            email: "",
            description: "",
            title: "",
            price: null,
            id: null,
            published: false,
        })
    }

    seeOrderName() {
        /* 
                const localName = localStorage.getItem('username');
                this.arr = [];
        
                for (let i = 0; i < this.state.tutorial.length; i++) {
                    if (this.state.tutorial[i].username === localName) {
                        this.arr.push(this.state.tutorial[i])
                        console.log(this.state.tutorial[i])
                    }
                } */
    }

    notifySuccess() {
        toast.success('Order completed!', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    render() {
        return (
            <div style={{ color: "#FFDD8F", marginLeft: "20%", padding: "3%", width: "50%" }}>
                <h1 style={{ color: "#FFDD8F", marginTop: "8%" }}>
                    Your order was successful!
                </h1>
                <h2>We will be in contact with you within 2-3 business days.</h2>
                <b>
                    <p>After making an order, the rest of the contact with Write It Media will be through E-mail, phone or meetings.</p>
                </b>
                <div>
                    <Link to={"/showOrder"}>
                        <Button >
                            See your order-details
                        </Button>
                    </Link>
                </div>
                <ToastContainer />
            </div>

        )
    }
}