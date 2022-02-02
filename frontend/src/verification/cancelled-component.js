import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";


export default function Cancelled() {


    return (
        <div style={{ color: "#FFDD8F", marginLeft: "20%", padding: "3%", width: "50%" }}>
            <h1 style={{ color: "#FFDD8F", marginTop: "8%" }}>
                Your order was cancelled...</h1>
            <b>
                <h3>This might have been because you exited the page or our servers might not respond. If you have any questions, do not hesitate to contact us here: </h3>
                <br></br>
                <Link to={"/contactUs"}>
                    <Button variant="success">
                        Contact us
                    </Button>
                </Link>
            </b>
        </div>

    )
}