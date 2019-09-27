const BASE_API = 'http://www.thecocktaildb.com/api/json/v1/1/';

export const getListCocktails = async () => {
  const query = await fetch(`${BASE_API}filter.php?g=Cocktail_glass`);
  const data = await query.json();

  return data;
}

export const getDetailCocktail = async (idDrink) => {
  const query = await fetch(`${BASE_API}lookup.php?i=${idDrink}`);
  const data = await query.json();
  return data.drinks[0];
}