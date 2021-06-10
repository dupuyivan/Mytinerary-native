import React,{ useState } from "react"
import Coment from "../components/Comment"
import { connect } from "react-redux"
import commentsAction from "../redux/actions/commentsActions"
import { StyleSheet,ScrollView, View, Text, Image, TouchableOpacity, ToastAndroid } from "react-native"
import { Icon ,Input } from "@ui-kitten/components"

const Comments = ({ comments,itineraryId, userLogged, sendComment,deleteComment,updateComment })=>{
    const [ localComments ,setLocalComments ] = useState(comments)
    const [ newComment, setNewComment ] = useState("")

    const functions = (type,idComment, updatedComment )=>{
        if( type === "send" ){ 
            if( !newComment.length ){ return null }
            setNewComment("")   
            sendComment(userLogged.token, itineraryId, newComment ).then( res => setLocalComments( res ) )
        }
        else if( type === "delete" ){ 
            deleteComment( userLogged.token,itineraryId, idComment ).then( res => setLocalComments( res ) )
        }
        else{
            updateComment(userLogged.token, itineraryId,idComment, updatedComment )
            .then( res => setLocalComments( res ) )
        }
    }
return <View >
        <Text style={ styles.title }>Comments</Text>
        <View>
            <ScrollView >
            {   localComments && localComments.length
                ?   localComments.map( coment => <Coment key={ coment._id } coment={ coment } functions={ functions } /> )
                : null
            }
            </ScrollView>
        </View>
        <View style={ styles.comentArea }>
            <Image source={ !userLogged ? require("../assets/user.png") : { uri: userLogged.picture  }} style={ styles.userImg } />
            <Input disabled={ userLogged ? false : true } placeholder="Write a comment" value={ newComment } style={ styles.cometInput } onChangeText={ v => setNewComment( v ) } />
            <TouchableOpacity onPress={ () =>{ !userLogged ? ToastAndroid.show( "You must be logued" , ToastAndroid.SHORT) :functions("send") }}>
                <Icon style={styles.icon} fill='black' name='arrow-right-outline' />
            </TouchableOpacity>  
        </View>
    </View>
}

const mapStateToProps = state =>{
    return{
        userLogged: state.authReducer.userLogged
    }
}


const mapDispatchToProps ={
    sendComment: commentsAction.sendComment,
    deleteComment: commentsAction.deleteComment,
    updateComment: commentsAction.updateComment
}

export default connect(mapStateToProps, mapDispatchToProps) (Comments)

const styles = StyleSheet.create({
    title:{
        color:"white",
        textAlign:"center",
        fontSize:30,
        marginBottom:5
    },
    comentArea:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:5,
        marginBottom:5,
    },
    userImg:{
        width:50,
        height:50,
        borderRadius:50,
        marginRight:2
    },
    cometInput:{
        width:"75%",
        paddingLeft:6,
    },
    icon:{
        width: 35,
        height: 35,
        marginRight:10
    },
})