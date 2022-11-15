import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import './SymbolSearch.css'
import data from '../data'

function SymbolSearch (props) {
    const handleChange = (e) => {
        console.log(e.target.value)
        props.getKeyData(e.target.value)
            //props.getNewsArticles(e.target.value.split('|')[1].trim())
        }
    return (
        <div className='Symbol-search'>
            <form className='Symbol-form2'>
                <select onClick={handleChange} className='Symbol-drop'>
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




{/* <div className='Symbol-search'>
<form className='Symbol-form' onSubmit={(e) => {
    e.preventDefault()
    props.handleSubmit()
}}>
    <label className='Symbol-label'>Symbol:</label>
    <input list='stock-option' className='Symbol-input' onChange={props.handleChange} value={props.input} type='search'></input>
        <datalist id='stock-option' onChange={handleChange}>
            <option className='First-option'>---------</option>
            {props.name?.map((oneName) => {
                return (
                    <option className='Symbol-option'>{oneName}</option>
                )
            })}
    </datalist>
</form>
</div> */}