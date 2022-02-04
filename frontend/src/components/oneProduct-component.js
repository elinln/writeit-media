import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Product(props) {

    const { product, onAdd } = props;

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", flexWrap: "wrap" }}>
            <div className="oneProduct" style={{ backgroundColor: "#FFDD8F", display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", width: "75%" }}>
                <Card style={{ margin: "1%", width: "50%", border: "solid 2px #FFDD8F", flexDirection: "column", display: "flex", borderRadius: "10px" }}>
                    <Card.Body>
                        <Card.Title>
                            {product.title}
                        </Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            {product.price}kr
                        </Card.Text>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <Button onClick={() => onAdd(product)} style={{ backgroundColor: "#FFDD8F", border: "solid 2px #FFDD8F", width: "80%" }}>
                                <Link style={{ textDecoration: "none", color: "white" }} to={"/cart"}>
                                    <b>Go to payment</b>
                                </Link>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}