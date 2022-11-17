import React from "react";
import './Articles.css'

function Articles (props) {
    return (
        <div>
            <h2 className='News-feed'>News Feed:</h2>
                <div className='Article-section'>
                    {props.articles?.map((article) => {
                        console.log('-----------', article.time_published)
                        // let date=''
                        // if (article.time_published) {
                        //     date=Date(article.time_published)
                        //     date.toLocaleDateString()
                        // }
                        // console.log(date)
                        // console.log(date.toLocaleStringDateString())
                    return (
                        <div className='Container'>
                             <div className='Article-content'>
                                <div className='Article-title'>
                                    <p><a href={article.url}>{article.title}</a></p>
                                </div>
                                {/* <div className='Article-author'>
                                    <p><span id='Font'>Author:</span> {article.authors[0]}</p>
                                </div> */}
                                <div className='Article-date'>
                                    <p><span id='Font'>Date:</span> {article.time_published.split('T')[0].slice(0, 4)}-{article.time_published.split('T')[0].slice(4, 6)}-{article.time_published.split('T')[0].slice(6, 8)}</p>
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