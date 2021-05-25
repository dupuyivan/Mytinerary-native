import React from "react"
import authAction from "../redux/actions/authAction"
import { connect } from "react-redux"
import { Form, TextValidator } from 'react-native-validator-form';
import { StyleSheet ,ScrollView, View, ToastAndroid, TouchableOpacity } from "react-native"
import { Layout, Input, Select, SelectItem, Button,Text, Icon  } from '@ui-kitten/components';
 
class SignUp extends React.Component {


    state={
        countries:[],
        form:{ name:"",last_name:"",country:"",picture:"",email:"",password:"" },
        visiblePassword:true
    }

    componentDidMount(){
     this.props.fetchCountries()
     .then( data => this.setState({ ...this.state, 
        countries: data.map( element => element.name ) }) )
    }

    readForm =( input, value )=>{ this.setState({ ...this.state,form:{ ...this.state.form, [input]:value }}) }
      
    submitForm =()=>{
        if(!this.state.form.password.length ){ return null }
        this.props.submitForm( "signup", this.state.form )
        .then( data => data.success
            ? this.props.navigation.navigate("Home") 
            : ToastAndroid.showWithGravity( "Some fields are wrong" , ToastAndroid.SHORT, ToastAndroid.CENTER)    
        )}

/* ---------------------------------------------------- */


handleChange = (email) => {
    this.setState({ email });
}

submit = () => {
    // your submit logic
}

handleSubmit = () => {
    this.refs.form.submit();
}


render(){
    return <Layout style={ styles.mainContainer }>
        <ScrollView >
            
             <Text style={styles.title } category='h1'>SignUp</Text>

            <View style={ styles.containers }>
                <Text appearance='hint' category='s1'>First name</Text>
                <Input
                 onChangeText={ value=>{ 
                    /^[a-zA-Z ,.'-]+$/.test( value ) 
                    ?   this.readForm("name",value)
                    : ToastAndroid.showWithGravity( "name is invalid" , ToastAndroid.SHORT, ToastAndroid.CENTER)  }} />
            </View>
            <View style={ styles.containers }>
                <Text appearance='hint' category='s1'>Last name</Text>
                <Input onChangeText={ value=>{ 
                    /^[a-zA-Z ,.'-]+$/.test( value ) 
                    ?   this.readForm("last_name",value)
                    : ToastAndroid.showWithGravity( "last name is invalid" , ToastAndroid.SHORT, ToastAndroid.CENTER)  }} />
            </View>
            <View style={ styles.containers }>
                <Text appearance='hint' category='s1'>Country</Text>
                <Select           
                    value={ ()=><Text>{ this.state.form.country }</Text> }           
                    onSelect={index => this.readForm("country", this.state.countries[ index.row ] ) }>
                    {   this.state.countries.length
                        ? this.state.countries.map( country => <SelectItem key={ country } title={ country } /> )
                        : null
                    }
                    </Select>
            </View>
            <View style={ styles.containers }>
                <Text appearance='hint' category='s1'>Picture</Text>
                <Input onChangeText={ value=>this.readForm("picture",value) } />
            </View>
            <View>
                <Text appearance='hint' category='s1'>Email</Text>
                <Input
                onChangeText={ value=>{ 
                    /^[\w-\.]+@([\w-]+\.)+[\w-]$/.test( value ) 
                    ?   this.readForm("email",value)
                    : ToastAndroid.showWithGravity( "email is invalid" , ToastAndroid.SHORT, ToastAndroid.CENTER)  }} />
            </View>
            <View style={ styles.containers }>
                <Text appearance='hint' category='s1'>Password</Text>
                <Input
                secureTextEntry={ this.state.visiblePassword }
                accessoryRight={ ()=> <TouchableOpacity onPress={ ()=> this.setState({...this.state, visiblePassword:!this.state.visiblePassword }) }>
                    <Icon style={ styles.icon } fill="black" name={ this.state.visiblePassword ? 'eye-off' : 'eye'}/>
                </TouchableOpacity> }
                caption={() => <Text style={ styles.captionText }>Must have at least 4 characters and a number </Text>   }
                onChangeText={ value=>{ 
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test( value ) 
                    ?   this.readForm("password",value)
                    : ToastAndroid.showWithGravity( "password is invalid" ,ToastAndroid.SHORT, ToastAndroid.CENTER)  }} />
            </View>

            <Button style={styles.button} status="info" appearance='outline' onPress={ this.submitForm }>
                SignUp
                </Button>

        </ScrollView>
    </Layout>
}
}

const mapDisptatchToProps ={
    fetchCountries: authAction.fetchCountries,
    submitForm: authAction.submitForm
}

export default connect(null,mapDisptatchToProps) (SignUp)

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:"6%",
        flex:1,
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
        /* textAlign:"center", */
        color:"whitesmoke"
      },
    button: {
        margin: 2,
    },
    inputAndroid: {
        textAlign:"center",
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
      },
    captionText: {
        fontSize: 12,
        fontWeight: "400",
        color: "#8F9BB3",
    },
    icon:{
        width: 35,
        height: 35,
        marginRight:10
    }
})
