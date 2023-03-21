import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import axios from "axios";
import Grid from '@mui/material/Grid';

function MyComponent() {
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

    return (
        Object.keys(articlesArray).slice(0, 1).map(key => (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${articlesArray[key].image})`,
            }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={articlesArray[key].image} alt="alt" />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {articlesArray[key].title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {articlesArray[key].body}
                        </Typography>
                        <Link variant="subtitle1" href="#">
                           linkje
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    ))
)
}

export default MyComponent;