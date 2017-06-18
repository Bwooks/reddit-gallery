import {createStore} from 'redux';
import rootReducer from './reducers/reducer.js';


const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;