import React from 'react';
import axios from 'axios';
import Tiles from './Tiles.js';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
        };
    }

    fetchImages() {
        return axios.get('/images')
            .then((response)=>{
                return response;
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    componentWillMount() {
        const promise = this.fetchImages();
        return promise.then((images)=>{
            this.setState({
                images: images.data
            })
        })
    }

    render() {
        const loaded = this.state.images.length > 0;
        return (
            loaded ? <Tiles images={this.state.images}/> : null
        );
    }

}

export default Main;
