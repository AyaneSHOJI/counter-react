import { useState } from 'react';
import './Counter.css';

function Counter(){
    const [countValue, setCountValue] = useState(0);
    const [bgColor, setBgColor] = useState("bg-color-green");

    const increaseCount = () => {
        if(countValue === 15) return;

        const newCountValue = countValue + 1;

        setCountValue(newCountValue);
        if(newCountValue >= 13){
            setBgColor("bg-color-red");
        }
    };

    const decreaseCount = () => {
        if(countValue === 0) return;

        const newCountValue = countValue - 1;
        
        setCountValue(newCountValue);
        if(newCountValue < 13){
            setBgColor("bg-color-green");
        }
    }
    
    return (
        <div className="container">
            <div className={`counterContainer  ${bgColor}`}>
                <div className="countValueDiv">
                    <h1 className="countValue">{countValue}</h1>
                </div>
                <div className="btn-group">                   
                    <button className="btn btn-primary my-3" onClick={decreaseCount}>-</button>       
                    <button className="btn btn-primary my-3" onClick={increaseCount}>+</button>     
                </div>
            </div>
        </div>
        
    )
}

export default Counter;