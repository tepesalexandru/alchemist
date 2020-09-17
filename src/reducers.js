import {combineReducers} from 'redux';

const INITIAL_STATE = {
    showLanguage: true
}

const uiReducer = (oldState = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return oldState;
    }
}

export default combineReducers({
    ui: uiReducer
})