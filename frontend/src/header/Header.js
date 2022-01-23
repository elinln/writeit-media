import React from "react";
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import '../App.css';
import Startpage from '../components/startpage-component';
import FAQ from '../components/aboutUs-component';
import ContactUs from '../components/contactPage-component';
import Cart from '../components/cart-component';
import Products from '../components/listofproducts-component';
import Team from '../components/team-component';
import References from '../components/reference-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/writeit.png';
import data from '../data';


const Header = () => {
    const { products } = data;

    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    return (
        <div>
            <Router>
                <div>
                    <div>
                        <Navbar className="appHeader" responsive="true" expand={false} >
                            <Container fluid>
                                <div>
                                    <Link to="/cart" style={{ color: "white" }}>
                                        <li className="fas fa-shopping-cart"></li>
                                    </Link>
                                </div>
                                <Navbar.Brand style={{ display: "flex", justifyContent: "center", padding: "0", margin: "0" }} href="/"> <img style={{ height: "4em", width: "auto", margin: "0" }} alt="Logga" src={Logo} ></img></Navbar.Brand>
                                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                                <Navbar.Offcanvas
                                    id="offcanvasNavbar"
                                    aria-labelledby="offcanvasNavbarLabel"
                                    placement="end"
                                >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id="offcanvasNavbarLabel">write IT media</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body style={{ display: "flex", flexDirection: "column", }}>
                                        <Link to={"/"} style={{ padding: "12px", textDecoration: "none", color: "black" }}>
                                            Start
                                        </Link>
                                        <Link to={"/FAQ"} style={{ padding: "12px", textDecoration: "none", color: "black" }}>
                                            FAQ
                                        </Link>
                                        <Link to={"/contactUs"} style={{ padding: "12px", textDecoration: "none", color: "black" }}>
                                            Contact us
                                        </Link>
                                        <Link to={"/cart"} style={{ padding: "12px", textDecoration: "none", color: "black" }}>
                                            Cart
                                        </Link>
                                        <Link to={"/services"} style={{ padding: "12px", textDecoration: "none", color: "black" }}>
                                            Our services
                                        </Link>
                                        <Link to={"/references"} style={{ padding: "12px", textDecoration: "none", color: "black" }}>
                                            Clients & Partners
                                        </Link>
                                        <Link to={"/team"} style={{ padding: "12px", textDecoration: "none", color: "black" }}>
                                            Leadership Team
                                        </Link>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                        </Navbar>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path="/FAQ" component={FAQ} />
                            <Route exact path={"/"} component={Startpage} />
                            <Route exact path={"/contactUs"} component={ContactUs} />
                            <Route path={"/cart"} children={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
                            <Route path={"/services"} children={<Products products={products} onAdd={onAdd} />} />
                            <Route exact path={"/references"} component={References} />
                            <Route exact path={"/team"} component={Team} />
                        </Switch>
                    </div>
                </div >
            </Router>
        </div>
    )

}

export default Header;