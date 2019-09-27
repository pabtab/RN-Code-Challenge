import {combineReducers} from 'redux'
import cocktailListReducer from './cocktailListReducer'


const rootReducer = combineReducers({
  CocktailList: cocktailListReducer
})

export default rootReducer