import React from "react"
import { View, Text, Image } from "react-native"
import { createDrawerNavigator, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { connect } from "react-redux"
import authACtion from "../redux/actions/authAction"

import { StackHome } from "./stacks"
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn"

const drawer = createDrawerNavigator()

const DrawerNavigator = ({ userLogged })=>{

return <drawer.Navigator >

    <drawer.Screen name="Home" component={ StackHome } />
    {
        !userLogged 
        ? <>
            <drawer.Screen name="SignUp" component={ SignUp } />
            <drawer.Screen name="SignIn" component={ SignIn } />
          </>
        : null       
    }
    </drawer.Navigator>
}

const mapStateToProsps = state => {
    return{
        userLogged: state.authReducer.userLogged
    }
}

export default connect(mapStateToProsps,null) (DrawerNavigator)

const User = ()=>{
    return<View style={{ flexDirection:"row" }}>
        <Image style={{ width:40, height:40 }}
         source={{ uri:"https://www.alohacriticon.com/wp-content/uploads/2019/08/leonardo-dicaprio-foto-biografia.jpg" }} />
        <Text>User</Text>
        </View>
}
