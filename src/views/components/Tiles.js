import Tile from './Tile.js';
import React from 'react';
import Gallery from 'react-grid-gallery';

const REDDIT_TYPE = 't3_';
const Tiles = (props) => {
    const lastImageId = props.images[props.images.length - 1].data.id;
    if(props.lastImageId !== lastImageId) {
        props.getLastImageId(lastImageId,REDDIT_TYPE);
    }
    let gridImages = props.images.map((image, currentIndex)=>{
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
    return (
            <Gallery images={gridImages} rowHeight={500}/>
    );
};
export default Tiles;