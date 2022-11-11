import React from "react";
import { useState } from "react";
import axios from "axios";
import SymbolSearch from "./SymbolSearch/SymbolSearch";


function Container () {
    const [input, setInput] = useState('')
    function handleChange (e) {
        //obtains text input value of SymbolSearch
        setInput(e.target.value)
    }
    function handleSubmit () {
        //Obtains symbol and company name based on the input from SymbolSearch
        let inputKey = input.toLowerCase()
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputKey}&apikey=L9CIXKF2CPVF19PV`).then((response) => {
            console.log(response.data.bestMatches)
            let bestMatches = response.data.bestMatches
            console.log(bestMatches, 'best matches')
            //let displayBestMatches = bestMatches.map((bestMatch)=> {
                //symbol: bestMatch.1. symbol
            //})
        })
    }
    //console.log(input)
    return (
        <div>
            <SymbolSearch handleSubmit={handleSubmit} handleChange={handleChange} input={input} setInput={setInput}/>
        </div>
    )
}

export default Container