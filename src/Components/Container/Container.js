import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import SymbolSearch from "./SymbolSearch/SymbolSearch";
import KeyData from "./KeyData/KeyData";
import Articles from "./Articles/Articles";
import './Container.css'

function Container () {
    const [name, setName] = useState([])
    const [input, setInput] = useState('')
    const [keyData, setKeyData] = useState({})
    const [values, setValues] = useState({})
    const [articles, setArticles] = useState([])
    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        //obtains text input value of SymbolSearch
        setInput(e.target.value)
        //Obtains symbol and company name based on the input from SymbolSearch
        let inputKey = e.target.value.toLowerCase()
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputKey}&apikey=L9CIXKF2CPVF19PV`).then((response) => {
        let bestMatches = response.data.bestMatches
        console.log(bestMatches, 'best matches')
        let displayNames = bestMatches?.filter((bestMatch) => {
            //when accessing key data - we can't have periods in the symbol
            return !bestMatch['1. symbol'].includes('.')
        })
        let newDropDown = displayNames?.map((displayName) => {
            return displayName['2. name'] + ' | ' + displayName['1. symbol']
        })
        setName(newDropDown)
        })
        console.log(name)
    }
    console.log(input)

    function getKeyData (key) {
        console.log(key)
        //need to interpolate the symbol name selected - where IBM is now
        axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${key}&apikey=L9CIXKF2CPVF19PV`).then((response) => {
            console.log(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${key}&apikey=L9CIXKF2CPVF19PV`)
            console.log(response.data)
            setKeyData(response.data)
        })
    }
    // function getValues (key) {
    //     let date = new Date()
    //     let year = date.toLocaleString("default", {year: "numeric"})
    //     let month = date.toLocaleString("default", {month: "2-digit"})
    //     let day = date.toLocaleString("default", {day: "2-digit"})
    //     let formattedDate = year + '-' + month + '-' + day
    //     axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${key}&apikey=demo`).then((response) => {
    //     console.log(response.data)
    // })
    // }
    function getNewsArticles (key) {
        axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${key}&apikey=L9CIXKF2CPVF19PV`).then((response) => {
            console.log(response.data)
            setArticles(response.data.feed)
        })
    }
    return (
        <div>
            <SymbolSearch getNewsArticles={getNewsArticles} getKeyData={getKeyData} name={name} handleChange={handleChange} input={input}/>
            <div className='Container-div'>
                <div className='KeyData-Articles'>
                    <KeyData keyData={keyData}/>
                    <Articles articles={articles} getNewsArticles={getNewsArticles}/>
                </div>
            </div>
        </div>
    )
}

export default Container