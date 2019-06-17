import React from 'react';

const Card = (props) => {
    const { product } = props;
    return (
        <div>
            {product}
        </div>
    );
}

export default Card;
