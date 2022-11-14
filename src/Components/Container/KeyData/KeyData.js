import React from "react";
import './KeyData.css'


function KeyData ({keyData}) {
    return (
        <div className='KeyData-section'>
            <div className='KeyData-title'>
                <p>Key Data: {keyData.Name}</p>
            </div>
            <div className='KeyData-description'>
                <p>Description: {keyData.Description}</p>
            </div>
            <div id='Key-data'>
                <div className='Sector-industry'>
                    <p>Exchange: {keyData.Exchange}</p>
                    <p>Sector: {keyData.Sector}</p>
                    <p>Industry: {keyData.Industry}</p>
                </div>
                <div className='Price-Volumne'>
                    <p>High/Low:</p>
                    <p>Volume:</p>
                    {/* <p>52 Week High: {keyData.52WeekHigh}</p>
                    <p>52 Week Low: {keyData.52WeekLow}</p> */}
                    <p>Earnings per share: {keyData.EPS}</p>
                </div>
            </div>
        </div>
    )
}

export default KeyData