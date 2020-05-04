import React from 'react'

export default ({addInput, calculate}) => {
    return <div>
        <button className="num" onClick={() => {addInput("7")}}>7</button>
        <button className="num" onClick={() => {addInput("8")}}>8</button>
        <button className="num" onClick={() => {addInput("9")}}>9</button>
        <button className="ops" onClick={() => {addInput("+")}}>+</button>
        
        <button className="num" onClick={() => {addInput("4")}}>4</button>
        <button className="num" onClick={() => {addInput("5")}}>5</button>
        <button className="num" onClick={() => {addInput("6")}}>6</button>
        <button className="ops" onClick={() => {addInput("-")}}>-</button>
        
        <button className="num" onClick={() => {addInput("1")}}>1</button>
        <button className="num" onClick={() => {addInput("2")}}>2</button>
        <button className="num" onClick={() => {addInput("3")}}>3</button>
        <button className="ops" onClick={() => {addInput("*")}}>*</button>
        
        <button className="num" onClick={() => {addInput("0")}}>0</button>
        <button className="num" onClick={() => {addInput(".")}}>.</button>
        <button id="equal" className="equal" onClick={() => {calculate()}}>=</button>
        <button className="ops" onClick={() => {addInput("/")}}>/</button>
        </div>
    
};