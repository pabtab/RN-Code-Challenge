import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { GET_COCKTAIL_LIST_ASYNC, GET_COCKTAIL_LIST, GET_COCKTAIL_LIST_ERROR, GET_COCKTAIL_LIST_LOADING, GET_INGREDIENTS_LIST_ASYNC } from './actionTypes'
import { getListCocktails } from '../../api'

function* getIngredientsApi(data) {
  //console.log(data)

}

function* getCocktailList() {
  yield put({ type: GET_COCKTAIL_LIST_LOADING, isLoading: true })
  
  try {
    const response = yield getListCocktails()

    yield put({ type: GET_COCKTAIL_LIST, payload: response.drinks, isLoading: false })
  } catch (error) {
    yield put({ type: GET_COCKTAIL_LIST_ERROR, payload: [], isLoading: false })
    
  }
}

export function* getIngredientsAsync() {
  yield takeLatest(GET_INGREDIENTS_LIST_ASYNC, getIngredientsApi)
}

export function* getCocktailListAsync() {
  yield takeLatest(GET_COCKTAIL_LIST_ASYNC, getCocktailList)
}

export const callIngredientsList = (data) => ({
  type: GET_INGREDIENTS_LIST_ASYNC,
  data
})

export const callCocktailList = () => ({
  type: GET_COCKTAIL_LIST_ASYNC
})