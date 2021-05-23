import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import { Icon, Layout,Input , TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { connect } from "react-redux"
import citiesAction from "../redux/actions/citiesAction"

import Home from "../pages/Home"
import Cities from "../pages/Cities"
import City from "../pages/City"
import Search from "../components/Search"
import Itinerary from "../components/Itinerary"

const stack = createStackNavigator()

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);

const searchIcon = props =>(
    <Icon { ...props } name="search-outline" />
)

const stackHome = ({ search }) => {


  const renderBackAction = ({ navigate },path ) => (
    <TopNavigationAction icon={BackIcon} onPress={ ()=> navigate(path) } />
  );

  const header = ({ navigation })=>(
    <Layout style={styles.container} level='1'>
        <TopNavigation
            alignment='center'
            title='Cities'
            accessoryLeft={ ()=> renderBackAction(navigation,"Home" )}
            accessoryRight={ ()=> <TopNavigationAction icon={searchIcon} onPress={ ()=> navigation.navigate("Search") } /> }
        />
        <Cities navigation={ navigation } />
    </Layout>)

  const searchStack = ({ navigation })=>(
    <Layout style={styles.container} level='1'>
      <TopNavigation
      accessoryLeft={ () => renderBackAction(navigation,"Cities")  }
        accessoryRight={ ()=> <TopNavigationAction icon={ () => <Input style={ styles.searchInput } onChangeText={ search } /> }  />  }
      />
      <Search />
    </Layout>
  )

/* --------------------------------------------------------------- */

  return (
      <stack.Navigator  >
          <stack.Screen name="Home" component={ Home } options={{ headerShown:false }} />
          <stack.Screen name="Cities" component={ header } options={{ headerShown:false }} />
          <stack.Screen name="City" component={ City } options={{ headerShown:false }} />
          <stack.Screen name="Itinerary" component={ Itinerary } options={{ headerShown:false }} />
          <stack.Screen name="Search" component={ searchStack } options={{ headerShown:false }} />
    </stack.Navigator>
  );
};

const mapDispatchToProps ={
   search: citiesAction.search
}


export default connect(null,mapDispatchToProps) (stackHome)


const styles = StyleSheet.create({
  container: {
    minHeight: 128,
    flex:1
  },
  searchInput:{
    width:300
  }
});









/* import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../pages/Home"
import Cities from "../pages/Cities"
import City from "../pages/City"

const stack = createStackNavigator()

export const StackHome = () =>{

return< stack.Navigator>
        <stack.Screen name="Home" component={ Home } options={{ headerShown:false }}  />
        <stack.Screen name="Cities" component={ Cities } />
        <stack.Screen name="City" component={ City } />
    </stack.Navigator>
}
 */