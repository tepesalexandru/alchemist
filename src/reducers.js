import {combineReducers} from 'redux';

const INITIAL_STATE = {
    showBackground: false,
    showLanguage: false,
    showMobile: false,
    languageSelected: 0,
    languages: ['English', 'French', 'Spanish']
}

const uiReducer = (oldState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SHOW_LANGUAGES':
            return {...oldState, showBackground: action.payload, showLanguage: action.payload}
        case 'SHOW_MOBILE':
            console.log(oldState.showBackground)
            return {...oldState, showBackground: action.payload, showMobile: action.payload}
        case 'SELECT_LANGUAGE':
            return {...oldState, languageSelected: action.payload}
        default:
            return oldState;
    }
}

const userReducer = (oldState = "", action) => {
    switch (action.type) {
        case 'LOGIN_FACEBOOK':
            return action.payload;
        default:
            return oldState;
    }
}

export default combineReducers({
    ui: uiReducer,
    user: userReducer
})