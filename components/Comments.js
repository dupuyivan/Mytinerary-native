import React, { useState } from "react"
import Coment from "../components/Comment"
import { connect } from "react-redux"
import commentsAction from "../redux/actions/commetsACtion"
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native"


const Comments = ({ comments, ItineraryId,  sendComent, deleteCommet, updateCommet  })=>{
    const [ comment, setComment ] = useState("")

return <View style={ styles.commentsContainer }>
        {   comments.length
            ?   comments.map( coment => <Coment key={ coment._id } coment={ coment } /> )
            : null
        }   
        <View style={ styles.comentArea }>
            <Image source={{ uri:"https://www.famousbirthdays.com/faces/dicaprio-l-image.jpg" }} style={ styles.userImg } />
            <TextInput onChangeText={ v => setComment( v ) } placeholder="Write a comment" style={ styles.cometInput } />
            <TouchableOpacity  >
                <Text onPress={ ()=> sendComent(ItineraryId, comment ) } >send</Text>
            </TouchableOpacity>
        </View>
    </View>
}


const mapDispatchToProps = {
    sendComent: commentsAction.sendComent,
    deleteCommet: commentsAction.deleteCommnet,
    updateCommet: commentsAction.updateComent
}


export default connect(null, mapDispatchToProps) (Comments)

const styles = StyleSheet.create({
    commentsContainer:{
        backgroundColor:"#9CAEBF"
    },
    comentArea:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:5,
        marginBottom:5
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