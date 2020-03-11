import api from '../api';
import React, { Component } from 'react';
import Comments from './Comments';

class Article extends Component {
    constructor(){
        super();
        this.state = {
            loaded: false,  
            article: {}
        };
    }

    componentDidMount(){
        let id = this.props.id;
        api.get(`/blog/articles/${id}`).then(response => {
           this.setState({
               loaded: true,
               article: response.data.data,
           })
       });
    };

    render() {
        let {article, loaded } = this.state;

        return !loaded ? <p>loading...</p> : (
            <div key = {article.id}>
                <h3>{article.title}</h3>
                <p>{article.article}</p>
                {article.tags.map((tag, tagIndex) =>
                <button className="btn btn-secondary" key = {tagIndex}>{tag}</button>
                )}
                <h3>Comments</h3>
                <ul>
                    <Comments id={article.id}></Comments>
                </ul>
            </div>
        )
    }
}
export default Article