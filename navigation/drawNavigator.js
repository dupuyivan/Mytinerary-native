import React from 'react';
import { connect } from "react-redux"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, ImageBackground,View } from "react-native"
import { Drawer, DrawerItem,Button, Layout, Avatar, Text, IndexPath,Divider, Icon } from '@ui-kitten/components';
import authAction from "../redux/actions/authAction"

import stackHome  from "../navigation/stacks"
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn"

const { Navigator, Screen } = createDrawerNavigator();

let propsG

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const Header = (props) => (
  <Layout style={{height: !propsG.userLogged ? 90: 125 ,marginTop:"7%", justifyContent:"center",alignItems:"center" }}>
    { propsG.userLogged

      ? <View style={{ justifyContent:"space-between",width:"100%" }}>
          <View style={{ flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"5%" }}>
            <Avatar size="giant" source={{ uri: propsG.userLogged.picture }} />
            <Text>{ propsG.userLogged.name + " " + propsG.userLogged.last_name  }</Text>
          </View>
          <Button onPress={ ()=> propsG.logOut() } status="danger" appearance='outline' style={{ marginBottom:-15 }} size='small'>LogOut</Button>
        </View>

      : <Avatar size="giant" source={require("../assets/user.png")} />
    }
    <Divider/>
  </Layout>
); 



const DrawerContent = ({ navigation, state }) => (
  <Drawer
  header={ Header }
    selectedIndex={new IndexPath(state.index)}
    onSelect={index => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title='Home' />
    {   !propsG.userLogged
        ? <DrawerItem title='SignUp' accessoryLeft={ PersonIcon  } />
        : null
    }
    {   !propsG.userLogged
        ? <DrawerItem title='SignIn'  accessoryLeft={ PersonIcon  } />
        : null
    }
    
  </Drawer>
);

export const DrawerNavigator = (props) => {
    propsG = props.props
    return(
  <Navigator drawerContent={props => <DrawerContent {...props }/>}>
    <Screen name='Home' component={ stackHome }/>
    {   !propsG.userLogged
        ? <>
            <Screen name='SignUp' component={ SignUp }/>
            <Screen name="SignIn" component={ SignIn } />
          </>
        : null
    }
    
  </Navigator>
)}

const AppNavigator = (props) => (
  <NavigationContainer >
    <DrawerNavigator props={ props } />
  </NavigationContainer>
);

const mapStateToProps = state =>{
    return{
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps ={
    logOut: authAction.logOut
}


export default connect(mapStateToProps,mapDispatchToProps) (AppNavigator)

const styles = StyleSheet.create({
  
  });




























/* import React from "react"
import { View, Text, Image } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { StackHome } from "./stacks"

import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn"

const drawer = createDrawerNavigator()

const DrawerNavigator = ()=>{

return <drawer.Navigator drawerContent={} >

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
 */











