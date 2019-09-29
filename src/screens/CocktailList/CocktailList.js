import React, {useEffect, useState} from 'react'
import { ScrollView, FlatList, View, ActivityIndicator } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import { Container, Header, Title, Content, Icon, Left, Body, Button, Text } from 'native-base';
import CardComponent from '../../components/CardComponent/CardComponent';

import Styles from './CocktailList.styles'
import { callCocktailList } from '../../store/actions/cocktailListActions';
import { callDetailCocktail } from '../../store/actions/cocktailDetailActions';
import { MAX_NUMBER_INGREDIENTS, PAGINATION_NUMBER, MAX_NUM_INGREDIENTS } from '../../utils';


const CocktailList = (props) => {
  const [dataFiltered, setDataFiltered] = useState([]);
  const [dataCocktails, setDataCocktails] = useState([])
  const {payload: cocktailList, isLoading: loadingCocktails} = useSelector(state => state.CocktailList);
  const {
    payload: cocktailListPagination,
    isLoading: loadingCocktailsPagination
  } = useSelector(state => state.CocktailPagDetail);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(callCocktailList())
  }, [dispatch])

  useEffect(() => {
    handlePagination()
  }, [cocktailList])

  const handlePagination = () => {
    const numberOfCardsShowed = dataFiltered.length;
    
    if (cocktailList && cocktailList.length && !loadingCocktails) {
      const newDataFiltered = cocktailList.slice(numberOfCardsShowed, numberOfCardsShowed + PAGINATION_NUMBER)
      const concatNewValues = dataFiltered.concat(newDataFiltered)

      setDataFiltered(concatNewValues)
      dispatch(callDetailCocktail(newDataFiltered))
    }
  }

  const getIngredients = (item) => {
    let numOfIngredients = 0;
    let arrIngredients = [];
    for (let index = 1; index <= MAX_NUM_INGREDIENTS; index++) {
      const ingredient = item.detail[`strIngredient${index}`];
      if (ingredient) {
        numOfIngredients++;

        if (index < MAX_NUMBER_INGREDIENTS) {
          arrIngredients.push(`${'\u2022'} ${ingredient}`);
        }
      } else {
        break;
      }
    }

    arrIngredients.push(`and ${numOfIngredients} more ingredients`);


    return arrIngredients;
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
    >
      <View style={Styles.ingredientsContainer}>
        {
          getIngredients(item).map(item => (
            <Text key={item} style={Styles.ingredientPreview}>{item}</Text>
          ))
        }
      </View>
    </CardComponent>
  }

  
  return (
    <View style={Styles.container}>
      {
        loadingCocktails || loadingCocktailsPagination
        ? <ActivityIndicator />
        : <FlatList
            data={cocktailListPagination}
            renderItem={renderCard}
            keyExtractor={renderKey}
            onEndReached={handlePagination}
            onEndReachedThreshold={0}
          />
      }
    </View>
  )
}

CocktailList.navigationOptions = {
  headerTitle: 'Random Drinks 0.1'
}

export default CocktailList
