import React from "react";
import './SymbolSearch.css'
import data from '../data'

function SymbolSearch (props) {
    const handleChange = (e) => {
        console.log(e.target.value)
        props.getKeyData(e.target.value)
        //props.getValues(e.target.value)
        props.getNewsArticles(e.target.value)
        props.graph(e.target.value)
        }
    return (
        <div className='Symbol-search'>
            <form className='Symbol-form2'>
                <select onChange={handleChange} className='Symbol-drop'>
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



