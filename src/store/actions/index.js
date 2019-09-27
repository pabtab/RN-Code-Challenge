import { all } from 'redux-saga/effects'
import { getCocktailListAsync } from './cocktailListActions'

export default function* rootSaga() {
  yield all([
    getCocktailListAsync()
  ])
}