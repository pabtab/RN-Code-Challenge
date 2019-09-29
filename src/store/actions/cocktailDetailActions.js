import { put, takeLatest } from 'redux-saga/effects'

import { GET_COCKTAIL_DETAIL_ASYNC, GET_COCKTAIL_DETAIL_LOADING, GET_COCKTAIL_DETAIL } from "./actionTypes";
import { getDetailCocktail } from "../../api";

export const callDetailCocktail = (data) => ({
  type: GET_COCKTAIL_DETAIL_ASYNC,
  data
})

export function* getDetailCocktailAsync() {
  yield takeLatest(GET_COCKTAIL_DETAIL_ASYNC, getDetailCocktailApi)
}

const getDetailByCocktail = async (data) => {
  const dataWithDetailCocktail = await Promise.all(data.map(async item => {
    const detail = await getDetailCocktail(item.idDrink);
      return {
        ...item,
        detail
      }
    }))

  return dataWithDetailCocktail
}


function* getDetailCocktailApi({data}) {
yield put({ type: GET_COCKTAIL_DETAIL_LOADING, isLoading: true })
const cocktailsWithDetails = yield getDetailByCocktail(data)

yield put({ type: GET_COCKTAIL_DETAIL, payload: cocktailsWithDetails, isLoading: false })

}