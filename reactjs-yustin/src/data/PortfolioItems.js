import React, {useEffect, useState} from 'react';
import axios from "axios";


function PortfolioItems() {
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('https://drupal-yustin.ddev.site/jsonapi/node/article?include=field_image')
            .then(response => {
                setData(response.data.data);
                setImages(response.data.included);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const base= "https://drupal-yustin.ddev.site/";
    let articlesArray = [];
    let articleObject= {};
    data.map(article => {
        articleObject = {id: 0, title: '', body: ''}
        articleObject.id = article.id
        articleObject.title = article.attributes.title
        articleObject.body = article.attributes.body.value
        articlesArray[article.relationships.field_image.data.id] = articleObject
    })
    images.map(image => {
        articlesArray[image.id].image = base + image.attributes.uri.url
        articlesArray[image.id].imageID = image.id
    })

    return articlesArray;
}

export default PortfolioItems;