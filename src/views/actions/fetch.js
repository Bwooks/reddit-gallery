import axios from 'axios';

const actionType = 'FETCH_IMAGES';
const fetchImages = (dispatch) => {
    dispatch({
        type: `${actionType}_PENDING`,
        pending: true,
    });

    axios.get('/api/v1/images')
        .then((response)=>{
            dispatch({
                type: `${actionType}_SUCCESS`,
                payload: response.data,
                pending: false,
            });
        })
        .catch((error)=>{
            dispatch({
                type: `${actionType}_FAIL`,
                payload: error,
                pending: false,
            });
        });
};

export default fetchImages;