import './App.css';
import { Component } from "react/cjs/react.production.min";
import Startpage from './components/startpage-component';
import AboutUs from './components/aboutUs-component';
import ContactUs from './components/contactPage-component';
import Cart from './components/cart-component';
import Products from './components/bookings-component';
import References from './components/reference-component';
import React from "react";
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from './assets/writeit.png';


export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <div>
            <Navbar className="appHeader" responsive="true" expand={false} >
              <Container fluid>
                <div></div>
                <Navbar.Brand style={{ color: "white", display: "flex", justifyContent: "center" }} href="/"> <img style={{ height: "100px", width: "auto", margin: "0" }} alt="Logga" src={Logo} ></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">write IT media</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body style={{ display: "flex", flexDirection: "column" }}>
                    <Link to={"/"} style={{ padding: "12px", textDecoration: "none", color: "black" }}>
                      Start
                    </Link>
                    <Link to={"/aboutUs"} style={{ padding: "12px", textDecoration: "none", color: "black" }}>
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
                      Our references
                    </Link>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </div>
          <div>
            <Switch>
              <Route exact path="/aboutUs" component={AboutUs} />
              <Route exact path={"/"} component={Startpage} />
              <Route exact path={"/contactUs"} component={ContactUs} />
              <Route exact path={"/cart"} component={Cart} />
              <Route exact path={"/services"} component={Products} />
              <Route exact path={"/references"} component={References} />
            </Switch>
          </div>
        </div >
      </Router>
    );
  }
}

