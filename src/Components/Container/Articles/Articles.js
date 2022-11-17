import React from "react";
import './Articles.css'

function Articles (props) {
    return (
        <div>
            <h2 className="News-feed">News Feed:</h2>
                <div className="Article-section">
                    {props.articles?.map((article) => {
                    return (
                        <div className="Container">
                             <div className="Article-content">
                                <div>
                                    <p><a href={article.article_url}>{article.title}</a></p>
                                </div>
                                <div>
                                    <p><span id="Font">Date:</span> {article.published_utc.substring(0, 10)}</p>
                                </div>
                                <div>
                                    <p><a href={article.article_url}><span id="Font">Summary:</span> {article.description}</a></p>
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