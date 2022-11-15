import React, { useEffect } from "react";
import './KeyData.css'


function KeyData ({keyData}) {
    useEffect(() => {

    }, [keyData])
    return (
        <div className='KeyData-section'>
            <div className='KeyData-title'>
                <h2><span className='ID'>Key Data:</span> {keyData.Name}</h2>
            </div>
            <div className='KeyData-description'>
                <p><span className='ID'>Description:</span> {keyData.Description}</p>
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
                    {/* <p>52 Week High: {keyData.52WeekHigh}</p>
                    <p>52 Week Low: {keyData.52WeekLow}</p> */}
                    <p><span className='ID'>Earnings per share:</span> {keyData.EPS}</p>
                </div>
            </div>
        </div>
    )
}

export default KeyData