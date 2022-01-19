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
                    <Accordion.Item eventKey="0" style={{ color: "black" }} >
                        <Accordion.Header> Who are we?</Accordion.Header>
                        <Accordion.Body>
                            Write It Media, run by Elin and Johanna, is a newly started company with only a few weeks experience in the business. We are at the moment students at Vocational universities, starting the company as a parttime business that we hope we can go on with after graduating university. Elin is studying Webdevelopement at Medieinstutitet and Johanna is studying Digital Analytics Specialist at IHM.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" style={{ color: "black" }}>
                        <Accordion.Header>How did we end up here? </Accordion.Header>
                        <Accordion.Body>
                            What started with a strong friendship since (almost) birth, developed into a relationship where we understood our individual skills and how both our strengths and weaknesses complement eachother. We both got requests to do work for other companies before we even started our own, that's when we knew that if we wanted to actually help others, we had to start with ourselves. All of a sudden, Write It Media was born. The name origins from when we went the last year at high school together, our course in entrepreneurship had us make a company of our own (what is called UF). We decided to sell pencils around school for students who were about to make tests and for companies supplies, therefore the name Write It. A few years later when we had to decide for a name of our new business, we thought the name actually fitted quiet good with the IT in the middle, just added Media (to make it a little more clear about what the company does) and there you have it.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" style={{ color: "black" }}>
                        <Accordion.Header> How do I know wich package to choose from? </Accordion.Header>
                        <Accordion.Body>
                            If you dont know wich package to choose from, you can always book a consultation with us. We will discuss your needs and figure out together wich package suits you best. For newly started companies, we recommend to start with the Website Small. You can upgrade or downgrade to any other sized package whenever you want.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" style={{ color: "black" }}>
                        <Accordion.Header> What happens after i make an order? </Accordion.Header>
                        <Accordion.Body>
                            The first thing that happens after you make an order is that we will be in contact with you. We will decide on color schemes, design matters, deadlines and the content of the website. We want your website to perfect just for you!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" style={{ color: "black" }}>
                        <Accordion.Header> How long will it take to get my website? </Accordion.Header>
                        <Accordion.Body>
                            It all depends on wich package you choose. The approximate time for each package says in the packages description. The time said in the description is the time it takes for us to make the website,so keep in mind that the consultations and prep-work is not included in that time range.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        )
    }

}

