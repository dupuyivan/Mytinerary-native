import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import citiesAction from "../redux/actions/citiesAction"
import Comments from "../components/Comments"
import { StyleSheet, View, ScrollView } from "react-native"
import { Divider, Text, Button, Layout, Avatar } from "@ui-kitten/components"
import { SliderBox } from "react-native-image-slider-box";

const Itinerary = ({ route:{ params: itinerary }, fetchActivities, navigation })=>{
    const [ activities, setActivities ] = useState([])

    useEffect(()=>{
        fetchActivities( itinerary.itinerary._id )
        .then( data => setActivities( data.map( activity => activity.picture ) ) )
    },[])

return <Layout style={ styles.mainContainer }>
        {/* <ScrollView > */}
            <Text style={ styles.ItineraryTitle } category='h1'>{ itinerary.itinerary.title }</Text>

            <View style={ styles.firstContainer }>

                <View style={ styles.author }>
                    <Avatar style={styles.avatar} size='giant' source={{ uri: itinerary.itinerary.author.img }} />
                    <View style={ styles.names }>
                    <Text>{ itinerary.itinerary.author.name }</Text>
                    <Text>{ itinerary.itinerary.author.last_name }</Text>
                    </View>
                </View>
                <View style={ styles.info }>
                    <Text>Price</Text>
                    <Text>duration</Text>
                    <Text>hasttahs</Text>
                </View>
            </View>

            <View> 
                <Text style={ styles.activities } category='h1'>Activities</Text>
                {   activities.length
                    ? <SliderBox images={ activities } />
                    : null
                }
            </View>
            <View>
                <Comments comments={ itinerary.itinerary.comments } itineraryId={ itinerary.itinerary._id  } />
            </View>

        {/* </ScrollView> */}
    </Layout>
}

const mapDispatchToProps ={
    fetchActivities: citiesAction.fetchActivities
}

export default connect(null, mapDispatchToProps) (Itinerary)

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:"6%",
        flex:1
    },
    ItineraryTitle:{
        color: "white",
        textAlign:"center",
    },
    firstContainer:{
        marginBottom:5
    },
    author:{
        alignSelf:"center"
    },
    avatar:{
        alignSelf:"center"
    },
    names:{
        flexDirection:"row"
    },
    info:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    activities:{
        textAlign:"center",
        fontSize:30,
        marginBottom:5
    }
}) 