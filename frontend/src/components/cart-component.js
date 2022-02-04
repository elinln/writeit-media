import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';



export default function Cart(props) {
    const { cartItems, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const alert = useAlert()

    const saveCart = () => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log(cartItems)
    }

    useEffect(() => {
        alert.show(<div style={{ color: 'whitesmoke' }}>You can choose by signing up to recieve our newsletter and monthly discounts, or continue as a guest...</div>)
    }, [alert]);

    return (
        <aside >
            <h1 style={{ color: "#FFDD8F", marginLeft: "20%", padding: "3%", width: "50%" }}>Cart </h1>
            <div>
                {cartItems.length === 0 && <div style={{ color: "#FFDD8F", marginLeft: "20%", padding: "3%", width: "50%" }}> <h3>Cart is empty</h3></div>}
                {cartItems.map((item) => (
                    <div style={{ marginTop: "2%", borderRadius: "20px", color: "white", backgroundColor: "#FFDD8F", marginLeft: "20%", padding: "3%", width: "50%" }} key={item.id}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div> <strong>{item.title}</strong></div>
                            <div>
                                <Button variant="light" onClick={() => onRemove(item)} >
                                    Remove
                                </Button>{' '}
                            </div>
                        </div>
                        <div>
                            <strong>
                                {item.qty} x {item.price.toFixed(2)}kr
                            </strong>
                        </div>
                        <div style={{ padding: "2%" }}>
                            {item.description}
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div style={{ marginLeft: "20%", padding: "3%", width: "50%" }}>
                            <div>
                                <strong>Total Price</strong>
                            </div>
                            <div>
                                <strong>{itemsPrice.toFixed(0)} SEK</strong>
                            </div>
                        </div>
                        <hr />
                        <div style={{ marginLeft: "20%", padding: "3%", width: "50%" }}>
                            <form action="/create-checkout-session" method="POST">
                                <input name="cartItems" type="hidden" value={JSON.stringify(cartItems)}></input>
                                <Button variant="success" onClick={() => { saveCart() }} type="submit">
                                    To Checkout
                                </Button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}