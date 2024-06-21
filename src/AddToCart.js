import { useContext } from "react";
import CartContext from "./Context/CartContext";


function AddToCart({product}) {

  const {cart, increaseQuantity, decreaseQuantity} = useContext(CartContext);

  function increase(){
    increaseQuantity({product});
  }

  return (
    <div>
        AddToCart - {product}
    </div>
  );
}

export default AddToCart;

// cart = Object of objects => CRUD items object to cart,