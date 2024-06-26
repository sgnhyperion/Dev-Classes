import { useContext } from "react";
import CartContext from "./Context/CartContext";

function AddToCart({ product }) {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  function increase() {
    increaseQuantity({ product });
  }

  function decrease() {
    decreaseQuantity(product);
  }
  const quantity = cart[product.id] ? cart[product.id].quantity : 0;
  if (quantity === 0) {
    return (
      <div>
        <button onClick={increase}>AddToCart</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={decrease}>-</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>
    );
  }
}

export default AddToCart;

// cart = Object of objects => CRUD items object to cart,
