import React from "react";
import '../KeyData/KeyData.css'

function Description ({keyData}) {
    return (
        <div className="KeyData-description">
            <h2 className="KeyData-title">Company Description:</h2>
            <p className="Description-text">{keyData.Description}</p>
        </div>
    )
}
export default Description