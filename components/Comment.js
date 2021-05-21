import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"


const Coment = ({ coment })=>{

return <View style={ styles.coment }>
        <Image  source={{ uri: coment.user_id.picture }} style={ styles.imgComent}/>
        <Text>{ coment.comment }</Text>  
    </View>
}

export default Coment

const styles = StyleSheet.create({
    coment:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#7D8083",
        borderRadius:10,
        margin:5
    },
    imgComent:{
        width:50,
        height:50,
        borderRadius:50,
        marginRight:10
    }
})