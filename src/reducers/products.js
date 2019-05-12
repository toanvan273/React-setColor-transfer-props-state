import * as types from './../constants/index'

const findIndex = (products, id) => {
    let result = -1
    products.forEach((product, index) => {
        if (product.id === id) {
            return result = index
        }
    });
    return result
}

let initialState = []
let index
const products = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.products
            return [...state]
        case types.DELETE_PRODUCT:
            index = findIndex(state, action.id)
            state.splice(index, 1)
            return [...state]
        case types.ADD_PRODUCT:
            state.push(action.product)
            return [...state]
        case types.UPDATE_PRODUCT:
            index = findIndex(state, action.product.id)
            state[index] = action.product
            return [...state]
        default:
            return [...state]
    }
}
export default products