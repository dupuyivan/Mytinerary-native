import React from "react";
import { connect } from "react-redux"
import authAction from "../redux/actions/authAction"
import { StyleSheet, View, Button, ToastAndroid } from "react-native";
import * as Google from "expo-google-app-auth";

const LoginScreen = ({ text, endpoint ,submitForm, navigation }) => {

  const signInAsync = async () => {
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: "418543337270-rclc43hp5mevhto3c372opc9o2dfdbf7.apps.googleusercontent.com",
        androidClientId: "418543337270-btdm0idk61o3k2p697u5gpkhne2a69a3.apps.googleusercontent.com",
      });

      if (type === "success") {
        let googleUser

        endpoint ==="signup" 
        ? googleUser ={
            email: user.email,
            password:"G"+ user.id,
            name: user.givenName,
            last_name: user.familyName,
            picture:user.photoUrl,
            country:"ninguno",
        }
        :googleUser ={
            email: user.email,
            password:"G"+ user.id,
        }
        submitForm( endpoint , googleUser )
        .then( res => console.log( res )
            /* res.success 
            ? navigation.navigate("Home")
            : ToastAndroid.showWithGravity( "err" , ToastAndroid.SHORT, ToastAndroid.CENTER ) */ )
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title={ text } onPress={signInAsync} />
    </View>
  );
};

const mapDispatchToProps ={
    submitForm: authAction.submitForm
}


export default connect(null, mapDispatchToProps) (LoginScreen)

const styles = StyleSheet.create({});