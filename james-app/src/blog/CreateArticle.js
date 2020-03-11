import api from '../api';
import React, { Component } from 'react';

class CreateArticle extends Component {
    constructor(props){
        super(props);
        this.state = {  
            title: "",
            article: "",
            tags: "",
        };
        this.handleTitle = this.handleTitle.bind(this);
        this.handleArticle = this.handleArticle.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleTitle(e){
        this.setState({
            title: e.currentTarget.value,
        })
    }

    handleArticle(e){
        this.setState({
            article: e.currentTarget.value,
        })
    }

    handleTags(e){
        this.setState({
            tags: e.currentTarget.value,
        })
    }

    handleCreate(e){
        e.preventDefault();
        let {title, article, tags} = this.state;
        api.post("/blog/articles", {
            title: title,
            article: article,
            tags: tags.split(",")
        })
    }

    render() {
        let {title, article, tags} = this.state;

        return (
            <>
                <h1 className = "articleH1">Create Article</h1>
                <form className="formWrapper">
                    <label htmlFor="title">Title</label>
                    <input onChange = {this.handleTitle} name="title" value = {title} className = "form" id="title"></input>
                    <label htmlFor= "article">Article</label>
                    <textarea onChange = {this.handleArticle} name="article" value = {article}  className = "form" id="article"></textarea>
                    <label htmlFor="tags">Tags</label>
                    <input onChange = {this.handleTags} name="tags" value = {tags}  className = "form"  id="tags"></input>
                    <button onClick = {this.handleCreate}  className="btn btn-primary formButton">Submit</button>
                </form>
            </>
        )
    }
}
export default CreateArticle