import React from "react"
import Carousel from "../components/Carousel"
import { StyleSheet,View, Text, ImageBackground, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';


class Home extends React.Component {

render(){
return  <ImageBackground source={ require("../assets/eiffel-tower.jpg") } style={ styles.backgound  }>
          <ScrollView>
            <View style={ styles.container }>
              
              <View style={ styles.textoYlogo }>
                <Image source={ require("../assets/traveller.png") } style={ styles.logo } />
                <Text style={ styles.textoLogo }>Mytinerary</Text>
              </View>

              <View style={ styles.textoYboton }>
                  <Text style={ styles.findyour } >Find your perfect trip , designed by insiders who knows and love their cities!</Text>
                  <TouchableWithoutFeedback onPress={ ()=> this.props.navigation.navigate("Cities") }>
                    <View style={ styles.letsContainer } >
                      <Text style={ styles.letsButton } >Let's begin</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  
              </View>

                <Text style={ styles.title }>Popular Mytineraries</Text>
                  <Carousel />
            </View>
          </ScrollView>
        </ImageBackground>
}
}

export default Home



const styles = StyleSheet.create({
  backgound:{
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    },
    container: {
      marginTop:"45%"
    },
    textoYlogo:{
      flexDirection:"row",
      marginLeft: 50
    },
    logo:{
      width: 50,
      height: 50,
    },
    textoLogo:{
      fontSize: 40,
      fontWeight: "700",
      color: "white"
    },
    textoYboton:{
      width:"100%",
      height:"50%",
      alignItems:"center"
    },
    findyour:{
      textAlign:"center",
      color: "white",
      fontSize:25,
      marginTop: 20,
      margin: 5,
      fontWeight:"800"
    },
    letsContainer:{
      width: 129,
      height: 129,
      borderRadius: 80,
      color:"white",
      marginTop: 80,
      backgroundColor:"#df7366",
      alignItems:"center",
      justifyContent:"center"
    },
    letsButton:{ 
      color:"white",
      fontSize: 20
    },
    secondSection:{
      marginTop:"10%",
      paddingBottom:"2%"
    },
    title:{
      textAlign:"center",
      fontSize: 35,
      color:"white"
    }
  
  });