import React from "react";
import { useState } from "react";
import axios from "axios";
import SymbolSearch from "./SymbolSearch/SymbolSearch";
import KeyData from "./KeyData/KeyData";


function Container () {
    let displayBestMatches
    let displayNames
    const [input, setInput] = useState('')
    function handleChange (e) {
        //obtains text input value of SymbolSearch
        setInput(e.target.value)
    }
    function handleSubmit () {
        //Obtains symbol and company name based on the input from SymbolSearch
        let inputKey = input.toLowerCase()
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputKey}&apikey=L9CIXKF2CPVF19PV`).then((response) => {
            //console.log(response.data.bestMatches[0]['1. symbol'])
            let bestMatches = response.data.bestMatches
            //console.log(bestMatches, 'best matches')
            displayBestMatches = bestMatches.map((bestMatch)=> {
                console.log(bestMatch['1. symbol'])
            
            })
            displayNames = bestMatches.map((bestMatch) => {
                console.log(bestMatch['2. name'])
            })
        })
    }

    function getKeyData () {
        //need to interpolate the symbol name selected - where IBM is now
        axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=L9CIXKF2CPVF19PV`).then((response) => {

        })
    }
    return (
        <div>
            <SymbolSearch displayBestMatches={displayBestMatches} displayNames={displayNames} handleSubmit={handleSubmit} handleChange={handleChange} input={input} setInput={setInput}/>
            <KeyData />
        </div>
    )
}

export default Container