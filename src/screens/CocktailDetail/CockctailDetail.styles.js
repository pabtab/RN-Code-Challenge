import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.primary,
    height: '100%'
  },
  ingredients: {
    height: 100
  },
  ingredient: {
    color: 'gray',
    fontSize: 14
  },
  bodyDetail: {
    flex: 1
  },
  instructions: {
    flex: 1,
  },
  instructionsText: {
    fontSize: 14,
    color: 'gray'
  }
})

export default styles