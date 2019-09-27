import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import CocktailList from '../screens/CocktailList/CocktailList';
import CocktailDetail from '../screens/CocktailDetail/CocktailDetail';
import Colors from '../constants/Colors';

const screensContainer = createStackNavigator({
  List: CocktailList,
  Detail: CocktailDetail 
}, {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1,
    }
  }
})

export default createAppContainer(screensContainer)