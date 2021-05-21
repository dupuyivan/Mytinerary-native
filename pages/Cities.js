import React from "react"
import { StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity  } from "react-native"


class Cities extends React.Component {

    state={
        cities:[]
    }

    componentDidMount(){
        fetch("https://mytinerarydupuy.herokuapp.com/api/cities")
        .then( data => data.json() )
        .then( data => this.setState({ ...this.state, cities: data.result }) )
        .catch( err => console.log( err ) )
    }

render(){
    console.log( this.state.cities )

return <View style={ styles.main_container }>

            <View style={ styles.titleContainer }>
                <Text></Text>
                <Text style={ styles.title }>Cities</Text>
                <Text>Busqueda</Text>
            </View>

            <ScrollView>
                <View style={ styles.containerContent }>
                    {   this.state.cities &&
                        this.state.cities.map( city =>{
                        return <ImageBackground key={ city._id } source={{ uri: city.img }} style={styles.image}>
                                    <TouchableOpacity onPress={ this.props.navigation.navigate("CITY",{ cityId:city._id }) }
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
export default Cities

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