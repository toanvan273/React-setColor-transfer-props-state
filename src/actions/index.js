import * as types from './../constants/index'
import callApi from './../utils/apiCaller'

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}
export const actFetchProducts = products => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}

export const actDelelteProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(deleteProduct(id))
        })
    }
}

export const deleteProduct = id => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = product => {
    return dispatch => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(addProduct(res.data))
        })
    }
}

export const addProduct = product => {
    return {
        type: types.ADD_PRODUCT,
        product,
    }
}

export const actGetProductRequest = id => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(getProduct(res.data))
        })
    }
}

export const getProduct = product => {
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = product => {
    return dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(updateProduct(res.data))
        })
    }
}

export const updateProduct = product => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}
