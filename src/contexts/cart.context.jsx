import {createContext, useState, useEffect} from "react";

const addCartItem = (cartItems, productToAdd) => {

    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    // if found, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        );
    }

    //  return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find cart item to remove
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    // check if quantity equal to 1, if it is - remove that item from the cart
    if(existingCartItem.quantity === 1) {
        return cartItems.filter( item => item.id !== cartItemToRemove.id);
    }
    // return back cartItems with matching cart item with reduced quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
            {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        );
    }
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {

        const newCartCounter = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCounter);

    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, cartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}