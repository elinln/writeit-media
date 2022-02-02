import React from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './header/Header.js';
import CookieConsent from "react-cookie-consent";


function App() {

  return (
    <div>
      <Router>
        <Header />
        <CookieConsent debug={true}>
          This site uses cookies. See our privacy policy for more.</CookieConsent>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

