import {CartContext} from "../../contexts/cart.context";
import {useContext} from "react";

import './checkout.styles.scss';

const Checkout = () => {
    const {cartItems, addItemToCart} = useContext(CartContext);

    return (
        <div>
            <h1>I am a checkout page</h1>
            <div>
                {cartItems.map(cartItem => {
                    const {id, name, quantity} = cartItem;

                    return (
                        <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <br/>
                            <span>Decrement</span>
                            <br/>
                            <span onClick={() => addItemToCart(cartItem)}>Increment</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Checkout;