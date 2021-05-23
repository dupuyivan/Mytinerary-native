import React from "react"
import { connect } from "react-redux"
import authAction from "../redux/actions/authAction"
import { StyleSheet, View  } from "react-native"
import { Layout, Input, Button,Text  } from '@ui-kitten/components';

class SignIn extends React.Component {

 state={ form:{ email:"", password:"" } }

 readForm = (field, value)=>{ this.setState({ ...this.state, form:{ ...this.state.form, [field]:value } }) }

 submitForm=()=>{
    this.props.submitForm("signin",this.state.form )
    .then( data => data.success && this.props.navigation.navigate("Home") )
 }

render(){
    return <Layout style={ styles.mainContainer }>
                <Text style={ styles.title }>SignIn</Text>
                <View>
                        <Text style={styles.text} category='s1'>Email</Text>
                            <Input placeholder='Place your Text' onChangeText={ value => this.readForm("email",value)} />
                        </View>
                        <View style={ styles.containers }>
                            <Text style={styles.text} category='s1'>Password</Text>
                            <Input placeholder='Place your Text' onChangeText={ value => this.readForm("password",value)} />
                        </View>

                    <Button style={styles.button} appearance='outline' onPress={ this.submitForm }>
                        Signin
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
        fontSize:20
    },
    containers:{
        marginBottom:"4%"
    },
    text: {
        margin: 2,
        fontSize:20,
        textAlign:"center"
      },
    button: {
        margin: 2,
    }

})
