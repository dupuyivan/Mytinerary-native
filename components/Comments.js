import React from "react"
import Coment from "../components/Comment"
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native"


const Comments = ({ comments })=>{

return <View style={ styles.commentsContainer }>

        {   comments.length
            ?   comments.map( coment => <Coment key={ coment._id } coment={ coment } /> )
            : null
        }   
            
        <View style={ styles.comentArea }>
            <Image source={{ uri:"https://www.famousbirthdays.com/faces/dicaprio-l-image.jpg" }} style={ styles.userImg } />
            <TextInput placeholder="Write a comment" style={ styles.cometInput } />
            <TouchableOpacity  >
                <Text>icono send</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Comments

const styles = StyleSheet.create({
    commentsContainer:{
        backgroundColor:"#9CAEBF"
    },
    comentArea:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:5
    },
    userImg:{
        width:50,
        height:50,
        borderRadius:50,
        marginRight:2
    },
    cometInput:{
        width:"65%",
        paddingLeft:6
    }
})