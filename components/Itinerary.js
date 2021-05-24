import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import citiesAction from "../redux/actions/citiesAction"
import commentsAction from "../redux/actions/commentsActions"
import Comments from "../components/Comments"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import { Text, Layout, Avatar, Icon,  } from "@ui-kitten/components"
import { SliderBox } from "react-native-image-slider-box";
import { Rating } from 'react-native-ratings';

const Itinerary = ({ route:{ params: itinerary }, fetchActivities, navigation, userLogged, like_unlike })=>{
    const [ activities, setActivities ] = useState([])
    const [ state, setState ] = useState({ 
        activities:[], 
        liked:true,
        likes:itinerary.itinerary.likes,
        send:false,
    })

    useEffect(()=>{
        fetchActivities( itinerary.itinerary._id )
        .then( data => setActivities( data.map( activity => activity.picture ) ) )
    },[])

    useEffect(()=>{
        if( userLogged && state.likes.includes( userLogged._id ) ){ setState({ ...state, liked:true }) }
        else{ setState({ ...state, liked:false }) }
    },[ state.likes, itinerary.itinerary,userLogged ])

    const Like_Unlike = async ()=>{   
        if(userLogged){ 
            state.liked 
            ? setState({ ...state, likes: state.likes.filter( id => id !== userLogged._id ) })
            : setState({ ...state,likes: [...state.likes,userLogged._id] }) 
    
            if( !state.send ){
                setState({ ...state, likes: await like_unlike( itinerary.itinerary._id ),send:true })
            }
        }
    }


return <Layout style={ styles.mainContainer }>
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
                    
                    <View>
                        <Text style={{ textAlign:"center" }}>Price</Text>
                        <Rating
                            type='custom'
                            ratingImage={ require("../assets/money.png") }
                            ratingColor='transparent'
                            ratingBackgroundColor='transparent'
                            ratingCount={ itinerary.itinerary.price }
                            imageSize={25}
                            />
                    </View>
                    <View style={{ marginRight:60 }} >
                        <Text style={{ textAlign:"center" }}>duration</Text>
                        <Rating
                            type='custom'
                            ratingImage={ require("../assets/clock.png") }
                            ratingColor='transparent'
                            ratingBackgroundColor='transparent'
                            ratingCount={ itinerary.itinerary.duration }
                            imageSize={25}
                            />
                    </View>
                    
                    <View style={{ flexDirection:"row" }}>
                        <Text style={{ textAlign:"center" }}>Like </Text>
                        <TouchableOpacity onPress={ Like_Unlike }>
                            <Icon style={styles.icon} fill={ state.liked ? "red" : "grey" } name='heart' />
                        </TouchableOpacity>
                        <Text>{ state.likes.length }</Text>
                    </View> 
                </View>
            </View>

            <View> 
                <Text style={ styles.activities } category='h1'>Activities</Text>
                {   activities.length
                    ? <SliderBox autoplay={ true } sliderBoxHeight={145} images={ activities } />
                    : null
                }
            </View>
            <View >
                <Comments comments={ itinerary.itinerary.comments } itineraryId={ itinerary.itinerary._id  } />
            </View>
    </Layout>
}

const mapStateToProps= state =>{
    return{
        userLogged:state.authReducer.userLogged
    }
}

const mapDispatchToProps ={
    fetchActivities: citiesAction.fetchActivities,
    like_unlike: commentsAction.like_unlike
}

export default connect(mapStateToProps, mapDispatchToProps) (Itinerary)

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        paddingBottom:200
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
        width:"45%",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    info:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    activities:{
        textAlign:"center",
        fontSize:30,
        marginBottom:5
    },
    icon:{
        width: 35,
        height: 35,
    }
}) 