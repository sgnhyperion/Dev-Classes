import {useState, useEffect} from 'react';


function Effect(){
    let[count, setcount] = useState(0);
    let[count1, setcount1] = useState(0);
    
    useEffect(function(){console.log("count changed")}, [count])
    useEffect(function(){console.log("count1 changed")}, [count1])

    
    return(
        <div>
            <button onClick={()=>{setcount(count+1)}}>button 1</button>
            <p>{count}</p>
            <button onClick={()=>{setcount1(count1+1)}}>button 2</button>
            <p>{count1}</p>
            {/* Effect */}
        </div>
    );
}

export default Effect;


// Empty dependency array = only once mounting
// No dependency array = Mounting + Rendering
// with state 