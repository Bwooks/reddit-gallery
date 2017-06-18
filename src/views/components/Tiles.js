import Tile from './Tile.js';
import React from 'react';
import Gallery from 'react-grid-gallery';
const Tiles = ({images}) => {
    console.log(images);
    let gridImages = images.map((image, currentIndex)=>{
        const containsImage = /i\.imgur/g.test(image.data.domain);
        if(containsImage) {
            const width = image.data.preview.images[0].source.width;
            const height = image.data.preview.images[0].source.height;;
            return {
                src: image.data.url,
                thumbnail: image.data.url,
                thumbnailWidth: width,
                thumbnailHeight: height
            };
        } else {
            return null;
        }                
    }).filter((image)=>{
        return image !== null ? true : false;
    });
    console.log(gridImages);
    return (
        <div>
            <Gallery images={gridImages} rowHeight={500}/>
        </div>
    );
};
export default Tiles;