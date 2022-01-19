import { Component } from "react/cjs/react.production.min";
import Card from 'react-bootstrap/Card';


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
                        <Card style={{ width: "50%", border: "solid 2px #FFDD8F", flexDirection: "column", display: "flex" }}>
                            <Card.Body>
                                <Card.Title>
                                    Johanna Albo
                                </Card.Title>
                                <Card.Text>
                                    Lite om Johanna
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "50%" }}>
                        <Card style={{ width: "50%", border: "solid 2px #FFDD8F", flexDirection: "column", display: "flex" }}>
                            <Card.Body>
                                <Card.Title>
                                    Elin Nilsson
                                </Card.Title>
                                <Card.Text>
                                    Lite om Elin
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div >
        )
    }

}