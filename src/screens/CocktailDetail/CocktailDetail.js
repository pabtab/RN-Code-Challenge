import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, Text } from 'react-native';
import {useSelector} from 'react-redux';
import CardComponent from '../../components/CardComponent/CardComponent';
import Styles from './CockctailDetail.styles';
import { MAX_NUM_INGREDIENTS } from '../../utils';


const CocktailDetail = (props) => {
  const cocktailId = props.navigation.getParam('cocktailId');
  const [detailCocktail, setdetailCocktail] = useState();
  const [ingredients, setIngredients] = useState([]);
  const { payload: cocktailsWithDetails } = useSelector(state => state.CocktailPagDetail);

  useEffect(() => {
    getDetailCocktailApi(cocktailId);
  }, []);

  useEffect(() => {
    if (detailCocktail) {
      getIngredients();
    }
  }, [detailCocktail]);

  const getDetailCocktailApi = (cocktailId) => {
    const detailSelectedCocktail = cocktailsWithDetails.find(cocktail => (
      cocktail.detail.idDrink === cocktailId
    ));

    setdetailCocktail(detailSelectedCocktail.detail);
  }

  const getIngredients = () => {
    let arrIngredients = [];
    for (let index = 1; index <= MAX_NUM_INGREDIENTS; index++) {
      const ingredient = detailCocktail[`strIngredient${index}`];
      const measure = detailCocktail[`strMeasure${index}`];
      if (!ingredient) {
        setIngredients(arrIngredients);
        return;
      }
      
      const receipe = `${measure} - ${ingredient}`;
      arrIngredients.push(receipe);
    }
  }

  const renderIngredients = () => {
    return ingredients.map((receipe) => (
      <Text key={receipe} style={Styles.ingredient}>{receipe}</Text>
    ))
  }

  return (
    <View style={Styles.container}>
      {
        detailCocktail
        ? <CardComponent
            expanded
            image={detailCocktail.strDrinkThumb}
          >
            <View style={Styles.bodyDetail}>
              <View style={Styles.ingredients}>
                {
                  renderIngredients()
                }
              </View>
              <View style={Styles.instructions}>
                <Text style={Styles.instructionsText}>{'\u2022'} How to prepare</Text>
                <Text style={Styles.instructionsText}>{detailCocktail.strInstructions}</Text>
              </View>
            </View>
          </CardComponent>
        : <ActivityIndicator />
      }

    </View>
  )
}

CocktailDetail.navigationOptions = navData => ({
  headerTitle: navData.navigation.getParam('cocktailName')
})

export default CocktailDetail
