import React, {useState} from 'react'
import Keybord from './Keybord';
import Screen from './Screen';

export default () => {
    const [input, setInput] = useState("0");

    const addInput = char => {

        let newInput = "";
        
        if(input === "0") {
            newInput = input;
            setInput(newInput.slice(1));
            return;
        }
    
        
        if(input.length === 0) {
            
            if(isNaN(Number(char))) {
                newInput = [...input];
                newInput += 0 + char;
                setInput(newInput);
                return;
            } else {
                newInput = [...input];
                newInput += char;
                setInput(newInput);
                return;
            }
        }

        newInput = input;
        newInput += char;
        setInput(newInput);
        
    };

    const clearInput = () => {
        setInput("");
    };

    const calculate = () => {
        if (isNaN(evaluate(input))) {
            setInput("Error");
            return;
          }
        setInput(evaluate(input));
    };

    const oneZero = (input) => {
        return [...new Set(input)];
    };

    const evaluate = fn => {
        return new Function('return ' + fn)();
    };

    const deleteOne = () => {
        setInput(input.toString().slice(0, -1));
      };

    return <div className="calculator">
        <div className="viewer"><Screen input={input}/></div>
        <div className="viewer">
        <button className="clear" onClick={clearInput}> C </button>
        <button className="back" onClick={deleteOne}> x </button>
        </div>
        <Keybord 
            addInput={addInput} 
            calculate={calculate} 
            oneZero={oneZero}/>
        </div>
    };
