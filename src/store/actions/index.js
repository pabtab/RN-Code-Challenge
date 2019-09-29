import { all } from 'redux-saga/effects'
import { getCocktailListAsync } from './cocktailListActions'
import { getDetailCocktailAsync } from './cocktailDetailActions'

export default function* rootSaga() {
  yield all([
    getCocktailListAsync(),
    getDetailCocktailAsync()
  ])
}