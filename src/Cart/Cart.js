// import React, { useState } from 'react';
// import { useSelector, useDispatch } from "react-redux";

// function Cart(){
//     // useSelector((state) => {
//     //     return state.items[product.id]?.quantity || 0;
//     // })

//     const cart = useSelector((state) => {
//         return state.items;
//     });
//     return (
//         <div>
//             <h1>Cart</h1>
//             {Object.keys(cart).length === 0 ? (<p>Your cart is empty</p>):
//             (<ul>
//                 {Object.keys(cart).map((key) => {
//                     const item = cart[key];
//                     return (
//                         <li key={item.id}>
//                             {item.title} - Quantity: {item.quantity}
//                         </li>
//                     )
//                 })}
//             </ul>
//         )}
//         </div>
//     );
// }

// export default Cart;

import { useSelector } from "react-redux";

function Cart() {
    let cart = useSelector((state) => {
        return state.cart.items;
    })
    return (
        <div>
            <ul>
            {
                Object.values(cart).map((item) => {
                    return (<li key={item.id}>{item.title}</li>)
                })
                }
            </ul>
        </div>
    )
}

export default Cart;