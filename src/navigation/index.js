import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import CocktailList from '../screens/CocktailList';
import CocktailDetail from '../screens/CocktailDetail';

const screensContainer = createStackNavigator({
  List: CocktailList,
  Detail: CocktailDetail 
}, {
  defaultNavigationOptions: {
    headerTransparent: true,
    headerTintColor: 'white'
  }
})

export default createAppContainer(screensContainer)