import React from 'react';
import PropTypes from "prop-types";
import "../css/portfolio-item.css"
const Item = ({title,body,image}) => (
    <div className="PItem">
        <img src={image} alt="img"/>
        <h1>{title}</h1>
    </div>
)

Item.propTypes ={
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}