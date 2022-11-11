import React from "react";
import { useState } from "react";
import axios from "axios";
import SymbolSearch from "./SymbolSearch/SymbolSearch";


function Container () {
    const [input, setInput] = useState('')
    // function getData () {
    //  axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=appl&apikey=L9CIXKF2CPVF19PV`).then((response) => {
    //     console.log(response)
    //  })
    // } 
    function handleChange (e) {
        setInput(e.target.value)
    }
    function handleSubmit () {
        let inputKey = input.toLowerCase()
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputKey}&apikey=L9CIXKF2CPVF19PV`).then((response) => {
            console.log(response)
        })
    }
    console.log(input)
    return (
        <div>
            <SymbolSearch handleSubmit={handleSubmit} handleChange={handleChange} input={input} setInput={setInput}/>
        </div>
    )
}

export default Container