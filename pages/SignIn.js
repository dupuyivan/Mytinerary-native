import React from "react"
import { connect } from "react-redux"
import authAction from "../redux/actions/authAction"

import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"

class SignIn extends React.Component {

 state={ form:{ email:"", password:"" } }

 readForm = (field, value)=>{ this.setState({ ...this.state, form:{ ...this.state.form, [field]:value } }) }

 submitForm=()=>{
    this.props.submitForm("signin",this.state.form )
    .then( data => data.success && this.props.navigation.navigate("Home") )
 }

render(){
    return <View style={ styles.mainContainer }>
    <Text style={ styles.title }>SignIn</Text>

    <View style={ styles.placeHolders }>
    <Text style={ styles.placeholder }>Email</Text>
        <TextInput style={ styles.input } onChangeText={ v => this.readForm("email", v) } />
    </View>
    <View style={ styles.placeHolders } >
    <Text style={ styles.placeholder }>Password</Text>
        <TextInput style={ styles.input } onChangeText={ v => this.readForm("password", v) } />
    </View>
    <View style={ styles.placeHolders }>
       <TouchableOpacity style={ styles.buttonContainer } >
           <Text onPress={ this.submitForm } style={ styles.send }>SignIn</Text>
       </TouchableOpacity>
    </View>
</View>
}
}

const mapDispatchToProps ={
    submitForm:authAction.submitForm
}


export default connect(null, mapDispatchToProps) (SignIn)

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:"6%",
        flex:1 
    },
    title:{
        fontSize:40,
        textAlign:"center",
        marginTop:10,
        marginBottom:20
    },
    placeHolders:{
        alignItems:"center",
        marginBottom:20
    },
    placeholder:{
        fontSize: 20
    },
    input:{
        borderStyle:"solid",
        borderColor:"black",
        width:"75%",
        backgroundColor:"black",
        borderRadius:10,
        backgroundColor:"#D7E3EE",
        paddingLeft:4
    },
    buttonContainer:{
        width:"60%",
        textAlign:"center",
        backgroundColor:"#379BF3",
        padding:20,
        borderRadius:50
    },
    send:{
        textAlign:"center"
    }

})
