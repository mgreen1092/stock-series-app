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
    console.log(keyData.Description, 'Description Key')
    console.log(keyData)
    function getNewsArticles (key) {
        axios.get(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${key}&topics=technology&apikey=L9CIXKF2CPVF19PV.`).then((response) => {
            setArticles(response.data.feed)
        })
        }
    function graph (symbol) {
        axios.get(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=8fbbb93916fd4d0bb531696e24ca8115`).then((response) => {
            console.log(response.data.values)
            setGraphData(response.data.values.reverse())
        })
    }
    console.log(articles, 'articles')
    return (
        <div>
            <SymbolSearch graph={graph} getNewsArticles={getNewsArticles} getKeyData={getKeyData}/>
            <div className='Data-section'>
                <div className='KeyData-Graph'>
                    <div className='KeyData'>
                        <KeyData setGraphData={setGraphData} setKeyData={setKeyData} keyData={keyData}/>
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
