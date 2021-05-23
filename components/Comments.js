import React,{ useState } from "react"
import Coment from "../components/Comment"
import { connect } from "react-redux"
import commentsAction from "../redux/actions/commentsActions"
import { StyleSheet,ScrollView, View, Text, Image, TouchableOpacity } from "react-native"
import { Icon ,Input } from "@ui-kitten/components"

const Comments = ({ comments,itineraryId, sendComment,deleteComment,updateComment })=>{
    const [ localComments ,setLocalComments ] = useState(comments)
    const [ newComment, setNewComment ] = useState("")

    const functions = (type,idComment, updatedComment )=>{
        if( type === "send" ){ 
            sendComment(itineraryId, newComment ).then( res => setLocalComments( res ) )
        }
        else if( type === "delete" ){ 
            deleteComment(itineraryId, idComment ).then( res => setLocalComments( res ) )
        }
        else{
            updateComment( itineraryId,idComment, updatedComment )
            .then( res => setLocalComments( res ) )
        }
    }

return <View >
    
        <Text style={ styles.title }>Comments</Text>
        <View>
        <ScrollView style={ styles.comments }>
        {   localComments.length
            ?   localComments.map( coment => <Coment key={ coment._id } coment={ coment } functions={ functions } /> )
            : null
        }
        </ScrollView>
        </View>
        <View style={ styles.comentArea }>
            <Image source={{ uri:"https://www.famousbirthdays.com/faces/dicaprio-l-image.jpg" }} style={ styles.userImg } />
            <Input placeholder="Write a comment" style={ styles.cometInput } onChangeText={ v => setNewComment( v ) } />
            <TouchableOpacity onPress={ () => functions("send") }>
                <Icon style={styles.icon} fill='black' name='arrow-right-outline' />
            </TouchableOpacity>  
        </View>
    </View>
}

const mapDispatchToProps ={
    sendComment: commentsAction.sendComment,
    deleteComment: commentsAction.deleteComment,
    updateComment: commentsAction.updateComment
}

export default connect(null, mapDispatchToProps) (Comments)

const styles = StyleSheet.create({
    title:{
        color:"white",
        textAlign:"center",
        fontSize:30,
        marginBottom:5
    },
    comments:{
        height:"44%",
        overflow:"scroll"
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
    },
    icon:{
        width: 20,
        height: 20,
        marginRight:10
    },
})