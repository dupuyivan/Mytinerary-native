import React, { useState } from "react"
import { StyleSheet, View, Text, Image, Button } from "react-native"
import Comments from "../components/Comments"

const Itinerary = ({ data })=>{
const [ visible, setVisible ] = useState(false)


return <View style={ styles.ItineraryContainer }>
            <Text style={ styles.title }>Title</Text>
        <Image source={{ uri:"https://www.famousbirthdays.com/faces/dicaprio-l-image.jpg" }} style={ styles.authorImg  } />
        <Text>Name and lastName of author</Text>
        
        <View style={ styles.info }>
            <View style={ styles.littleBox }>
                <Text>Price</Text>
            </View>
            <View style={ styles.littleBox }>
                <Text>Duration</Text>
            </View>
            <View style={ styles.littleBox }>
                <Text>Like</Text>
            </View>
        </View>
        <View style={ styles.hashtags }>
            <Text>Hashtags</Text>
        </View>

        <View style={ styles.viewMore }>

            <Button title={ !visible ? "View more" : "View less" } onPress={ ()=> setVisible(!visible ) } /> 

            <View style={ visible ? styles.visible : styles.hidden }>
                
                <View>
                    <Text>Activities</Text>
                    
                </View>

                <View>
                    <Text>Comments</Text>
                    <Comments />
                </View>

            </View>


        </View>


        </View>
}

export default Itinerary

const styles = StyleSheet.create({
    ItineraryContainer:{
        width:"100%",
    },
    authorImg:{
        width:50,
        height:50,
        borderRadius:50
    },
    info:{
        flexDirection:"row"
    },
    littleBox:{
        marginLeft:5
    },
    hashtags:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    viewMore:{

    },
    visible:{
        display:"flex"
    },
    hidden:{
        display:"none"
    }
}) 