import api from '../api';
import React, { Component } from 'react';

class Comments extends Component {
    constructor(){
        super();
        this.state = {
            loaded: false,  
            article: {}
        };
    }

    componentDidMount(){
        let id = this.props.id;
        api.get(`/blog/articles/${id}/comments`).then(response => {
           this.setState({
               loaded: true,
               article: response.data.data,
           })
       });
    };

    render() {
        let {article, loaded } = this.state;

        return !loaded ? <p>loading...</p> : (
            <div key = {article.id} className="comments">
                {article.map((comment, commentID) =>
                    <li key = {commentID} className= "commentsLi">
                        <div>
                        <h5>Email Address</h5>
                        <p>{comment.email}</p>
                        </div>
                        <div>
                        <h5>Comment:</h5>
                        <p>{comment.comment}</p>
                        </div>
                    </li>
                )}
            </div>
        )
    }
}
export default Comments