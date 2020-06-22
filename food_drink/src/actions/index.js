import * as Types from "../constants/ActionTypes"
import callApi from '../utils/apiCaller';
const jwt = require("jsonwebtoken")

export const actFetchProductsRequest = () =>{
    return (dispatch) =>{
        return callApi(`products?_sort=id&_order=desc&_limit=8`,"GET",null).then(res => {
            dispatch(actFecthProducts(res.data))
        }).catch(err=>{
        console.log("Loi")
    })
    }
}

export const actFecthProducts = (products) =>{
    return{
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actFetchProductRequest = (id) =>{
    return (dispatch) =>{
        return callApi(`products/${id}`,"GET",null).then(res => {
            dispatch(actFecthProdut(res.data))
        }).catch(err=>{
        console.log("Loi")
    })
    }
}

export const actFecthProdut = (product) =>{
    return{
        type: Types.FETCH_PRODUCT,
        product
    }
}

export const actFetchProductsCategoriesRequest = (id) =>{
    return (dispatch) =>{
        return callApi(`categories?_embed=products`,"GET",null).then(res => {
            dispatch(actFecthProductsCategories(res.data))
        }).catch(err=>{
        console.log("Loi")
    })
    }
}

export const actFecthProductsCategories = (categories) =>{
    return{
        type: Types.FETCH_PRODUCTS_CATEGORIES,
        categories
    }
}

export const actFecthCategoryDetailRequest = (id) =>{
    return (dispatch) =>{
        return callApi(`categories/${id}?_embed=products`,"GET",null).then(res => {
            dispatch(actFecthCategoryDetail(res.data))
        }).catch(err=>{
        console.log("Loi")
    })
    }
}

export const actFecthCategoryDetail = (categoryDetail) =>{
    return{
        type: Types.FETCH_CATEGORY_DETAIL,
        categoryDetail
    }
}

export const actFecthCategoriesRequest = () =>{
    return (dispatch) =>{
        return callApi("categories","GET",null).then(res => {
           dispatch(actFecthCategorys(res.data))
        }).catch(err=>{
        console.log("Loi", err)
    })
    }
}

export const actFecthCategorys = (categories) =>{
    return{
        type: Types.FETCH_CATEGORIES,
        categories
    }
}

export const userPostUserFecth = user =>{
    return dispatch =>{
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data=>{
            localStorage.setItem("token", data.token)
            dispatch(loginUser(data.user))
            console.log(data)
          })
    }
}

export const userPostFecth = user =>{
    return dispatch =>{
        return fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data=>{
            localStorage.setItem("token", data.token)
            // dispatch(loginUser(data.user))
            console.log(data)
          })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})