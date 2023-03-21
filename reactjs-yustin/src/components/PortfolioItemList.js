import axios from 'axios';
import React, { useState, useEffect } from 'react';
export default class ArticleComponent extends React.Component {
    state = {
        articles: [],
        images: []
    }
    componentDidMount() {
        axios.get(`https://drupal-yustin.ddev.site/jsonapi/node/article?include=field_image`)
            .then(res => {
                const articles = res.data.data;
                const images = res.data.included;
                this.setState({ articles });
                this.setState({ images });
            })
    }
    render() {
        const base= "https://drupal-yustin.ddev.site/";
        let articlesArray = [];
        let articleObject= {};
        this.state.articles.map(article => {
            articleObject = {id: 0, title: ''}
            articleObject.id = article.id
            articleObject.title = article.attributes.title
            articlesArray[article.relationships.field_image.data.id] = articleObject
        })
        this.state.images.map(image => {
            articlesArray[image.id].image = base + image.attributes.uri.url
            articlesArray[image.id].imageID = image.id
        })
        return (
            Object.keys(articlesArray).map(key => (
                <>
                    <h1 key={articlesArray[key].id}>{articlesArray[key].title}</h1>
                    <img key={articlesArray[key].imageID} src={articlesArray[key].image}/>
                </>
            ))
        )
    }}

