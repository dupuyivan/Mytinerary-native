import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"


const Coment = ()=>{


return <View style={ styles.coment }>
        <Image  source={{ uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Adam_Sandler_2018_%28Lc9jYc07e54%29.jpg/220px-Adam_Sandler_2018_%28Lc9jYc07e54%29.jpg" }} style={ styles.imgComent}/>
        <Text>Soy un comentario</Text>  
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