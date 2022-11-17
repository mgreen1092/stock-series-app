import React from "react";
import '../KeyData/KeyData.css'

function Description ({keyData}) {
    return (
        <div className='KeyData-description'>
            <p className='Description-text'><span className='ID'>Company Description:</span></p>
            <p className='Description-text'>{keyData.Description}</p>
        </div>
    )
}
export default Description