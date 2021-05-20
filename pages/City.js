import React from "react"
import Itinerary from "../components/Itinerary"
import { StyleSheet, ScrollView,View , Text, ImageBackground } from "react-native"


class City extends React.Component {

render(){
    console.log( this.props )
    return <ScrollView style={ styles.mainContainer }>
        <View>
            <ImageBackground source={{ uri:"https://images.unsplash.com/photo-1493837417577-baec364a53eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" }} style={ styles.cityImg } >
                <Text style={ styles.titleCity }>Name of the city</Text>
            </ImageBackground>
        </View> 
        <View style={ styles.contentContainer }>
            <Itinerary data={ "itineraries" } />

        </View>
        
    </ScrollView>
}
}

export default City

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:"6%"
    },
    cityImg:{
       width:"100%",
       height: 200,
       alignItems:"center",
        justifyContent:"center"
    },
    titleCity:{
        fontSize:25,
        color:"white"
    },
    contentContainer:{
        alignItems:"center"
    }

})
