// Pourquoi on ne peut pas faire setCount(count + 1) ?

import { useState } from 'react';
import './Counter.css';

const Counter = () =>{
    //Définir l'état de base
    //const [count(=20), setCountValue] = useState(0);
   
    //Evenements avec le btn +
    const increaseCount = () => {

        //NG
        //setCountValue(count + 1);
        //Good
        //setCountValue((prevCount) => prevCount + 1)
    };

    //Evenements avec le btn -
    const decreaseCount = () => {
        
        //NG
        //setCountValue(count - 1);
        //Good
        //setCountValue((prevCount) => prevCount - 1)
    }
    
    return (
        <div className="container">
            
            <div className= "counterContainer">
                <div className="countValueDiv">
                    {/* Afficher le nombre 
                    <h1 className="countValue">{countValue}</h1>*/}
                </div>
                <div className="btn-group">
                    {/* Relier les actions de btn avec onClick() */}
                    <button className="btn btn-primary my-3" onClick={decreaseCount}>-</button>       
                    <button className="btn btn-primary my-3" onClick={increaseCount}>+</button>     
                </div>
            </div>
        </div>
        
    )
}

export default Counter;