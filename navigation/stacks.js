import React from "react"
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



