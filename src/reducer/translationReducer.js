const SET_LANGUAGE = 'SET_LANGUAGE';

const initialState = {
    locale: 'en'
}
export const setLanguage = (locale) => async dispatch => {
    dispatch({
        type: SET_LANGUAGE,
        locale,
    })
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_LANGUAGE:
            return { ...state, locale: action.locale };
        default:
            return state;
    }
}
export default reducer