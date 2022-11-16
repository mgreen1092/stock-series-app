import React from "react";
import '../KeyData/KeyData.css'

function Description ({keyData}) {
    return (
        <div className='KeyData-description'>
            <p><span className='ID'>Description:</span> {keyData.Description}</p>
        </div>
    )
}
export default Description