import React,{ useState } from "react"
import { connect } from "react-redux"
import { StyleSheet, View, Text, Image , TouchableOpacity } from "react-native"
import { Icon,Input } from "@ui-kitten/components"


const Coment = ({ coment, functions, userLogged })=>{
const [ visible, setVisible ] = useState(false)
const [ comment, setcomment ] = useState( coment.comment )

return<View style={ styles.mainContainer }>
            <View style={ styles.comment } >
                { 
                    !visible
                    ? <>
                        <Image  source={{ uri: coment.user_id.picture }} style={ styles.imgComent}/>
                        <Text>{ coment.comment }</Text> 
                      </>
                    : <Input style={ styles.editComent } value={ comment } onChangeText={ v => setcomment( v )  } />
                }
            </View>
            <View style={ styles.actions }>
                { 
                     userLogged && coment.user_id._id === userLogged._id && !visible
                        ?   <>
                                <TouchableOpacity onPress={ ()=> setVisible(!visible) }>
                                    <Icon style={styles.icon} fill='black' name='edit-2-outline' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={ ()=> functions("delete", coment._id ) }>
                                    <Icon style={styles.icon} fill='black' name='trash-2-outline' />
                                </TouchableOpacity>
                            </>
                        : userLogged && coment.user_id._id === userLogged._id && visible
                           ? <TouchableOpacity onPress={ ()=>{ functions("update",coment._id,comment  ); setVisible(false) }}>
                                <Icon style={styles.icon} fill='black' name='arrow-right-outline' />
                            </TouchableOpacity> 
                           : null
                }
            </View>
        </View>
}

const mapStateToProps = state =>{
    return{
        userLogged: state.authReducer.userLogged
    }
}

export default connect(mapStateToProps) (Coment)

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#033B77",
        borderRadius:10,
        margin:5
    },
    comment:{
        flexDirection:"row",
        alignItems:"center"
    },
    imgComent:{
        width:50,
        height:50,
        borderRadius:50,
        marginRight:10
    },
    icon:{
        width: 22,
        height: 22,
        marginRight:10
    },
    actions:{
       flexDirection:"row"
    },
    editComent:{
        width:"90%",
        backgroundColor:"transparent",
    },
})