import api from '../api';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Articles extends Component {
    constructor(){
        super();
        this.state = {  
            loaded: false,
            articles: []
        };
    }

    componentDidMount(){
       api.get('/blog/articles').then(response => {
           this.setState({
               loaded: true,
               articles: response.data.data,
           })
       });
    };

    render() {
        let {articles, loaded} = this.state;

        return !loaded ? <p>loading...</p> : (
            <>
                <Link to = "/articles/create"><button className = "btn btn-secondary addArticle">New Article</button></Link>
                <h1 className = "articleH1">Articles</h1>
                <ul>
                    {articles.map((article) => 
                        <li className= "articlesLi" key = {article.id}>
                            <Link className ="articleLink" to = {`/articles/${article.id}`}><h3>{article.title}</h3></Link>
                            {article.tags.map((tag, tagIndex) =>
                            <button className="btn btn-secondary" key = {tagIndex}>{tag}</button>
                            )}
                        </li>
                    )}
                </ul>
            </>
        )
    }
}
export default Articles