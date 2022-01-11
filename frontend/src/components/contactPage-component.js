import { Component } from "react/cjs/react.production.min";

export default class ContactUs extends Component {


    render() {
        return (
            <div>
                <div>
                    <h1 style={{ color: "#FFDD8F", marginLeft: "20%", padding: "3%", width: "50%" }}>
                        <b>
                            Contact <br></br>
                            Us
                        </b>
                    </h1>
                </div>
                <div style={{ padding: "2%", margin: "7%", backgroundColor: "#FFDD8F", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: "white" }}>
                    <h4>
                        <b>
                            Call us:
                        </b>
                    </h4>
                    <p>
                        <b>
                            0738 - 40 58 40
                        </b>
                    </p>
                    <h4>
                        <b>
                            Email us:
                        </b>
                    </h4>
                    <p>
                        <b>
                            writeitmedia@gmail.com
                        </b>
                    </p>
                    <h4>
                        <b>
                            You can also find us at:
                        </b>
                    </h4>
                    <p>
                        <b>
                            Aschebergsgatan 9, 41127 Gothenburg
                        </b>
                    </p>
                </div>
            </div>
        )
    }

}

