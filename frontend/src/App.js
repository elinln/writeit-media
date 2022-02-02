import React from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './header/Header.js';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CookieConsent from "react-cookie-consent";


const PUBLIC_KEY = "pk_test_51KGORrBgzzK8jGLEiaCxOCUM9Hc72UsO39zVDjXgnWhCxiLPmPc0aiWjg0vyBs9Xf6XJ2sIr6nVtTFqRQ0LwTNGg00tZiF00bk"

const stripePromise = loadStripe(PUBLIC_KEY)

function App() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <Router>
          <Header />
          <CookieConsent debug={true}>
          This site uses cookies. See our privacy policy for more.
            </CookieConsent>
          <div>
            <Footer />
          </div>
        </Router>
      </Elements>
    </div>
  );
}

export default App;

