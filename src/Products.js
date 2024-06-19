import ProductCard from "./ProductCard";
import './Products.css'

function Products(){
    const products = [
        {
        id: 1,
        title: "Apple iPhone 14",
        price: "Rs. 1,00,000"
        },
        {
        id: 2,
        title: "Apple iPhone 13",
        price: "Rs. 70,000"
        },
        {
        id: 3,
        title: "Google Pixel 7",
        price: "Rs. 50,000"
        },
        {
        id: 4,
        title: "Nokia 1100",
        price: "Rs. 2,000"
        },
        {
        id: 5,
        title: "Samsung Galaxy S10",
        price: "Rs. 1,00,000"
        },
        {
        id: 6,
        title: "Sony Xperia S10",
        price: "Rs. 1,00,000"
        }
        ];

    return(
        <div className="products">
            <div>I am Products</div>
            {
                products.map(function(item){
                    return <ProductCard title = {item.title} price = {item.price} />
                })
            }
            
            {/* <ProductCard num={2} price={20} />
            <ProductCard num={3} price={30} />
            <ProductCard num={4} price={40} />
            <ProductCard num={5} price={50} />
            <ProductCard num={6} price={60} /> */}
        </div>
    )
}

export let a = 10;   // named export {mapping of a:10 and b:20} => when we import the key variable should be same
export let b = 20;
export default Products;

// JSX => Java Script