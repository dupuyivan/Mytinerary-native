import React from "react"
import authAction from "../redux/actions/authAction"
import { connect } from "react-redux"
import RNPickerSelect from 'react-native-picker-select'
import { StyleSheet ,ScrollView, View , Text, TextInput, TouchableOpacity } from "react-native"

class SignUp extends React.Component {

    state={
        countries:[],
        form:{ name:"",last_name:"",country:"",picture:"",email:"",password:"" },
    }

    componentDidMount(){
     this.props.fetchCountries()
     .then( data => this.setState({ ...this.state, 
        countries: data.map( element =>({ label: element.name, value:element.name  }) ) }) )
    }

    readForm =( input, value )=>{
        this.setState({ ...this.state,form:{ ...this.state.form, [input]:value }})
    }
      

render(){
    return <ScrollView style={ styles.mainContainer }>
             <Text style={ styles.title }>SignUp</Text>

             <View style={ styles.placeHolders }>
                 <Text style={ styles.placeholder }>First Name</Text>
                 <TextInput onChangeText={( value => this.readForm("name",value) )  } style={ styles.input } />
             </View>
             <View style={ styles.placeHolders }>
             <Text style={ styles.placeholder }>Last name</Text>
                 <TextInput onChangeText={( value => this.readForm("last_name",value) )  } style={ styles.input } />
             </View>
             <View style={ styles.placeHolders }>
             <Text style={ styles.placeholder }>Country</Text>
             
                <RNPickerSelect
                placeholder={{ label:"Select a your country", value:"" }}
                items={this.state.countries}
                onValueChange={ value => this.readForm("country", value ) }
                style={ styles }
                />

             </View>
             <View style={ styles.placeHolders }>
             <Text style={ styles.placeholder }>Picture</Text>
                 <TextInput onChangeText={( value => this.readForm("picture",value ) )} style={ styles.input } />
             </View>
             <View style={ styles.placeHolders }>
             <Text style={ styles.placeholder }>Email</Text>
                 <TextInput onChangeText={( value => this.readForm("email",value ) )} style={ styles.input } />
             </View>
             <View style={ styles.placeHolders } >
             <Text style={ styles.placeholder }>Password</Text>
                 <TextInput onChangeText={( value => this.readForm("password",value ) )} style={ styles.input } />
             </View>
             <View style={ styles.placeHolders }>
                <TouchableOpacity style={ styles.buttonContainer } >
                    <Text onPress={ ()=> this.props.submitForm( "signup", this.state.form ) } style={ styles.send }>SignUp</Text>
                </TouchableOpacity>
             </View>
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
        paddingRight: 30, // to ensure the text is never behind the icon
      },

})
