import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if(action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice)
    return {...state, 
      allProducts: [...action.payload], 
      filtredProducts: [...action.payload],
      filters: {...state.filters, maxPrice: maxPrice, price: maxPrice}
    }
  }
  if(action.type === SET_GRIDVIEW) {
    return {...state, Grid_view: true}
  }
  if(action.type === SET_LISTVIEW) {
    return {...state, Grid_view: false}
  }
  if(action.type === UPDATE_SORT) {
    return {...state, sort: action.payload}
  }
  if(action.type === SORT_PRODUCTS) {
    const {sort, filtredProducts} = state
    let sortedArray = [...filtredProducts]
    if(sort === "price-lowest") {
      sortedArray = sortedArray.sort((a,b) =>a.price-b.price)
    }
    if(sort === "price-highest") {
      sortedArray = sortedArray.sort((a,b) =>b.price-a.price)
    }
    if(sort === "name-a") {
      sortedArray = sortedArray.sort((a,b) =>a.name.localeCompare(b.name))
    }
    if(sort === "name-z") {
      sortedArray = sortedArray.sort((a,b) =>b.name.localeCompare(a.name))
    }
    return {...state, filtredProducts: sortedArray}
  }
  if(action.type === UPDATE_FILTERS){
    const {name, value} = action.payload
    return {...state, filters: {...state.filters, [name]: value}}
  }
  if(action.type === FILTER_PRODUCTS) {
    const {allProducts} = state
    const {text,
      company,
      category,
      color,
      price,
      shipping
    } = state.filters

    let tempProducts = [...allProducts]
    if(text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text)
      })
    }
    if(category !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.category === category
      })
    }
    if(company !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.company === company
      })
    }
    if(color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color)
      })
    }
    
    tempProducts = tempProducts.filter((product) => product.price <= price)
   
    if(shipping) {
      tempProducts = tempProducts.filter((product) => product.shipping === true)
    }
    return {...state, filtredProducts: tempProducts}
  }
  if(action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.maxPrice,
        shipping: false,
      }
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
