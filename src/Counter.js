import { useState } from 'react';
import './Counter.css';
import Button from 'react-bootstrap/Button';

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
        <div className={bgColor}>
            <div className="container">
                <div className="row">
                    <p className="">{countValue} voitures entrées</p>
                </div>
                <div className="btn-groupe row">
                    <Button className="btn btn-primary my-3" onMouseDown={decreaseCount}>-</Button>             
                    <Button className="btn btn-primary my-3" onClick={increaseCount}>+</Button>
                </div>
            </div>
        </div>
        
    )
}

export default Counter;