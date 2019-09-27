import React from 'react'
import { View, Text } from 'react-native'

const CocktailDetail = () => {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  )
}

CocktailDetail.navigationOptions = navData => ({
  headerTitle: navData.navigation.getParam('cocktailDetail')
})

export default CocktailDetail
