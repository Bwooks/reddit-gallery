
const initState = {
    images: [],
    pending: false,
    error: false,
}

const load = (state = initState, action) => {
    switch(action.type) {
        case 'FETCH_IMAGES_PENDING': 
            return {
                ...state,
                pending: true,
            };
        case 'FETCH_IMAGES_SUCCESS': 
            let images = state.images.slice(0).concat(action.payload);
            return {
                ...state,
                images,
                pending: false,
            };
        default: 
            return state;
    }
};

export default load;