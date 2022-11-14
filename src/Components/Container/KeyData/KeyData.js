import React from "react";
import './KeyData.css'


function KeyData ({keyData}) {
    return (
        <div className='KeyData-section'>
            <div className='KeyData-title'>
                <p><span className='ID'>Key Data:</span> {keyData.Name}</p>
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
                <div className='Price-Volumne'>
                    <p><span className='ID'>High/Low:</span></p>
                    <p><span className='ID'>Volume:</span></p>
                    {/* <p>52 Week High: {keyData.52WeekHigh}</p>
                    <p>52 Week Low: {keyData.52WeekLow}</p> */}
                    <p><span className='ID'>Earnings per share:</span> {keyData.EPS}</p>
                </div>
            </div>
        </div>
    )
}

export default KeyData