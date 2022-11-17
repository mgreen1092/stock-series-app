import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import SymbolSearch from "./SymbolSearch/SymbolSearch";
import KeyData from "./KeyData/KeyData";
import Articles from "./Articles/Articles";
import Graph from './Graph/Graph'
import './Container.css'
import Description from "./Description/Description";

function Container () {
    const [keyData, setKeyData] = useState({})
    const [additionalKeyData, setAdditionalKeyData]= useState({})
    const [articles, setArticles] = useState([])
    const [graphData, setGraphData] = useState([])
    function getKeyData (key) {    
        axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${key}&apikey=L9CIXKF2CPVF19PV`).then((response) => {
            if (response.data.Note) {
                alert('Please wait 1 minute!')
            } else if (response.data === {}) {
                alert('No data')
            }
            setKeyData(response.data)
        })
    }
    function isWeekend (date = new Date()) {
        return date.getDay() === 6 || date.getDay()===0
    }
    async function getValues () {
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
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${keyData.Symbol}&apikey=L9CIXKF2CPVF19PV.`)
        setAdditionalKeyData({ ...keyData,
            high: response.data['Time Series (Daily)'][formattedDate]['2. high'],
            low: response.data['Time Series (Daily)'][formattedDate]['3. low'],
            volume: response.data['Time Series (Daily)'][formattedDate]['6. volume']
        })
    }
    useEffect(() => {
        getValues()
    }, [keyData])

    function getNewsArticles (key) {
        axios.get(`https://api.polygon.io/v2/reference/news?ticker=${key}&apiKey=yQnhLxouu8Eo81nORx2a7bfCviPQyq6u`).then((response) => {
            setArticles(response.data.results)
        })
        }
    function graph (symbol) {
        axios.get(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=8fbbb93916fd4d0bb531696e24ca8115`).then((response) => {
            setGraphData(response.data.values.reverse())
        })
    }
    return (
        <div>
            <SymbolSearch graph={graph} getNewsArticles={getNewsArticles} getKeyData={getKeyData}/>
            <div className='Data-section'>
                <div className='KeyData-Graph'>
                    <div className='KeyData'>
                        <KeyData setGraphData={setGraphData} keyData={additionalKeyData}/>
                    </div>
                    <div className='Graph'>
                        <Graph graphData={graphData}/>
                    </div>
                </div>
            </div>
            <Description keyData={keyData}/>
            {articles?.length !== 0 && 
                    <Articles articles={articles}/>
            }
        </div>
    )
}

export default Container
