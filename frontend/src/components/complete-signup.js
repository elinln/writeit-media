import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from 'react-router-dom';

export default function Complete() {

    return (
        <div>
            <div style={{ color: "#FFDD8F", marginLeft: "20%", padding: "5%", width: "70%" }}>
                <h1 >
                    <b>
                        You are signed in!
                    </b>
                </h1>
                <h2>
                    <b>
                        You can now continue to browse the page and make an order.
                    </b>
                </h2>

            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to={"/"}>
                    <Button variant="success">
                        Continue to browse
                    </Button>
                </Link>
            </div>
        </div >

    )
}