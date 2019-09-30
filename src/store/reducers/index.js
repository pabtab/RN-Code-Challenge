import {combineReducers} from 'redux'
import cocktailListReducer from './cocktailListReducer'
import cocktailDetailReducer from './cocktailDetailReducer'


const rootReducer = combineReducers({
  CocktailList: cocktailListReducer,
  CocktailPagDetail: cocktailDetailReducer,
})

export default rootReducer