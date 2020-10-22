import { combineReducers } from 'redux'
import { IntlReducer as Intl } from 'react-redux-multilingual'
import translationReducer from './translationReducer'
const appReducer = combineReducers({
    Intl,
    translationReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}



export default rootReducer