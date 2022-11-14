import React from "react";
import './Articles.css'

function Articles (props) {
    return (
        <div className='Article-section'>
            <h2 className='Article-title'>News Feed:</h2>
                {props.articles?.map((article) => {
                    return (
                        <container className='Container'>
                            <div>Title: <a href={article.url}>{article.title}</a></div>
                            <div>Author: {article.authors[0]}</div>
                            <div>Date: {article.time_published}</div>
                            <div>Summary: {article.summary}</div>
                        </container>
                    )
                })}
        </div>
    )
}

export default Articles