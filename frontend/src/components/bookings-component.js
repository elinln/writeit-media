import { Component } from "react/cjs/react.production.min";
import Card from 'react-bootstrap/Card';
import ProductsJson from '../services.json';
import Button from 'react-bootstrap/Button';
import { /* ToastContainer */ toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Products extends Component {
    constructor(props) {
        super(props)

        this.saveProduct = this.saveProduct.bind(this);

        this.state = {
            cart: "",
            item: []
        }
    }

    saveProduct() {
        this.notifySuccess()
        const { item } = this.state;

        localStorage.setItem('Cart', item)
        console.log(this.item)
    }

    notifySuccess() {
        toast.success('Added to cart!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }

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
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", flexWrap: "wrap" }}>
                    {ProductsJson.products.map((item, i) => (
                        <div key={item.id} style={{ backgroundColor: "#FFDD8F", display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", width: "75%" }}>
                            <Card style={{ margin: "1%", width: "50%", border: "solid 2px #FFDD8F", flexDirection: "column", display: "flex" }}>
                                <Card.Body>
                                    <Card.Title>
                                        {item.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Card.Text>
                                        {item.price}kr
                                    </Card.Text>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                        <Button onClick={this.saveProduct()} style={{ backgroundColor: "#FFDD8F", border: "solid 2px #FFDD8F", width: "80%" }}>
                                            <b>Add to cart</b>
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
                {/* <ToastContainer></ToastContainer> */}
            </div >

        )
    }

}