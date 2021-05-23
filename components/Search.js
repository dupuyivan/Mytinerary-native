import React from "react"
import { connect } from "react-redux"
import { StyleSheet,ScrollView, ImageBackground,TouchableOpacity  } from "react-native"
import { Layout, Text } from"@ui-kitten/components"


const Search = ({ citiesFiltered })=>{

    console.log( citiesFiltered )

return <Layout style={ styles.layout }  >
        <ScrollView style={ styles.mainContainer }>

            {/* {  citiesFiltered.length
                ? citiesFiltered.map( city =>{
                    return <ImageBackground key={ city._id } source={{ uri: city.img }} style={styles.image}>
                                <TouchableOpacity onPress={ ()=> this.props.navigation.navigate("City",{ city }) }
                                style={{ width:"100%", height:"100%", alignItems:"center",justifyContent:"center" }}>
                                <Text style={styles.cardText}>{ city.city }</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                    })
                : typeof citiesFiltered === "boolean"
                    ? <View>
                        <Text>No results</Text>
                    </View> 
                    : <Text>Search something</Text>
            } */}
            <Text>results</Text>
        </ScrollView>
    </Layout>
}

const mapStatetoProps = state =>{
    return{
        citiesFiltered: state.citiesReducer.citiesFiltered
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
    }
})

