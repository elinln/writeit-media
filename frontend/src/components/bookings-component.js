import { Component } from "react/cjs/react.production.min";
import Card from 'react-bootstrap/Card';
import ProductsJson from '../services.json';
import Button from 'react-bootstrap/Button';


export default class Products extends Component {
    render() {
        return (
            <div>
                <div style={{ color: "#FFDD8F", marginLeft: "20%", padding: "5%", width: "70%" }}>
                    <h1 >
                        <b>
                            Book our services!
                        </b>
                    </h1>
                    <h2>
                        <b>
                            Choose wich package that suits you best and we will be in touch with you as soon as possible.
                        </b>
                    </h2>
                </div>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
                    {ProductsJson.products.map((item, i) => (
                        <div key={item.id} style={{ display: "flex", justifyContent: "center", flexDirection: "row", margin: "2%" }}>
                            <Card style={{ width: '18rem', margin: "2%", border: "solid 2px #FFDD8F" }}>
                                <Card.Body>
                                    <Card.Title>
                                        {item.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Card.Text>
                                        {item.price}€
                                    </Card.Text>
                                    <Button style={{ backgroundColor: "#FFDD8F", border: "solid 2px #FFDD8F" }}> <b>Add to cart</b></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div >

        )
    }

}