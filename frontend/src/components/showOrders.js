import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Orders = props => (

    <tr>
        <td>{props.orders.username}</td>
        <td>{props.orders.title}</td>
        <td>{props.orders.description}</td>
    </tr >
)


export default class ShowOrder extends Component {
    arr = [];

    constructor(props) {
        super(props);
        this.customerOrders = this.customerOrders.bind(this);

        this.state = { orders: [], users: [] };
    }

    componentDidMount() {
        /* axios.get("http://localhost:3000/orders")
            .then(response => {
                this.setState({ orders: response.data })
            })
            .catch((error) => {
                console.log(error)
            }) */

        axios.get("http://localhost:3000/users")
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch((error) => {
                console.log(error)
            })

        this.customerOrders()
    }

    warningToast() {
        toast.warn('You have no orders! Navigate through "Our services" to make one.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }



    customerOrders() {
        const localName = localStorage.getItem('username');
        this.arr = [];

        for (let i = 0; i < this.state.orders.length; i++) {
            if (this.state.users[i].username === localName) {
                this.arr.push(this.state.orders[i])
                console.log(this.state.orders[i])
            }
        }

        return this.arr.map(usersOrder => {
            return <Orders orders={usersOrder}
                key={usersOrder._id}>
            </Orders>
        })

    }


    render() {
        return (
            <div style={{ border: "rgb(219 205 135 / 38%) solid 2px", padding: "20px", backgroundColor: "#eddd9163", color: "#4f3737", margin: "10%" }} className="list row">
                <div>
                    <h3>My orders</h3>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.customerOrders()}
                        </tbody>
                    </table>
                    <ToastContainer></ToastContainer>
                </div>
            </div >
        );
    }
}