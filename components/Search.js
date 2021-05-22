import React, { useState } from "react"
import { StyleSheet, ScrollView,View, Text, TextInput,ImageBackground, TouchableOpacity  } from "react-native"

const Search = (props)=>{
    const [ filtered, setFiltered ] = useState([])

const filter = value =>{
    value = value.trim().toLowerCase() 
    if( value === ""){ return setFiltered([]) }
    else if(  !props.route.params.cities.filter( city => city.city.trim().toLowerCase().indexOf( value ) === 0  ).length ){
        return setFiltered(false)
    }else{
        setFiltered( props.route.params.cities.filter( city => city.city.trim().toLowerCase().indexOf( value ) === 0  )  )
    }
}

return <ScrollView>
    <View style={ styles.navBar }>
        <Text>volver</Text>
        <TextInput onChangeText={ filter } style={ styles.inputFilter } />
    </View>
        {   filtered.length 
                ? filtered.map( city =>{
                return <ImageBackground key={ city._id } source={{ uri: city.img }} style={styles.image}>
                        <TouchableOpacity onPress={ ()=> this.props.navigation.navigate("City",{ city }) }
                        style={{ width:"100%", height:"100%", alignItems:"center",justifyContent:"center" }}>
                        <Text style={styles.cardText}>{ city.city }</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                })
                : typeof filtered === "object" && !filtered.length
                    ? <Text>Search Something</Text>
                    : <Text>there are no results</Text>
        }
    </ScrollView>

}

export default Search

const styles = StyleSheet.create({
    inputFilter:{
        width:"100%",
        backgroundColor:"black",
        color:"white"
    },
    navBar:{
        flexDirection:"row"
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
