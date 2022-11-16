import axios from "axios";
import React, { useEffect } from "react";
import './KeyData.css'


function KeyData ({keyData, setKeyData, setGraphData, graphData}) {
    console.log('change')
    console.log('-------------------')
    useEffect(() => {
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
        setKeyData({ ...keyData,
            high: response.data['Time Series (Daily)'][formattedDate]['2. high'],
            low: response.data['Time Series (Daily)'][formattedDate]['3. low'],
            volume: response.data['Time Series (Daily)'][formattedDate]['6. volume']
        })
    }
    getValues()
    }, [keyData])
    

    function isWeekend (date = new Date()) {
        return date.getDay() === 6 || date.getDay()===0
    }
    return (
        <div className='KeyData-section'>
            <div className='KeyData-title'>
                <h2><span className='ID'>Key Data:</span> {keyData.Name}</h2>
            </div>
            <div id='Key-data'>
                <div className='Sector-industry'>
                    <p><span className='ID'>Exchange:</span> {keyData.Exchange}</p>
                    <p><span className='ID'>Sector:</span> {keyData.Sector}</p>
                    <p><span className='ID'>Industry:</span> {keyData.Industry}</p>
                </div>
                <div className='Price-Volume'>
                    <p><span className='ID'>High/Low:</span> {keyData.high}/{keyData.low}</p>
                    <p><span className='ID'>Volume:</span> {keyData.volume}</p>
                    <p><span className='ID'>52 Week High:</span> {keyData['52WeekHigh']}</p>
                    <p><span className='ID'>52 Week Low:</span> {keyData['52WeekLow']}</p>
                    <p><span className='ID'>Earnings per share:</span> {keyData.EPS}</p>
                </div>
            </div>
        </div>
    )
}

export default KeyData