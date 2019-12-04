import React from 'react';

const MyCard = ({user, img, bio, location}) => {
    return (
        <div className="card">
            <img src={img} alt="My Stuff"/>
            <h1> Name:{user}</h1>
            <h3> Bio:{bio}</h3>
            <h3> Location:{location}</h3>
        </div>
    )
}

export default MyCard

