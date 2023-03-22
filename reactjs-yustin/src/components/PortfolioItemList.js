import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PortfolioItems from "../data/PortfolioItems";
function PortfolioItemList() {
    const articles = PortfolioItems();

    return (
            Object.keys(articles).slice(1, 3).map(key => (
                <Grid item xs={12} md={6}>
                    <CardActionArea component="a" href="#">
                        <Card sx={{ display: 'flex' }}>
                            <CardContent sx={{ flex: 1 }}>
                                <Typography component="h2" variant="h5">
                                    {articles[key].title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                   Datum
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {articles[key].body}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    Continue reading...
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                                image={articles[key].image}
                                alt="test"
                            />
                        </Card>
                    </CardActionArea>
                </Grid>
    )))

}
export default PortfolioItemList;
