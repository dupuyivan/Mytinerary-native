import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../pages/Home"
import Cities from "../pages/Cities"
import City from "../pages/City"
import Search from "../components/Search"
import { Button } from "react-native"

const stack = createStackNavigator()

export const StackHome = () =>{

return< stack.Navigator>
        <stack.Screen name="Home" component={ Home } options={{ headerShown:false }}  />
        <stack.Screen name="Cities" component={ Cities } options={ props => ({ 
            headerRight: ()=> <Button title="Search" onPress={ ()=> props.navigation.navigate("Search") } />
        })} />
        <stack.Screen name="City" component={ City } />
        <stack.Screen name="Search" component={ Search } />
    </stack.Navigator>
}



