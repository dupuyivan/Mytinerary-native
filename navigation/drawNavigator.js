import React from "react"
import { View, Text, Image } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { StackHome } from "./stacks"

import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn"

const drawer = createDrawerNavigator()

const DrawerNavigator = ()=>{

return <drawer.Navigator >

    <drawer.Screen name="Home" component={ StackHome } />
    <drawer.Screen name="SignUp" component={ SignUp } />
    <drawer.Screen name="SignIn" component={ SignIn } />

    </drawer.Navigator>

}

export default DrawerNavigator

const User = ()=>{
    return<View style={{ flexDirection:"row" }}>
        <Image style={{ width:40, height:40 }}
         source={{ uri:"https://www.alohacriticon.com/wp-content/uploads/2019/08/leonardo-dicaprio-foto-biografia.jpg" }} />
        <Text>User</Text>
        </View>
}












