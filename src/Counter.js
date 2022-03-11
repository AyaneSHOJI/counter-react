import { useState } from 'react';
import './Counter.css';

function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div className="Counter">
            <div>
                <p id="number">{count}</p>
            </div>
            <div className="buttons">
                <div className="button">
                    <button onClick={() => setCount(count - 1)}>-</button>
                </div>
                <div className="button">
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;