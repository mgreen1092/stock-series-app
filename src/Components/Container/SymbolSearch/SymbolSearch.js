import React from "react";
import './SymbolSearch.css'
import data from '../data'

function SymbolSearch (props) {
    const handleChange = (e) => {
        props.getKeyData(e.target.value)
        props.getNewsArticles(e.target.value)
        props.graph(e.target.value)
        }
    return (
        <div className='Symbol-search'>
            <form className='Symbol-form'>
                <select onChange={handleChange} className='Symbol-drop'>
                    <option>Select a company:</option>
                    {data.map((tickerName) => {
                    return (
                        <option value={tickerName.Symbol} className='Symbol-option'>{tickerName.Description} | {tickerName.Symbol}</option>
                    )
                    })}
                </select>
            </form>
        </div>
    )
}
export default SymbolSearch



