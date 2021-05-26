import React from "react"
import { connect } from "react-redux"
import citiesAction from "../redux/actions/citiesAction"
import { StyleSheet, ScrollView,View , Text, ImageBackground, Image } from "react-native"
import { Layout ,Divider, Button, Spinner } from "@ui-kitten/components"

class City extends React.Component {

    state={ itineraries:[] }
        
    componentDidMount(){
        this.props.fetchItinerary( this.props.route.params.city._id )
        .then( data => this.setState({ ...this.state, itineraries: data }) )
    }   

render(){
    return <Layout style={ styles.mainContainer }>
        {
            !this.state.itineraries.length

            ? <View style={{ alignItems:"center" }}><Spinner size='large' /></View>

            :   <ScrollView >
                    <View>
                        <ImageBackground source={{ uri: this.props.route.params.city.img }} style={ styles.cityImg } >
                            <Text style={ styles.titleCity }>{ this.props.route.params.city.city }</Text>
                        </ImageBackground>
                    </View> 
                    <View style={ styles.contentContainer }>
                        {  
                            this.state.itineraries.length 
                            ? this.state.itineraries.map(( itinerary, i) =>{
                                return <View key={ i } style={ styles.ItineraryContainer } >
                                        <Text style={ styles.title }>{ itinerary.title }</Text>
                                            <View style={ styles.author }>
                                                <Image source={{ uri: itinerary.author.img }} style={ styles.authorImg  } />
                                                <Text style={{ marginLeft:20 }}>{ itinerary.author.name } { itinerary.author.last_name } </Text>
                                                <Divider />
                                            </View>
                                        <Button onPress={ ()=> this.props.navigation.navigate("Itinerary",{ itinerary }) } > 
                                            View more
                                        </Button>
                                    </View>
                            })
                            : <Text> We don have itineraries for { this.props.route.params.city.city } yet </Text>
                        }
                    </View>
                </ScrollView>
        }
    </Layout>
}
}

const mapStateToProps = state =>{
    return{
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchStateToprops ={
    fetchItinerary:citiesAction.fetchItinerary
}

export default connect(mapStateToProps, mapDispatchStateToprops) (City)

const styles = StyleSheet.create({
    mainContainer:{
      flex:1,
      justifyContent:"center"
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
    },
    author:{
        flexDirection:"row",
        alignItems:"center"
    },
    ItineraryContainer:{
        width:"100%",
    },
    title:{
        textAlign:"center",
        fontSize: 30,
        color:"white"
    },
    authorImg:{
        width:65,
        height:65,
        borderRadius:50
    },

})
