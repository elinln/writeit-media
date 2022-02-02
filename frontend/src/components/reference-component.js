import { Component } from "react/cjs/react.production.min";

export default class References extends Component {


    render() {
        return (
            <div>
                <div>
                    <h1 style={{ color: "#FFDD8F", marginLeft: "20%", padding: "5%", width: "50%" }}>
                        <b>
                            Clients & <br></br>
                            Partners
                        </b>
                    </h1>
                </div>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", marginLeft: "15%", padding: "3%", width: "70%", border: "solid 1px lightgray", alignItems: "center", color: "darkgray", fontSize: "20px" }}>
                    <img style={{ width: "auto", height: "8em", padding: "3%" }} src="https://nmqdj.beeweb-blue.io/wp-content/uploads/2021/11/logo-blue.png" alt="expresslogo" ></img>

                    <p>
                        <b>
                            Write It Media has only been active for a couple of weeks, so we proudly present that our first client is Expresscare. One of the leading companies to provide with Covid-19 PCR and antigen tests.
                        </b>
                    </p>

                </div>
            </div>
        )
    }

}