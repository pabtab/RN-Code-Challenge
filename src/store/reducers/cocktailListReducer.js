import { GET_COCKTAIL_LIST, GET_COCKTAIL_LIST_LOADING } from "../actions/actionTypes"

const initialState = {
  payload: [],
  isLoading: false
}

export default (state = initialState, { type, payload, isLoading }) => {
  switch (type) {

  case GET_COCKTAIL_LIST:
    return { ...state, payload, isLoading }

  case GET_COCKTAIL_LIST_LOADING: 
    return {...state, isLoading}

  default:
    return state
  }
}
