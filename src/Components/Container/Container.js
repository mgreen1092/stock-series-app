import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import SymbolSearch from "./SymbolSearch/SymbolSearch";
import KeyData from "./KeyData/KeyData";
import Articles from "./Articles/Articles";
import './Container.css'

function Container () {
    const [keyData, setKeyData] = useState({})
    const [articles, setArticles] = useState([])
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
            // setKeyData({...keyData, response['data']})
            console.log(keyData)
            //getValues()
            //getNewsArticles(keyData)
        })
    }
    console.log(keyData.Description, 'Description Key')
    console.log(keyData)
    // function isWeekend (date = new Date()) {
    //     return date.getDay() === 6 || date.getDay()===0
    // }
    // function getValues () {
    //     let date = new Date()
    //     date.setDate(date.getDate()-5)
    //     let weekend = isWeekend(date)
    //     if (weekend === true) {
    //         date.setDate(date.getDate()-3)
    //     }
    //     let year = date.toLocaleString("default", {year: "numeric"})
    //     let month = date.toLocaleString("default", {month: "2-digit"})
    //     let day = date.toLocaleString("default", {day: "2-digit"})
    //     let formattedDate = year + '-' + month + '-' + day
    //     console.log(formattedDate)
    //     axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${keyData.Symbol}&apikey=L9CIXKF2CPVF19PV.`).then((response) => {
    //     console.log(keyData)
    //     console.log(response.data)
    //     setKeyData({ ...keyData,
    //         high: response.data['Time Series (Daily)'][formattedDate]['2. high'],
    //         low: response.data['Time Series (Daily)'][formattedDate]['3. low'],
    //         volume: response.data['Time Series (Daily)'][formattedDate]['6. volume']
    //     })
    //     //response.data['Time Series (Daily)']
    // })
    // }
    function getNewsArticles (key) {
        axios.get(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${key}&topics=technology&apikey=L9CIXKF2CPVF19PV.`).then((response) => {
            console.log(response.data)
            setArticles(response.data.feed)
        })
        }
    return (
        <div>
            <SymbolSearch getNewsArticles={getNewsArticles} getKeyData={getKeyData}/>
            <KeyData setKeyData={setKeyData} keyData={keyData}/>
            <Articles articles={articles}/>
        </div>
    )
}

export default Container
