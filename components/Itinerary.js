import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import citiesAction from "../redux/actions/citiesAction"
import commentsAction from "../redux/actions/commentsActions"
import Comments from "../components/Comments"
import { StyleSheet, View, TouchableOpacity, ScrollView,ToastAndroid } from "react-native"
import { Text, Layout, Avatar, Icon, Tooltip  } from "@ui-kitten/components"
import { SliderBox } from "react-native-image-slider-box";
import { Rating } from 'react-native-ratings';

const Itinerary = ({ route:{ params: itinerary }, fetchActivities, navigation, userLogged, like_unlike })=>{
    const [ activities, setActivities ] = useState([])
    const [ state, setState ] = useState({ 
        activities:[], 
        liked:true,
        likes:itinerary.itinerary.likes,
        send:false,
        visibleTooltip:false
    })

    useEffect(()=>{
        fetchActivities( itinerary.itinerary._id )
        .then( data => setActivities( data.map( activity => activity.picture ) ) )
    },[])

    useEffect(()=>{
        if( userLogged && state.likes.includes( userLogged._id ) ){ setState({ ...state, liked:true }) }
        else{ setState({ ...state, liked:false }) }
    },[ state.likes, state.liked, itinerary.itinerary,userLogged ])

    const Like_Unlike = async ()=>{   
        if(userLogged){ 
            state.liked 
            ? setState({ ...state, likes: state.likes.filter( id => id !== userLogged._id ) })
            : setState({ ...state,likes: [...state.likes,userLogged._id] }) 
    
            if( !state.send ){
                setState({ ...state, likes: await like_unlike( itinerary.itinerary._id ),send:true })
            }

        }else{ ToastAndroid.showWithGravity("You must be logged",ToastAndroid.SHORT,ToastAndroid.CENTER) }
    }

return <Layout style={ styles.mainContainer }>
        <ScrollView style={ styles.mainContainer } >
            <Text style={ styles.title } category='h1'>{ itinerary.itinerary.title }</Text>

            <View /* style={ styles.firstContainer } */ style={{ flexDirection:"row", alignItems:"center" }} >

                <View style={{ flexDirection:"row",alignItems:"center" }}>
                    <Avatar size="giant" source={{ uri: itinerary.itinerary.author.img  }} />
                    <View style={{ marginLeft:"2%" }}>
                        <Text style={{ marginLeft:5 }} >{ itinerary.itinerary.author.name }</Text>
                        <Text style={{ marginLeft:5 }}>{ itinerary.itinerary.author.last_name }</Text>
                    </View>
                </View>

                <View style={{ marginLeft:"5%" }}>
                    <Tooltip
                        anchor={ ()=><TouchableOpacity onPress={()=>setState({ ...state, visibleTooltip:true  })} ><Text>Details</Text></TouchableOpacity>  }
                        visible={ state.visibleTooltip }
                        onBackdropPress={()=> setState({ ...state, visibleTooltip:false })  }>
                       
                       <View style={{ alignItems:"center",justifyContent:"center" }}>
                            <View>
                                <Text style={{ textAlign:"center",color:"black" }}>Price</Text>
                                <Rating
                                    type='custom'
                                    ratingImage={ require("../assets/money.png") }
                                    ratingColor='transparent'
                                    ratingBackgroundColor='transparent'
                                    ratingCount={ itinerary.itinerary.price }
                                    imageSize={25}
                                    />
                            </View>

                            <View style={{alignSelf:"center",justifyContent:"center" }} >

                                <Text style={{ textAlign:"center", color:"black" }}>duration</Text>
                                <Rating
                                    type='custom'
                                    ratingImage={ require("../assets/clock.png") }
                                    ratingColor='transparent'
                                    ratingBackgroundColor='transparent'
                                    ratingCount={ itinerary.itinerary.duration }
                                    imageSize={25}
                                    />
                            </View>

                            <View  >
                                <Text style={{ color:"black" }}>Hashtags:</Text>
                                { itinerary.itinerary.hashstags.map( hashtag =>{ 
                                return <Text style={{ color:"black" }}>#{ hashtag }</Text>  }) }
                            </View >
                       </View>
                    
                    </Tooltip>
                </View>

            </View>

            <View> 
                <Text /* style={ styles.activities } */ style={{ textAlign:"center" }} category='h1'>Activities</Text>
                {   activities.length
                    ? <SliderBox autoplay={ true } sliderBoxHeight={145} images={ activities } />
                    : null
                }
            </View>
            <View >
                <Comments comments={ itinerary.itinerary.comments } itineraryId={ itinerary.itinerary._id  } />
            </View>
        </ScrollView>
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
        flex:1
    },
    title:{
        textAlign:"center"
    },
})


{/*    original
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
            
            
            const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
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
*/   }


/* second Option
<View style={{ flexDirection:"row",alignItems:"center" }}>

                    <Avatar size="giant" source={{ uri: itinerary.itinerary.author.img  }} />
                    <View style={{ marginLeft:"5%" }}>
                        <Text style={{ marginLeft:5 }} >{ itinerary.itinerary.author.name }</Text>
                        <Text style={{ marginLeft:5 }}>{ itinerary.itinerary.author.last_name }</Text>
                    </View>
                </View>

                <View >
                    <View style={{ flexDirection:"row" }}>
                        <Text style={{ marginRight:5 }}>Price: </Text>
                        <Rating
                                type='custom'
                                ratingImage={ require("../assets/money.png") }
                                ratingColor='transparent'
                                ratingBackgroundColor='transparent'
                                ratingCount={ itinerary.itinerary.price }
                                imageSize={22}
                                />
                        </View>
                    <View style={{ flexDirection:"row" }}>
                        <Text style={{ marginRight:5 }}>Duration: </Text>
                        <Rating
                            type='custom'
                            ratingImage={ require("../assets/clock.png") }
                            ratingColor='transparent'
                            ratingBackgroundColor='transparent'
                            ratingCount={ itinerary.itinerary.duration }
                            imageSize={22}
                            />
                    </View>
                    <View style={{ flexDirection:"row", flexWrap:"wrap" }} >
                        <Text>Hashtags: </Text>
                        { itinerary.itinerary.hashstags.map( hashtag => <Text>#{ hashtag }</Text>  ) }
                    </View >
                   
</View> */