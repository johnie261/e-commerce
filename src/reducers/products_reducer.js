import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return {...state, IsSidebarOpen: true}
  }
  if (action.type === SIDEBAR_CLOSE) {
    return {...state, IsSidebarOpen: false}
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return {...state, isProductLoading: true}
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featuredProducts = action.payload.filter((product)=> product.featured === true )
    return {...state, isProductLoading: false,
       products: action.payload, featuredProducts}
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {...state, isProductLoading: false}
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {...state, isSingleProductLoading: true, isSingleProductError: false}
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {...state, isSingleProductLoading: false, singleProducts: action.payload}
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {...state, isSingleProductLoading: false, isSingleProductError: true}
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
