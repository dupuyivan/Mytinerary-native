import React from "react"
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { applyMiddleware, createStore } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"
import mainReducer from "./redux/reducers/mainReducer"
import { NavigationContainer } from '@react-navigation/native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';



import DrawerNavigator from "./navigation/drawNavigator"

const store = createStore( mainReducer, applyMiddleware( reduxThunk )  )

/* const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
); */

export default function App() {

  return ( <>
    <Provider store={ store } >
    <NavigationContainer >

      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <DrawerNavigator />
      </ApplicationProvider>

  </NavigationContainer>
    </Provider>
    </>
  );
}






