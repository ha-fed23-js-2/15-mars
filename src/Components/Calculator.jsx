import { useState } from "react";

function Calculator() {
    const [value, setValue] = useState(0);
    function handleClick(clicked) {
        switch(clicked) {
            case "addOne":
                setValue(value + 1);
                break;
            case "subOne":
                setValue(value - 1);
                break;
            case "addFive":
                setValue(value + 5);
                break;
            case "subFive":
                setValue(value - 5);
                break;
            case "mulTwo":
                setValue(value * 2);
                break;
            case "divTwo":
                setValue(value / 2);
                break;
            case "reset":
                setValue(0);
                break;
            default:
                setValue(value);
        }
    }
    return (
        <article>
            <p>{value}</p>
            <button className="addOne" onClick={() => handleClick("addOne")}>+1</button>
            <button className="subOne" onClick={() => handleClick("subOne")}>-1</button>
            <button className="addFive" onClick={() => handleClick("addFive")}>+5</button>
            <button className="subFive" onClick={() => handleClick("subFive")}>-5</button>
            <button className="mulTwo" onClick={() => handleClick("mulTwo")}>*2</button>
            <button className="divTwo" onClick={() => handleClick("divTwo")}>/2</button>
            <button className="reset" onClick={() => handleClick("reset")}>Reset</button>
        </article>
    )
}

export default Calculator;