import './App.css';
import { Component } from "react/cjs/react.production.min";
import Startpage from './components/startpage-component';
import AboutUs from './components/aboutUs-component'
import React from "react";
import { Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
  

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", backgroundColor: "#f5d487", color: "white" }}>
          <h1> write IT media</h1>

          <Link to={"/aboutUs"} style={{ padding: "12px", textDecoration: "none", color: "white" }}>
            Om oss
          </Link>
          <Link to={"/start"} style={{ padding: "12px", textDecoration: "none", color: "white" }}>
            Startsida
          </Link>


          <div>
            <Switch>
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/start" component={Startpage} />
            </Switch>
          </div>

          
    
  
     <Footer />
  

        </div>
      </Router>
     
  
    );
    
  }
}




  
