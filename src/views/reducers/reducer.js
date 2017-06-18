
const initState = {
    images: [],
    pending: false
}

const load = (state = initState, action) => {
    switch(action.type) {
        case 'FETCH_IMAGES_PENDING': 
            return {
                images: state.images,
                pending: true,
            };
        case 'FETCH_IMAGES_SUCCESS': 
            return {
                images: action.payload,
                pending: false,
            };
        default: 
            return state;
    }
};

export default load;