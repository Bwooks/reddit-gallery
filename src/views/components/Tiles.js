import Tile from './Tile.js';
import React from 'react';

const Tiles = ({images}) => {
    let tileNum = 0;
    return (
        <div>
            {images.map((image)=>{
                const containsImage = /imgur/g.test(image.data.domain);
                if(containsImage) {
                    tileNum++;
                    return <Tile image={image.data} tileNum = {tileNum} key = {tileNum}/>
                }
            })}
        </div>
    );
};
export default Tiles;