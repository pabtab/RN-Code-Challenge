# RN-Code-Challenge


## Instructions:

Please clone the repository, complete the exercise, and submit a Pull Request for us to review! If you have any questions, you can reach out directly here or leave comments on your PR which we will respond to. Remember, all instructions for running the application (including installing relevant libraries, etc.) should be included in the README. 


## Delivery Steps: 

1. Create a branch from `master` named `base` and push all the third-party code needed (Libraries, Frameworks, etc.).
2. Create a branch from `base` named `code-challenge` and push your own code (Remember to update the Readme file providing any instructions on how to run the project if needed).
3. Create a Pull Request from `code-challenge` to `base` for us to review.


## Please answer the following questions once you finish codding:

A) Describe the strategy used to consume the API endpoints and the data management.

> First of all, when we define a user story the backend need to understand the feature and how can they proceed to make the endpoint and the service to deliver, so, if the backend is in our team, the task is easy because its easier change with an API with graphql can be easier or the structure in the backend and provide the info with the complete structure, but if the backend is not in our team or it's worse change the structure on the backend we can talk with the UX or designers to change the wireframe and only get a link or button to get the ingredients or something like that.
If nothing of these alternatives is valid, so one of many solutions is call the api in each card, but, I think that solution is the worst because the performance, data, servers, network, memory, a lot of things will be implicated in this, so I think the best way to proceed for this case is with pagination in the front-end layer.
How?, We render only 5 cards (can be 10), call the ingredients API 5 times with the respective id, and use the onEndReached of Flatlist, so when the user scroll until the last card, call the other 5 cards with the api and so on.

>I saved the data of the first API on the store and also the data that its render and fill it in each pagination call

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

> I used React Navigation, because its the most used library and with good community and stars on github.

C) Have you used any strategy to optimize the performance of the list generated for the first feature?

> Yes, It's difficult to improve more the performance because with 10 cards initially its also bad because the endpoint is not good, but we can use memo and some other strategies. I use pagination with 10 first calls to detail api, but I know we can improve the performance a little bit more.

D) Would you like to add any further comments or observations?

> The challenge was very good, I made the search input as a component inside the container and not in the header bar because, I used react navigation with native base and with native base It can be easier with the header tag use the SearchBar, but the behavior meets the requirement


## Overview:

Implement a simple mobile cocktails catalogue (master / detail). The catalogue consists of a table view list of cocktails with their name, toppings and photo. Once the user taps on a specific row it will push a new screen with that drink’s details: Name, Photo, Ingredients and Preparation.


## Requirements:

1. Use the React Native CLI to create the application (The Expo CLI is not allowed).
2. Use Redux as the state container over other options like React Context in order to manage the data flow on the app.


## Features:

**1. Cocktails list:**

For each row of the list it will display the Cocktail name, photo and ingredients (See wireframe 1). 
In the case where there are more than 2 ingredients, add a label that reads "y X ingredientes más" where `X` is the amount of extra ingredients.

The API endpoint that has the list of drinks with Name and Photo is: 

http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass

This returns a JSON list of cocktails, and the information needed in order to populate each row of the list.

```
{
 	strDrink,           → Cocktail name
     	strDrinkThumb,  → Photo URL
      	idDrink       → Cocktail ID
}
```

You'll need to decide the approach to get the ingredients data that is not present on this endpoint. You can comment that approach and the implications inside the code and what can be done to improve this.

Wireframe 1:

![screen shot 2018-02-02 at 12 53 57](https://user-images.githubusercontent.com/263229/35742087-40b1ce26-0818-11e8-91d7-5c2ea0d4a6aa.png)




**2. Cocktail detail:**

Once the user taps on a row from the list mentioned in the previous feature it will push a new screen with the selected cocktail’s details, where it will show it’s name, photo, ingredients (with the quantity on each case next to it) and instructions (See wireframe 2).

The endpoint to be used for this is the following:
 
http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink} → Cocktail ID
I.g.: http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16108

The endpoint returns a JSON with the cocktails info, the needed properties are:
```
{
	strInstructions,  → instructions
	strDrink,         → cocktail name
	strDrinkThumb,    → photo URL
	strIngredient1,   → ingredient 1
	...
	strIngredientN    → ingredient N
}
```

Wireframe 2

![screen shot 2018-02-02 at 12 53 37](https://user-images.githubusercontent.com/263229/35742155-63205b1c-0818-11e8-8b4b-608a46eaa718.png)
	
  
  
  
**3. Bonus Points: (Optional)**

A) Implement a filter by name functionality on the first screen that automatically filters the results while typing, only showing the rows that satisfy the criteria entered by the user.

B) Include test coverage for the core features.



Thank you and looking forward to seeing your great work!