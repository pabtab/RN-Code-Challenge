import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.primary,
    flex: 1
  },
  ingredientPreview:{
    fontSize: 12,
    color: 'gray'
  },
  ingredientsContainer: {
    height: 100,
    width: '100%'
  }
})

export default styles