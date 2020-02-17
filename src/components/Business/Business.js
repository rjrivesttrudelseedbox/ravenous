import React from 'react';
import './Business.css';
import PropTypes from 'prop-types'

class Business extends React.Component {
    render() {
        const {
            reviewCount, 
            rating, 
            category, 
            zipCode, 
            state, 
            city, 
            address, 
            imageSrc, 
            name,
            site,
        } = this.props.business;

        const direction = `https://www.google.com/maps/place/${name}+${city}`;

        return (
            <div className="Business">
                <div className="image-container">
                    <a href={site} target='_blank'><img src={imageSrc} alt={name}/></a>
                </div>
                <h2>{name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                    <p><a href={direction} target='_blank'>{address}</a></p>
                    <p>{city}</p>
                    <p>{state} {zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                    <h3>{category}</h3>
                    <h3 className="rating">{rating} stars</h3>
                    <p>{reviewCount} reviews</p>
                    </div>
                </div>
            </div>
            
        );
    }
}


export default Business;

Business.propTypes = {
    name:           PropTypes.string.isRequired,
    imageSrc:       PropTypes.string.isRequired,
    address:        PropTypes.string.isRequired,
    city:           PropTypes.string.isRequired,
    state:          PropTypes.string.isRequired,
    zipCode:        PropTypes.string.isRequired,
    category:       PropTypes.string.isRequired,
    rating:         PropTypes.number.isRequired,
    reviewCount:    PropTypes.number.isRequired
}

Business.defaultProps = {
    name:           "here is my name",
    imageSrc:       "here is my image",
    address:        "here is my address",
    city:           "You have fail this city !!!",
    state:          "here is the united state",
    zipCode:        "here is my Zipper",
    category:       "here is my category",
    rating:         21,
    reviewCount:    69
}