import { Component } from "react"
import Bollar from "../assets/writeithej.png"


export default class Startpage extends Component {

    render() {
        return (
            <div style={{ height: "800px", position: "absolute" }}>>
            
                <h1 style={{ color: "#FFDD8F", marginLeft: "20%", padding: "5%", width: "50%" }}>
                    <b>
                        write <br></br>
                        IT <br></br>
                        media
                    </b>
                </h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img style={{ top: "0" }} alt="Hej" src={Bollar} ></img>
                </div>
            </div>
        )
    }
}

