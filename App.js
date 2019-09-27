/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'


import ScreensNavigation from './src/navigation';
import rootSaga from './src/store/actions';
import rootReducer from './src/store/reducers';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

const App = () => {
  return (
    <Provider store={store}>
      <ScreensNavigation />
    </Provider>
  );
};

export default App;
