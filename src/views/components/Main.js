import React from 'react';
import axios from 'axios';
import Tiles from './Tiles.js';
import fetchImages from '../actions/fetch.js';
import {connect} from 'react-redux';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        fetchImages(this.props.dispatch);
    }

    render() {
        return (
            !this.props.pending ? <Tiles images={this.props.images}/> : null
        );
    }

}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}


export default connect(mapStateToProps)(Main);