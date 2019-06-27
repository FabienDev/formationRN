/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Provider} from "react-redux";
import createStore from "./src/store/index";
import AppNavigation from "./src/navigations/AppNavigation";
import { PersistGate } from 'redux-persist/integration/react';


const store = createStore();
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store.store}>
     	<PersistGate loading={null} persistor={store.persiststore}>
          <AppNavigation />
         </PersistGate>
      </Provider>
    )
  }
}