import React from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './header/Header.js';
const port = process.env.PORT || 3000;

function App() {

  return (
    <div>
      <Router>
        <Header />
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

