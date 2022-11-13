import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import SymbolSearch from "./SymbolSearch/SymbolSearch";
import KeyData from "./KeyData/KeyData";

function Container () {
    const [name, setName] = useState([])
    const [input, setInput] = useState('')
    const [keyData, setKeyData] = useState({})
    const handleChange = (e) => {
        console.log(e.target.value)
        //obtains text input value of SymbolSearch
        setInput(e.target.value)
        //Obtains symbol and company name based on the input from SymbolSearch
        let inputKey = input.toLowerCase()
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputKey}&apikey=L9CIXKF2CPVF19PV`).then((response) => {
        let bestMatches = response.data.bestMatches
        console.log(bestMatches, 'best matches')
        let displayNames = bestMatches?.filter((bestMatch) => {
            return !bestMatch['1. symbol'].includes('.')
            // if (!bestMatch['1. symbol'].includes('.')) {
                //return bestMatch['2. name'] + ' | ' + bestMatch['1. symbol']  
        })
        let newDropDown = displayNames.map((displayName) => {
            return displayName['2. name'] + ' | ' + displayName['1. symbol']
        })
        setName(newDropDown)
        })
        console.log(name)
    }
    console.log(input)
    function handleSubmit (e) {
        e.preventDefault()
    }

    function getKeyData (key) {
        console.log(key)
        //need to interpolate the symbol name selected - where IBM is now
        axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${key}&apikey=L9CIXKF2CPVF19PV`).then((response) => {
            console.log(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${key}&apikey=L9CIXKF2CPVF19PV`)
            console.log(response.data)
            setKeyData(response.data)
        })
    }
    return (
        <div>
            <SymbolSearch getKeyData={getKeyData} name={name} handleSubmit={handleSubmit} handleChange={handleChange} input={input}/>
            <KeyData keyData={keyData}/>
        </div>
    )
}

export default Container