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
    const [articles, setArticles] = useState([])
    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        //obtains text input value of SymbolSearch
        setInput(e.target.value)
        //Obtains symbol and company name based on the input from SymbolSearch
        //let inputKey = e.target.value.toLowerCase()
        axios.get(`https://api.polygon.io/v3/reference/tickers?active=true&apiKey=yQnhLxouu8Eo81nORx2a7bfCviPQyq6u`).then((response) => {
        console.log(response.data.results)
        let bestMatches = response.data.results
        console.log(bestMatches, 'best matches')
        let displayNames = bestMatches?.filter((bestMatch) => {
            //when accessing key data - we can't have periods in the symbol
            return !bestMatch['1. symbol'].includes('.')
        })
        let newDropDown = displayNames?.map((displayName) => {
            return displayName.name + ' | ' + displayName.ticker
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
            if (response.data.Note) {
                alert('Too many calls')
            } else if (response.data === {}) {
                alert('No data')
            }
            setKeyData(response.data)
            console.log(keyData)
            getValues(keyData)
            //getNewsArticles(keyData)
        })
    }
    console.log(keyData)
    function isWeekend (date = new Date()) {
        return date.getDay() === 6 || date.getDay()===0
    }
    function getValues () {
        let date = new Date()
        date.setDate(date.getDate()-5)
        let weekend = isWeekend(date)
        if (weekend === true) {
            date.setDate(date.getDate()-3)
        }
        let year = date.toLocaleString("default", {year: "numeric"})
        let month = date.toLocaleString("default", {month: "2-digit"})
        let day = date.toLocaleString("default", {day: "2-digit"})
        let formattedDate = year + '-' + month + '-' + day
        console.log(formattedDate)
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${keyData.Symbol}&apikey=L9CIXKF2CPVF19PV.`).then((response) => {
        console.log(keyData)
        console.log(response.data)
        setKeyData({ ...keyData,
            high: response.data['Time Series (Daily)'][formattedDate]['2. high'],
            low: response.data['Time Series (Daily)'][formattedDate]['3. low'],
            volume: response.data['Time Series (Daily)'][formattedDate]['6. volume']
        })
        //response.data['Time Series (Daily)']
    })
    }
    // function getNewsArticles () {
    //     axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${keyData.Symbol}&apikey=L9CIXKF2CPVF19PV`).then((response) => {
    //         console.log(response.data)
    //         setArticles(response.data.feed)
    //        //setKeyData({ ...keyData,
    //        //title: response.data.feed
    //         //response.data.feed
    //     })
    //     }
    return (
        <div>
            <SymbolSearch getValues={getValues} getKeyData={getKeyData} name={name} handleChange={handleChange} input={input}/>
            <KeyData keyData={keyData}/>
            <Articles articles={articles}/>
        </div>
    )
}

export default Container

//aapl

// const handleChange = (e) => {
//     e.preventDefault()
//     console.log(e.target.value)
//     //obtains text input value of SymbolSearch
//     setInput(e.target.value)
//     //Obtains symbol and company name based on the input from SymbolSearch
//     let inputKey = e.target.value.toLowerCase()
//     axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputKey}&apikey=L9CIXKF2CPVF19PV`).then((response) => {
//     let bestMatches = response.data.bestMatches
//     console.log(bestMatches, 'best matches')
//     let displayNames = bestMatches?.filter((bestMatch) => {
//         //when accessing key data - we can't have periods in the symbol
//         return !bestMatch['1. symbol'].includes('.')
//     })
//     let newDropDown = displayNames?.map((displayName) => {
//         return displayName['2. name'] + ' | ' + displayName['1. symbol']
//     })
//     setName(newDropDown)
//     })
//     console.log(name)
// }
// console.log(input)