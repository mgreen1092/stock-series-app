import React from "react";
// import {useState} from 'react'
// import axios from "axios";

function SymbolSearch (props) {
    //when search button is pressed, stock symbols appear
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.handleSubmit()
            }}>
                <label>Symbol:</label>
                <input onChange={props.handleChange} type='text'></input>
            </form>
        </div>
    )
}
export default SymbolSearch