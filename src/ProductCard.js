import AddtoCart from './AddtoCart';
import './ProductCard.css';
import { useRef , useState} from 'react';
import Effect from './Effects/Effect';
// import AddtoCart from './AddtoCart';
// import {useRef} from 'react';

function ProductCard({title,price}){
    // console.log({price});\
    let pRef = useRef(0);
    let iRef = useRef(0);
    let oRef = useRef(0);
    let[inputV, setInputV] = useState('class');


    // cRef.current.style.display = "none"

    function printPrice(){
        console.log("printPrice");
        console.log(pRef.current.innerText)
        if(pRef.current.style.display == "none"){
            pRef.current.style.display = "inline-block";
            // console.log(pRef.current)
        }
        else{
            pRef.current.style.display = "none";
        }
    }

    // setInput(value)
    function displayOutput(e){
        // oRef.current.innerText = `Text here :  ${iRef.current.value}`;
        // oRef.current.innerText = "Text here : " + iRef.current.value;

       setInputV(e.target.value);
    }

    return(
        // <div>{props.num}</div>
        <div className="ProductCard"><br></br>
            <p onClick={printPrice}>{title}</p>  
            <p ref={pRef}>{price} </p>
            <img src="https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=256" alt="logo" />
            <div><input type='text' onChange={displayOutput} ref={iRef} placeholder={inputV}></input></div>
            <p ref={oRef} id='text'>Text here : {inputV} </p>
            {/* <AddtoCart /> */}
            <Effect />
            </div>
    );
}

export default ProductCard;


// Hooks
// useState
// useRef
// useEffect

// custom hooks
// default hooks

// they should not render Ui
// they should be on the top of a function
// they should be not in any condition or loops

// Mounting
// Re rendering
// useState(default value)
// returns(stateVar, setterFn)
// destructuring

// unControlled component = changing value using ref
// Controlled component = changing value using stateValue => we can use this value to a child class using props  


//useEffect(fn,[]) = only state variables or props that are state variable in the parent class ca be called in useEffects