import React from "react";
import './SymbolSearch.css'

function SymbolSearch (props) {
    //when search button is pressed, stock symbols appear
    return (
        <div className='Symbol-search'>
            <form className='Symbol-form' onSubmit={(e) => {
                e.preventDefault()
                props.handleSubmit()
            }}>
                <label className='Symbol-label'>Symbol:</label>
                <input className='Symbol-input' onChange={props.handleChange} type='text'></input>
                <button className='Symbol-button'>🔎</button>
            </form>
        </div>
    )
}
export default SymbolSearch