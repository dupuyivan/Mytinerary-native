import React from "react"
import { connect } from "react-redux"
import citiesAction from "../redux/actions/citiesAction"
import { StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity  } from "react-native"


class Cities extends React.Component {

    state={ cities:[] }

    componentDidMount(){
      this.props.fetchCities()
      this.setState({ ...this.state, cities:this.props.cities }) 
    } 

render(){
return <View style={ styles.main_container }>

            <ScrollView>
                <View style={ styles.containerContent }>
                    {   this.props.cities &&
                        this.props.cities.map( city =>{
                        return <ImageBackground key={ city._id } source={{ uri: city.img }} style={styles.image}>
                                    <TouchableOpacity onPress={ ()=> this.props.navigation.navigate("City",{ city }) }
                                    style={{ width:"100%", height:"100%", alignItems:"center",justifyContent:"center" }}>
                                    <Text style={styles.cardText}>{ city.city }</Text>
                                    </TouchableOpacity>
                                </ImageBackground>
                        })
                    }
                </View>
            </ScrollView>
        </View>
}
}

const mapStateToProps = state =>{
    return{
        cities: state.citiesReducer.cities
    }
}

const mapDispatchToProps = {
    fetchCities: citiesAction.fetchCities
}

export default connect(mapStateToProps,mapDispatchToProps) (Cities)

const styles = StyleSheet.create({
    main_container:{
        width:"100%",
        backgroundColor:"black",
        flex: 1,
        /* marginTop:"6%" */
    },
    titleContainer:{
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"#DAD4D4",
    },
    title:{
        fontSize:35,
        marginLeft:70
    },
    containerContent:{
        flex:1,
        alignItems:"center",

    },
    image:{ 
        width:"100%",
        height:300,
        alignItems:"center",
        justifyContent:"center"
    },
    cardText:{
        fontSize:40,
        color:"white"
    }

})