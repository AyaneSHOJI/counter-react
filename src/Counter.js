import './Counter.css';

function Counter(){
    return (
        <div className="Counter">
            <div>
                <p id="number">0</p>
            </div>
            <div className="buttons">
                <div className="button">
                    <button>-</button>
                </div>
                <div className="button">
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;