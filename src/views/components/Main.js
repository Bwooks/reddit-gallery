import React from 'react';
import axios from 'axios';
import Tiles from './Tiles.js';
import fetchImages from '../actions/fetchAction.js';
import {connect} from 'react-redux';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lastImageId: '',
            redditType: ''
        }
    }

    componentWillMount() {
        const {dispatch} = this.props;
        const {lastImageId, redditType} = this.state;
        fetchImages(dispatch, lastImageId, redditType);
        window.addEventListener('scroll', this.onScrollBottom.bind(this));
    }

    onScrollBottom() {
        let doc = event.target;
        const scrollLeftToGo = doc.documentElement.offsetHeight - (window.pageYOffset + window.innerHeight);
        if(Math.floor(scrollLeftToGo) === 0) {
            const {lastImageId, redditType} = this.state;
            this.loadMoreImages(lastImageId,redditType);
        }
    }

    loadMoreImages(lastImageId, redditType) {
        const {dispatch} = this.props;
        fetchImages(dispatch, lastImageId, redditType);
    }
    
    getLastImageId(lastImageId, redditType) {
        this.setState({
            lastImageId,
            redditType,
        });
    }
    
    render() {
        const {pending, images} = this.props;
        return (
            !pending && images.length > 0 ? <Tiles images={this.props.images} 
                getLastImageId = {this.getLastImageId.bind(this)}
                lastImageId={this.state.lastImageId}
            /> 
            : null
        );
    }

}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}


export default connect(mapStateToProps)(Main);