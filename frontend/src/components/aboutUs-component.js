import { Component } from "react/cjs/react.production.min";
import Accordion from 'react-bootstrap/Accordion';
import '../App.css';


export default class FAQ extends Component {


    render() {
        return (
            <div >
                <div style={{ color: "#FFDD8F", marginLeft: "20%", padding: "3%", width: "50%" }}>
                    <h1 >
                        <b>
                            FAQ <br></br>

                        </b>
                    </h1>
                    <h3>
                        <b>
                            Everything you need to know and more...
                        </b>
                    </h3>
                </div>

                <Accordion defaultActiveKey={['0']} style={{ padding: "2%", margin: "7%", backgroundColor: "#FFDD8F", color: "white" }}>
                    <Accordion.Item eventKey="0" style={{ color: "#FFDD8F" }} >
                        <Accordion.Header> Who are we?</Accordion.Header>
                        <Accordion.Body>
                            <b>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </b>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" style={{ color: "#FFDD8F" }}>
                        <Accordion.Header>How did we end up here? </Accordion.Header>
                        <Accordion.Body>
                            <b>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </b>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" style={{ color: "#FFDD8F" }}>
                        <Accordion.Header>What happens after i make an order? </Accordion.Header>
                        <Accordion.Body>
                            <b>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </b>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" style={{ color: "#FFDD8F" }}>
                        <Accordion.Header>How do I know wich package to choose from? </Accordion.Header>
                        <Accordion.Body>
                            <b>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </b>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        )
    }

}

