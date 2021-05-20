import React from "react"
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { applyMiddleware, createStore } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"
import mainReducer from "./redux/reducers/mainReducer"
import { NavigationContainer } from '@react-navigation/native';

import DrawStack from "./navigation/drawNavigator"

const store = createStore( mainReducer, applyMiddleware( reduxThunk )  )

export default function App() {

  return (
    <Provider store={ store } >
      <NavigationContainer >
        <DrawStack />
      </NavigationContainer >
    </Provider>
  );
}






