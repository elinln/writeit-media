import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default class SignUp extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);

        this.state = {
            username: "",
            user: '',
            email: '',
            error: { username: '' },
            signedIn: false
        }
    }

    componentDidMount() {
        this._isMounted = true;
    }

    // for saving name in input to database
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    notifyError() {
        toast.error('The name or mail is either taken or you did not enter one...', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    notifySuccess() {
        toast.success('Signup completed!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }
    // for saving name to database
    onSubmit(e) {
        e.preventDefault();

        let user = {
            username: this.state.username,
            email: this.state.email,
            signedIn: true
        }

        axios.post("https://writeit-media.herokuapp.com/users/add", user)
            .then(response => {
                console.log(response.data);
                localStorage.setItem('username', user.username);
                localStorage.setItem('email', user.email)
                console.log(user.username)
                console.log(user.email)
                console.log(this.state.signedIn)
                this.setState({
                    result: response.data,
                })
                this.props.history.push("/complete-signup")
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    e: e.data
                })
                this.notifyError()
            })

        this.setState({
            username: "",
            email: "",
            signedIn: true
        })
    }



    rememberCss = {
        marginTop: "8px"
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card style={{ width: "40%", height: "auto", marginTop: "7%" }}>
                    <form className="form-control" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <Card.Title >
                            <h1 style={{ color: "#FFDD8F", marginTop: "8%" }}> Sign up to make a purchase </h1>
                        </Card.Title>
                        <Card.Body style={{ width: "50%" }}>
                            <Card.Text as="div">
                                <label style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                    Name: <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        required
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                        placeholder="Type in your name..."
                                    />
                                    <label>
                                        Email: <input
                                            type="email"
                                            className="form-control"
                                            value={this.state.email}
                                            onChange={this.onChangeEmail}
                                            placeholder="Type in your E-mail..."
                                        ></input>
                                    </label>
                                    <button className="btn btn-success" style={{ marginTop: '2rem', width: '6rem' }} type="submit" value="Create User" onClick={this.onSubmit}>
                                        Done
                                    </button>
                                </label>
                                <ToastContainer />
                            </Card.Text>
                        </Card.Body>
                    </form>
                </Card>
            </div>

        );
    }
}