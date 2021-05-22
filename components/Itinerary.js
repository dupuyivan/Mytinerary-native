import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import citiesAction from "../redux/actions/citiesAction"
import Comments from "../components/Comments"
import { StyleSheet, View, Text, Image, Button, ImageBackground } from "react-native"


const Itinerary = ({ data, fetchActivities })=>{
    const [ visible, setVisible ] = useState(false)
    const [ activities, setActivities ] = useState([])


    useEffect(()=>{
        fetchActivities( data._id )
        .then( data => setActivities( data ) )
    },[])

return <View style={ styles.ItineraryContainer }>
            <Text style={ styles.title }>{ data.title }</Text>

        <Image source={{ uri: data.author.img }} style={ styles.authorImg  } />
        
        <Text>{ data.author.name } { data.author.last_name } </Text>
        
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
                    <View style={ styles.activitiesContainer }>
                    {   activities.length
                        ? activities.map( activity =>{
                            return <ImageBackground key={ activity._id } style={ styles.activity } source={{ uri:activity.picture }}>
                                <Text >{ activity.title }</Text>
                            </ImageBackground>
                        })
                        : null
                    }
                    </View>
                </View>

                <View>
                    <Text>Comments</Text>
                    <Comments comments={ data.comments } ItineraryId={ data._id } />
                </View>

            </View>
        </View>
        </View>
}

const mapDispatchToProps ={
    fetchActivities: citiesAction.fetchActivities
}

export default connect(null, mapDispatchToProps) (Itinerary)

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
    },
    activitiesContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    activity:{
        width:100,
        height:100
    }
}) 