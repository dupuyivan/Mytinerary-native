import React from "react"
import { connect } from "react-redux"
import authAction from "../redux/actions/authAction"
import { StyleSheet, View,ToastAndroid,TouchableOpacity  } from "react-native"
import { Layout, Input, Button,Text ,Icon  } from '@ui-kitten/components';

class SignIn extends React.Component {

 state={ form:{ email:"", password:"" }, visiblePassword:true }

 readForm = (field, value)=>{ this.setState({ ...this.state, form:{ ...this.state.form, [field]:value } }) }

 submitForm=()=>{
    if( !this.state.form.email.length && !this.state.form.password.length ){ return null }
    this.props.submitForm("signin",this.state.form )
    .then( data =>{
    data.success 
    ? this.props.navigation.navigate("Home") 
    : ToastAndroid.show( data.message , ToastAndroid.SHORT)
    })
 }

render(){
    return <Layout style={ styles.mainContainer }>
                <Text style={ styles.title } >SignIn</Text>
                        <View>
                            <Text appearance='hint' category='s1' >Email</Text>
                            <Input onChangeText={ value => this.readForm("email",value)} />
                        </View>
                        <View style={ styles.containers }>
                            <Text appearance='hint' category='s1'>Password</Text>
                            <Input
                            secureTextEntry={ this.state.visiblePassword }
                            accessoryRight={ ()=> <TouchableOpacity onPress={ ()=> this.setState({...this.state, visiblePassword:!this.state.visiblePassword }) }>
                            <Icon style={ styles.icon } fill="black" name={ this.state.visiblePassword ? 'eye-off' : 'eye'}/>
                          </TouchableOpacity> }
                            onChangeText={ value => this.readForm("password",value)} />
                        </View>

                    <Button style={styles.button} status="info" appearance='outline' onPress={ this.submitForm }>
                        SignIn
                    </Button>
        </Layout>
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
        textAlign:"center",
        fontSize:30,
        marginBottom:20
    },
    containers:{
        marginBottom:"4%"
    },
    text: {
        margin: 2,
        fontSize:20,
    },
    button: {
        margin: 2,
    },
    icon:{
        width: 35,
        height: 35,
        marginRight:10
    }

})
