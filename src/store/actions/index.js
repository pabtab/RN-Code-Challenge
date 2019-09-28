import { all } from 'redux-saga/effects'
import { getCocktailListAsync, getIngredientsAsync } from './cocktailListActions'

export default function* rootSaga() {
  yield all([
    getCocktailListAsync(),
    getIngredientsAsync()
  ])
}