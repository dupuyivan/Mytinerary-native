import React from "react"
import authAction from "../redux/actions/authAction"
import { connect } from "react-redux"
import { Form, TextValidator } from 'react-native-validator-form';
import { StyleSheet ,ScrollView, View, ToastAndroid } from "react-native"
import { Layout, Input, Select, SelectItem, IndexPath, Button,Text  } from '@ui-kitten/components';
 
class SignUp extends React.Component {


    state={
        countries:[],
        form:{ name:"",last_name:"",country:"",picture:"",email:"",password:"" },
        selectedIndex: new IndexPath(0),
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
            : ToastAndroid.show( data.message , ToastAndroid.SHORT, ToastAndroid.TOP)    
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
    return <ScrollView >
             <Layout style={ styles.mainContainer }>

             <Text style={styles.text} category='h1'>SignUp</Text>

            <View style={ styles.containers }>
                <Text style={styles.text} category='s1'>First name</Text>
                <Input placeholder='Place your Text' onChangeText={ value=>{ 
                    /^[a-zA-Z ,.'-]+$/.test( value ) 
                    ?   this.readForm("name",value)
                    : ToastAndroid.show( "name is invalid" , ToastAndroid.SHORT, ToastAndroid.CENTER)  }} />
            </View>
            <View style={ styles.containers }>
                <Text style={styles.text} category='s1'>Last name</Text>
                <Input placeholder='Place your Text' onChangeText={ value=>{ 
                    /^[a-zA-Z ,.'-]+$/.test( value ) 
                    ?   this.readForm("last_name",value)
                    : ToastAndroid.show( "last_name is invalid" , ToastAndroid.SHORT)  }} />
            </View>
            <View style={ styles.containers }>
                <Text style={styles.text} category='s1'>Country</Text>
                <Select 
                        value={ ()=> <Text>{ this.state.countries[ this.state.selectedIndex ]  }</Text> }
                        selectedIndex={this.state.selectedIndex}
                        onSelect={index =>{ this.setState({...this.state, selectedIndex: index.row  })
                        this.readForm("country", this.state.countries[ index.row -1 ]  ) }}>
                        {   this.state.countries.length
                            ? this.state.countries.map( country => <SelectItem key={ country } title={ country } /> )
                            : null
                        }
                    </Select>
            </View>
            <View style={ styles.containers }>
                <Text style={styles.text} category='s1'>Picture</Text>
                <Input placeholder='Place your Text' onChangeText={ value=>this.readForm("picture",value) } />
            </View>
            <View>
                <Text style={styles.text} category='s1'>Email</Text>
                <Input placeholder='Place your Text' onChangeText={ value=>{ 
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test( value ) 
                    ?   this.readForm("email",value)
                    : ToastAndroid.show( "email is invalid" , ToastAndroid.SHORT)  }} />
            </View>
            <View style={ styles.containers }>
                <Text style={styles.text} category='s1'>Password</Text>
                <Input placeholder='Place your Text' onChangeText={ value=>{ 
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test( value ) 
                    ?   this.readForm("password",value)
                    : ToastAndroid.show( "password is invalid" ,ToastAndroid.SHORT)  }} />
            </View>

            <Button style={styles.button} appearance='outline' onPress={ this.submitForm }>
                SignUp
                </Button>

        {/* <Form style={ styles.containers } ref="form" onSubmit={this.handleSubmit} >

                <TextValidator   style={styles.text}
                    name="name"
                    validators={['required']}
                    errorMessages={['This field is required']}
                    type="text"
                    keyboardType="text"
                    value={this.state.name}
                    onChangeText={this.handleChange}
                />
                <TextValidator   style={styles.text}
                    name="email"
                    label="email"
                    validators={['required', 'isEmail']}
                    errorMessages={['This field is required', 'Email invalid']}
                    placeholder="Your email"
                    type="text"
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={this.handleChange}
                />
                 <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </Form> */}



             </Layout>

    </ScrollView>
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
        paddingBottom:"11%"
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

})
