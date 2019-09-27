import React, {useEffect} from 'react'
import { ScrollView, FlatList, View, ActivityIndicator } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import { Container, Header, Title, Content, Icon, Left, Body, Button, Text } from 'native-base';
import CardComponent from '../../components/CardComponent/CardComponent';

import Styles from './CocktailList.styles'
import { callCocktailList } from '../../store/actions/cocktailListActions';


const CocktailList = (props) => {
  const {payload: cocktailList, isLoading: loadingCocktails} = useSelector(state => state.CocktailList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(callCocktailList())
  }, [dispatch])

  const handleClickCard = ({ idDrink, strDrink }) => {
    props.navigation.navigate('Detail', {
      cocktailId: idDrink,
      cocktailName: strDrink
    })
  }

  const renderKey = (item) => item.idDrink

  const renderCard = ({item}) => {
    return <CardComponent 
      title={item.strDrink}
      image={item.strDrinkThumb}
      onPress={() => handleClickCard(item)}
    />
    //return <View></View>
  }

  

  // {'\u2022'}
  return (
    <View style={Styles.container}>
      {
        loadingCocktails
        ? <ActivityIndicator />
        : <FlatList
          data={cocktailList}
          renderItem={renderCard}
          keyExtractor={renderKey}
        />
      }
    </View>
  )
}

CocktailList.navigationOptions = {
  headerTitle: 'Random Drinks 0.1'
}

export default CocktailList
