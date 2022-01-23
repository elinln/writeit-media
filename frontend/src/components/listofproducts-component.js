/* import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; */
import React from "react";
import Product from './oneProduct-component';

export default function Products(props) {

    const { products, onAdd } = props;

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
            <div>
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </div >

    )
}
