import { useState } from 'react';
import './Counter.css';

const Counter = () =>{
    //Définir l'état de base
    const [countValue, setCountValue] = useState(0);
    const [bgColor, setBgColor] = useState("bg-color-green");

    //Evenements avec le btn +
    const increaseCount = () => {
        //Pas plus que 15
        if(countValue === 15) return;

        //Ajouter 1 quand le btn est cliqué
        const newCountValue = countValue + 1;

        //Assigner une nouvelle valeur
        setCountValue(newCountValue);

        //Système d'alert, changer de couleur
        if(newCountValue >= 13){
            setBgColor("bg-color-red");
        }
    };

    //Evenements avec le btn -
    const decreaseCount = () => {
        //Pas moins que 0
        if(countValue === 0) return;

        //Reduire 1 quand le btn est cliqué
        const newCountValue = countValue - 1;
        
        //Assigner une nouvelle valeur
        setCountValue(newCountValue);

        //Système d'alert, changer de couleur
        if(newCountValue < 13){
            setBgColor("bg-color-green");
        }
    }
    
    return (
        <div className="container">
            {/* div où la couleur change, le nom de className avec une interpolation */}
            <div className={`counterContainer  ${bgColor}`}>
                <div className="countValueDiv">
                    {/* Afficher le nombre */}
                    <h1 className="countValue">{countValue}</h1>
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