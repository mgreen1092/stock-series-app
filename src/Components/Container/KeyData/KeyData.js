import './KeyData.css'


function KeyData ({keyData}) {
    return (
        <div className="KeyData-section">
            <div className="KeyData-title">
                <h2><span className="ID-key"></span> {keyData.Name}</h2>
            </div>
            <div id="Key-data">
                <div className="Sector-industry">
                    <p><span className="ID-key">Exchange:</span> {keyData.Exchange}</p>
                    <p><span className="ID-key">Sector:</span> {keyData.Sector}</p>
                    <p><span className="ID-key">Industry:</span> {keyData.Industry}</p>
                </div>
                <div className="Price-Volume">
                    <p><span className="ID-key">High:</span> ${keyData.high}</p>
                    <p><span className="ID-key">Low:</span> ${keyData.low}</p>
                    <p><span className="ID-key">Volume:</span> {keyData.volume}</p>
                    <p><span className="ID-key">52 Week High:</span> ${keyData['52WeekHigh']}</p>
                    <p><span className="ID-key">52 Week Low:</span> ${keyData['52WeekLow']}</p>
                    <p><span className="ID-key">Earnings per share:</span> ${keyData.EPS}</p>
                </div>
            </div>
        </div>
    )
}

export default KeyData