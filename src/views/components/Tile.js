import React from 'react';

export const TILE_CLASS = "tileElem";

const Tile = ({image, tileNum}) => {
    return (
        <div id={`${TILE_CLASS}_${tileNum}`} className={TILE_CLASS}>
            <img src = {image.url} />
        </div>
    );
};

export default Tile;
 