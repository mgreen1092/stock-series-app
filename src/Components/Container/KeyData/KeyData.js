import React from "react";
import './KeyData.css'


function KeyData () {
    return (
        <div className='KeyData-section'>
            <div className='KeyData-title'>
                <p>Key Data:</p>
            </div>
            <div id='Key-data'>
                <div className='Sector-industry'>
                    <p>Sector:</p>
                    <p>Industry:</p>
                </div>
                <div className='Price-Volumne'>
                    <p>High/Low:</p>
                    <p>Volume:</p>
                </div>
            </div>
        </div>
    )
}

export default KeyData