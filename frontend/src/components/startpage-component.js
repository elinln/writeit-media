import { Component } from "react";
import Bollar from "../assets/writeithej.png";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "../App.css";



export default class Startpage extends Component {

    render() {
        return (
            <div style={{ margin: "2%" }}>

                <h1 style={{ color: "#FFDD8F", marginLeft: "20%", padding: "3%", width: "50%" }}>
                    <b>
                        write <br></br>
                        IT <br></br>
                        media
                    </b>
                </h1>
                <div style={{ display: "flex", justifyContent: "center", flexFlow: "column" }}>
                    <img style={{ top: "0", maxWidth: "100%" }} alt="info-flow" src={Bollar} ></img>
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
                    <Link to={"/services"}>
                        <Button style={{ border: "solid 2px #FFDD8F", color: "#FFDD8F", backgroundColor: "white" }} size="lg"><b>See our different packages</b></Button>
                    </Link>
                </div>
                <div className="startImage">
                </div>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "5%", color: "#FFDD8F" }}>
                    <h1 style={{ fontSize: "7em", maxWidth: "100%" }}> Our mission</h1>
                    <h4>We want you to enjoy your website-experience as much as we do, no matter how small or big your business is.</h4>
                    <h4>Our goal is to make our clients happy, as your wish is our command.</h4>
                    <Link to={"/FAQ"}>
                        <Button style={{ fontSize: "17px", marginTop: "10%", border: "solid 2px #FFDD8F", color: "white", backgroundColor: "#FFDD8F" }} size="lg"><b>Read more about us and find out about how it works</b></Button>
                    </Link>
                </div>
            </div>
        )
    }
}

