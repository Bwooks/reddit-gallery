import Tile from './Tile.js';
import React from 'react';

const Tiles = ({images}) => {
    return (
        <div>
            {images.map((image, currentIndex)=>{
                const containsImage = /imgur/g.test(image.data.domain);
                if(containsImage) {
                    return <Tile image={image.data} key = {currentIndex}/>
                }                
            })}
        </div>
    );
};
export default Tiles;