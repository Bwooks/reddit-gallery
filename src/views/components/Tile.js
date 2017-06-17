import React from 'react';

const Tile = ({image}) => {
    console.log(image);
    return (
        <div>
            <img src = {image.url} />
        </div>
    );
};

export default Tile;