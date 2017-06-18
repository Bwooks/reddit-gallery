import React from 'react';

const Tile = ({image}) => {
    return (
        <div>
            <img src = {image.url} />
        </div>
    );
};

export default Tile;