import { combineReducers } from 'redux'
import products from './products'
import itemEditing from './itemEditing'
const rootReducers = combineReducers({
    products,
    itemEditing
})

export default rootReducers