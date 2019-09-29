import { put, takeLatest } from 'redux-saga/effects'
import { 
  GET_COCKTAIL_LIST_ASYNC,
  GET_COCKTAIL_LIST,
  GET_COCKTAIL_LIST_ERROR,
  GET_COCKTAIL_LIST_LOADING,
} from './actionTypes'
import { getListCocktails } from '../../api'

function* getCocktailList() {
  yield put({ type: GET_COCKTAIL_LIST_LOADING, isLoading: true })
  
  try {
    const response = yield getListCocktails()

    yield put({ type: GET_COCKTAIL_LIST, payload: response.drinks, isLoading: false })
  } catch (error) {
    yield put({ type: GET_COCKTAIL_LIST_ERROR, payload: [], isLoading: false })
    
  }
}

export function* getCocktailListAsync() {
  yield takeLatest(GET_COCKTAIL_LIST_ASYNC, getCocktailList)
}

export const callCocktailList = () => ({
  type: GET_COCKTAIL_LIST_ASYNC
})