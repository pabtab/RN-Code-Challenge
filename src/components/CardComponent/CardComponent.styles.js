import { StyleSheet } from 'react-native'

const card = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: 10,
    
  },
  container: {
    
  },
  cardExpanded: {
    height: 500,
    borderRadius: 10,
  },
  containerExpandedCard: {
    flex: 1
  },
  titleContainer: {
    height: 50
  },
  title: {
    fontSize: 30,
    color: 'gray'
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    //backgroundColor: 'gray',
  },
  image: {
    flex: 1,
    borderRadius: 5
  },
  imageContainerExpanded: {
    height: 200,
    width: '100%'
    //backgroundColor: 'gray',
  },
  imageExpanded: {
    width: '100%',
    height: 200,
  },
  bodyContainerExpanded: {
    marginTop: 20,
    flex: 1
  }
})

export default card