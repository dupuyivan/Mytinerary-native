import React from "react"
import { connect } from "react-redux"
import citiesAction from "../redux/actions/citiesAction"
import Itinerary from "../components/Itinerary"
import { StyleSheet, ScrollView,View , Text, ImageBackground } from "react-native"


class City extends React.Component {

    state={
        itineraries:[]
    }

    componentDidMount(){
        this.props.fetchItinerary( this.props.route.params.city._id )
        .then( data => this.setState({ ...this.state, itineraries: data }) )
    }   

render(){
    return <ScrollView style={ styles.mainContainer }>
        <View>
            <ImageBackground source={{ uri: this.props.route.params.city.img }} style={ styles.cityImg } >
                <Text style={ styles.titleCity }>{ this.props.route.params.city.city }</Text>
            </ImageBackground>
        </View> 
        <View style={ styles.contentContainer }>

            {  
                this.state.itineraries.length 
                ? this.state.itineraries.map( itinerary => <Itinerary key={ itinerary._id } data={ itinerary } /> )
                : null
            }
            
        </View>
        
    </ScrollView>
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
      /*   marginTop:"6%" */
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
