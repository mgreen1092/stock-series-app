import React from "react";
import './SymbolSearch.css'

function SymbolSearch (props) {
    const handleChange = (e) => {
        console.log(e.target.value)
        if (e.target.value !== '---------') {
            console.log('if')
            props.getKeyData(e.target.value.split('|')[1].trim())
            props.getNewsArticles(e.target.value.split('|')[1].trim())
        }
        //console.log(e.target.value.split('|')[1].trim())
    }
    //when search button is pressed, stock symbols appear
    return (
        <div className='Symbol-search'>
            <form className='Symbol-form'>
            <label className='Symbol-label'>Symbol:</label>
            <input className='Symbol-input' onChange={props.handleChange} value={props.input} type='text'></input>
        </form>
            <form className='Symbol-form2'>
                <select onChange={handleChange} className='Symbol-drop'>
                    <option className='First-option'>---------</option>
                    {props.name?.map((oneName) => {
                    return (
                        <option className='Symbol-option'>{oneName}</option>
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