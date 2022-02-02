import { Component } from "react/cjs/react.production.min";
import Card from 'react-bootstrap/Card';
import Johanna from '../assets/johanna.jpg';
import Elin from '../assets/elin.jpg';
import Image from 'react-bootstrap/Image'



export default class Team extends Component {


    render() {
        return (
            <div>
                <h1 style={{ color: "#FFDD8F", marginLeft: "20%", padding: "5%", width: "50%" }}>
                    <b>
                        Leadership Team
                    </b>
                </h1>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", width: "50%" }}>
                        <Card style={{ width: "50%", flexDirection: "column", justifyContent: "center", alignItems: "center", display: "flex" }}>
                            <Card.Body style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                <Image roundedCircle="true" thumbnail="true" style={{ height: "auto", width: "60%" }} src={Johanna} />
                                <Card.Title>
                                    Johanna Albo
                                </Card.Title>
                                <Card.Text style={{ fontSize: "12px", margin: "10%" }}>
                                    Partner and Digital Analyst Specialist <br></br>
                                    0723-612561 <br></br>
                                    johanna@writeitmedia.se
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "50%" }}>
                        <Card style={{ width: "50%", flexDirection: "column", display: "flex" }}>
                            <Card.Body style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                <Image roundedCircle="true" thumbnail="true" style={{ height: "auto", width: "60%" }} src={Elin} />
                                <Card.Title>
                                    Elin Nilsson
                                </Card.Title>
                                <Card.Text style={{ fontSize: "12px", margin: "10%" }}>
                                    Partner and Webdeveloper <br></br>
                                    0738-405840 <br></br>
                                    elin@writeitmedia.se
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div >
        )
    }

}