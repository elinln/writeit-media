import './App.css';
import { Component } from "react/cjs/react.production.min";
import Startpage from './components/startpage-component';
import FAQ from './components/aboutUs-component';
import ContactUs from './components/contactPage-component';
import Cart from './components/cart-component';
import Products from './components/bookings-component';
import Team from './components/team-component';
import References from './components/reference-component';
import React from "react";
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from './assets/writeit.png';
import Footer from './components/Footer';
import TermsConditions from './components/termsConditions-component';
import PrivacyPolicy from './components/privacyPolicy-component';



export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
              <Navbar className="appHeader" responsive="true" expand={false} >
                <Container fluid>
                  <div></div>
                  <Navbar.Brand style={{ display: "flex", justifyContent: "center" }} href="/"> <img style={{ height: "4em", width: "auto", margin: "0" }} alt="Logga" src={Logo} ></img></Navbar.Brand>
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
                      <Link to={"/conditions"} style={{ padding: "12px", textDecoration: "none", color: "black" }}>
                        Leadership Team
                      </Link>
                      <Link to={"/privacypolicy"} style={{ padding: "12px", textDecoration: "none", color: "black" }}>
                        Privacy Policy
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
                <Route exact path={"/cart"} component={Cart} />
                <Route exact path={"/services"} component={Products} />
                <Route exact path={"/references"} component={References} />
                <Route exact path={"/team"} component={Team} />
                <Route exact path={"/conditions"} component={TermsConditions} />
                <Route exact path={"/privacypolicy"} component={PrivacyPolicy} />
              </Switch>
            </div>

          </div >



          <div>

            <Footer />
          </div>

        </Router>
      </div>
    );
  }
}

