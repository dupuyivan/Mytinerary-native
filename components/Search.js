import React from "react"
import { connect } from "react-redux"
import { StyleSheet,ScrollView, ImageBackground,TouchableOpacity,View  } from "react-native"
import { Layout, Text } from"@ui-kitten/components"


const Search = ({ navigation, citiesFiltered, value })=>{
 

return <Layout style={ styles.layout }  >
        <ScrollView style={ styles.mainContainer }>

            {  citiesFiltered.length
                ? citiesFiltered.map( city =>{
                    return <ImageBackground key={ city._id } source={{ uri: city.img }} style={styles.image}>
                                <TouchableOpacity onPress={ ()=> navigation.navigate("City",{ city }) }
                                style={{ width:"100%", height:"100%", alignItems:"center",justifyContent:"center" }}>
                                <Text style={styles.cardText}>{ city.city }</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                    })
                : value.length && !citiesFiltered.length
                    ? <View>
                        <Text style={ styles.messages }>No results</Text>
                    </View> 
                    : <Text style={ styles.messages }>Search something</Text>
            }
        </ScrollView>
    </Layout>
}

const mapStatetoProps = state =>{
    return{
        citiesFiltered: state.citiesReducer.citiesFiltered,
        value: state.citiesReducer.value
    }
}

export default connect(mapStatetoProps) (Search)

const styles = StyleSheet.create({
    layout:{
        flex:1
    },
    mainContainer:{
        marginTop:"6%",
    },
    text:{
        color:"white",
        marginTop:"20%"
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
    },
    messages:{
        textAlign:"center",
        marginTop:"2%"
    }
})

