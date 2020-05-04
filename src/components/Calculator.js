import React, {useState} from 'react'
import Keybord from './Keybord';
import Screen from './Screen';

export default () => {
    const [input, setInput] = useState("");

    const addInput = char => {

        let newInput = "";

        if(input.length === 0) {
            if(isNaN(Number(char))) {
                newInput = [...input];
                newInput += 0 + char;
                setInput(newInput);
            } else {
                newInput = [...input];
                newInput += char;
                setInput(newInput);
                return;
            }
        }

        // newInput = [...input, char];
        newInput = input;
        newInput += char;
        console.log(newInput);
        setInput(newInput);
    }

    const clearInput = () => {
        setInput("");
    }

    const calculate = () => {
        setInput(evaluate(input));
    }

  function evaluate(fn) {
        return new Function('return ' + fn)();
    }

    return <div className="calculator">
        <button id="clear" className="clear" onClick={clearInput}> C </button>
        <div id="viewer" className="viewer"><Screen input={input}/> 0 </div>
        <Keybord addInput={addInput} calculate={calculate}/>
            </div>
    
};
