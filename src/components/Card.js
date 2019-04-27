import React from 'react';
import './Card.css'
const Card = (props) => {
    return (
        <div className= 'bg-light-blue dib br3 pa3 ma2 grow '>
            <img src={`https://robohash.org/${props.id}?100x100`} alt='robot'/>
            <h3>{props.name}</h3>
            <p>{props.email}</p>
        </div>
    )
}

export default Card
