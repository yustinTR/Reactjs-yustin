import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
function PortfolioItemList() {
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
        articleObject = {id: 0, title: ''}
        articleObject.id = article.id
        articleObject.title = article.attributes.title
        articlesArray[article.relationships.field_image.data.id] = articleObject
    })
    images.map(image => {
        articlesArray[image.id].image = base + image.attributes.uri.url
        articlesArray[image.id].imageID = image.id
    })

    return (
            Object.keys(articlesArray).slice(1, 3).map(key => (
                <Grid item xs={12} md={6}>
                    <CardActionArea component="a" href="#">
                        <Card sx={{ display: 'flex' }}>
                            <CardContent sx={{ flex: 1 }}>
                                <Typography component="h2" variant="h5">
                                    {articlesArray[key].title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                   Datum
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {articlesArray[key].body}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    Continue reading...
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                                image={articlesArray[key].image}
                                alt="test"
                            />
                        </Card>
                    </CardActionArea>
                </Grid>
    )))

}

export default PortfolioItemList;