import axios from 'axios';

const actionType = 'FETCH_IMAGES';
const fetchImages = (dispatch, lastImageId, redditType) => {
    dispatch({
        type: `${actionType}_PENDING`,
        pending: true,
        error: false,
        payload: [],
    });
    axios.get('/api/v1/images', {
        params: {  
            lastImageId,
            redditType
        }})
        .then((response)=>{
            dispatch({
                type: `${actionType}_SUCCESS`,
                payload: response.data,
                pending: false,
                error: false,
            });
        })
        .catch((error)=>{
            dispatch({
                type: `${actionType}_FAIL`,
                payload: error,
                pending: false,
                error: true,
            });
        });
};

export default fetchImages;