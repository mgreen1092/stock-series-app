import React from "react";
import './Articles.css'

function Articles (props) {
    return (
        <div>
            <h2 className='News-feed'>News Feed:</h2>
                <div className='Article-section'>
                    {props.articles?.map((article) => {
                    return (
                        <div className='Container'>
                             <div className='Article-content'>
                                <div className='Article-title'>
                                    <p><a href={article.url}>{article.title}</a></p>
                                </div>
                                <div className='Article-author'>
                                    <p><span id='Font'>Author:</span> {article.authors[0]}</p>
                                </div>
                                <div className='Article-date'>
                                    <p><span id='Font'>Date:</span> {article.time_published}</p>
                                </div>
                                <div className='Article-summary'>
                                    <p><span id='Font'>Summary:</span> {article.summary}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Articles