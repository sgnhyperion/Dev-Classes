import ProductCard from "./ProductCard";
import "./Products.css";
import { useEffect, useState } from "react";

function Products() {
  // const products = [
  //     {
  //     id: 1,
  //     title: "Apple iPhone 14",
  //     price: "Rs. 1,00,000"
  //     },
  //     {
  //     id: 2,
  //     title: "Apple iPhone 13",
  //     price: "Rs. 70,000"
  //     },
  //     {
  //     id: 3,
  //     title: "Google Pixel 7",
  //     price: "Rs. 50,000"
  //     },
  //     {
  //     id: 4,
  //     title: "Nokia 1100",
  //     price: "Rs. 2,000"
  //     },
  //     {
  //     id: 5,
  //     title: "Samsung Galaxy S10",
  //     price: "Rs. 1,00,000"
  //     },
  //     {
  //     id: 6,
  //     title: "Sony Xperia S10",
  //     price: "Rs. 1,00,000"
  //     }
  //     ];

  let [products, setProducts] = useState([]);
  console.log("products");
//   console.log(useWindowSize());
  useEffect(() => {
    fetch("https://run.mocky.io/v3/0912a49d-ab8c-4aa2-9363-d1d21fd3f66a")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setProducts(res);
      });
  }, []);

  return (
    <div className="products">
      <div>I am Products</div>
      {products.map(function (item,index) {
        return <ProductCard key={index}  product={item} />;
      })}
    </div>
  );
}

export let a = 10; // named export {mapping of a:10 and b:20} => when we import the key variable should be same
export let b = 20;
export default Products;

// JSX => Java Script
