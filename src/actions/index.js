export const showLanguages = (show) => {
    return {
        type: 'SHOW_LANGUAGES',
        payload: show
    }
}

export const selectLanguage = (idx) => {
    return {
        type: 'SELECT_LANGUAGE',
        payload: idx
    }
}

export const showMobile = (show) => {
    return {
        type: 'SHOW_MOBILE',
        payload: show
    }
}

export const authLogin = (type, username) => {
    return {
        type: 'LOGIN_FACEBOOK',
        payload: username
    }
}