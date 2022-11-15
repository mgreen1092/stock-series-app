import React from "react";
import './Articles.css'

function Articles (props) {
    return (
        <div>
            <h2 className='News-feed'>News Feed:</h2>
                {props.articles?.map((article) => {
                    return (
                        <div className='Article-section'>
                            <div className='Container'>
                                <div className='Article-title'>
                                    <p><a href={article.url}>{article.title}</a></p>
                                </div>
                                <div className='Article-author'>
                                    <p>Author: {article.authors[0]}</p>
                                </div>
                                <div className='Article-date'>
                                    <p>Date: {article.time_published}</p>
                                </div>
                                <div className='Article-summary'>
                                    <p>Summary: {article.summary}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default Articles