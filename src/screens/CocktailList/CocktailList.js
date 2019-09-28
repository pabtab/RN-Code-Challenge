import React, {useEffect, useState} from 'react'
import { ScrollView, FlatList, View, ActivityIndicator } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import { Container, Header, Title, Content, Icon, Left, Body, Button, Text } from 'native-base';
import CardComponent from '../../components/CardComponent/CardComponent';

import Styles from './CocktailList.styles'
import { callCocktailList, callIngredientsList } from '../../store/actions/cocktailListActions';


const PAGINATION_NUMBER = 10;

const CocktailList = (props) => {
  const [dataFiltered, setDataFiltered] = useState([])
  const [countPagination, setCountPagination] = useState(0)
  const {payload: cocktailList, isLoading: loadingCocktails} = useSelector(state => state.CocktailList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(callCocktailList())
  }, [dispatch])

  useEffect(() => {
    handlePagination()
    return () => {
      
    };
  }, [cocktailList])

  const handlePagination = () => {
    const numberOfCardsShowed = dataFiltered.length;
    
    if (cocktailList && cocktailList.length && !loadingCocktails) {
      const newDataFiltered = cocktailList.slice(numberOfCardsShowed, numberOfCardsShowed + PAGINATION_NUMBER)
      const concatNewValues = dataFiltered.concat(newDataFiltered)

      setDataFiltered(concatNewValues)
      dispatch(callIngredientsList(newDataFiltered))
    }
  }

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
        loadingCocktails && !dataFiltered
        ? <ActivityIndicator />
        : <FlatList
          data={dataFiltered}
          renderItem={renderCard}
          keyExtractor={renderKey}
          onEndReached={handlePagination}
          onEndReachedThreshold={0}
          refreshing
        />
      }
    </View>
  )
}

CocktailList.navigationOptions = {
  headerTitle: 'Random Drinks 0.1'
}

export default CocktailList
