import './KeyData.css'


function KeyData ({keyData}) {
    return (
        <div className='KeyData-section'>
            <div className='KeyData-title'>
                <h2><span className='ID'></span> {keyData.Name}</h2>
            </div>
            <div id='Key-data'>
                <div className='Sector-industry'>
                    <p><span className='ID'>Exchange:</span> {keyData.Exchange}</p>
                    <p><span className='ID'>Sector:</span> {keyData.Sector}</p>
                    <p><span className='ID'>Industry:</span> {keyData.Industry}</p>
                </div>
                <div className='Price-Volume'>
                    <p><span className='ID'>High/Low:</span> ${keyData.high}</p>
                    <p><span className='ID'>Low:</span> ${keyData.low}</p>
                    <p><span className='ID'>Volume:</span> {keyData.volume}</p>
                    <p><span className='ID'>52 Week High:</span> ${keyData['52WeekHigh']}</p>
                    <p><span className='ID'>52 Week Low:</span> ${keyData['52WeekLow']}</p>
                    <p><span className='ID'>Earnings per share:</span> ${keyData.EPS}</p>
                </div>
            </div>
        </div>
    )
}

export default KeyData