import { GET_COCKTAIL_DETAIL_LOADING, GET_COCKTAIL_DETAIL } from "../actions/actionTypes"

const initialState = {
  payload: [],
  isLoading: false
}

export default (state = initialState, { type, payload, isLoading }) => {
  switch (type) {

  case GET_COCKTAIL_DETAIL_LOADING: 
    return {...state, isLoading}

  case GET_COCKTAIL_DETAIL: 
    return {
      ...state,
      isLoading,
      payload: state.payload.concat(payload)
    }

  default:
    return state
  }
}
