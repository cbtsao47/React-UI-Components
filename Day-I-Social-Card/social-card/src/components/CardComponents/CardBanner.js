import React from 'react';
import './Card.css';

function CardBanner(props){
    return(
        <img className="card__img" src = {props.src} alt="react logo"/>
    );
}

export default CardBanner;