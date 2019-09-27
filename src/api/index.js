const BASE_API = 'http://www.thecocktaildb.com/api/json/v1/1/';

export const getListCocktails = async () => {
  const query = await fetch(`${BASE_API}filter.php?g=Cocktail_glass`);
  const data = await query.json();

  return data;
}