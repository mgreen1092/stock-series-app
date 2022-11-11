import React from "react";
import { useState } from "react";
import axios from "axios";
import SymbolSearch from "./SymbolSearch/SymbolSearch";


function Container () {
    const [input, setInput] = useState('')
    function getData () {
     axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=appl&apikey=L9CIXKF2CPVF19PV`).then((response) => {
        console.log(response)
     })
    } 
    return (
        <div>
            <SymbolSearch input={input} setInput={setInput} getData={getData} />
        </div>
    )
}

export default Container