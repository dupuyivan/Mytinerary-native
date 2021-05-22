import React from "react"
import authAction from "../redux/actions/authAction"
import { connect } from "react-redux"
import RNPickerSelect from 'react-native-picker-select'
import { StyleSheet ,ScrollView, View , Text, TouchableOpacity } from "react-native"
import { Layout, Input, Select, SelectItem, IndexPath, Button  } from '@ui-kitten/components';
 
class SignUp extends React.Component {


    state={
        countries:[],
        form:{ name:"",last_name:"",country:"",picture:"",email:"",password:"" },
        selectedIndex: new IndexPath(0)
    }

    componentDidMount(){
     this.props.fetchCountries()
     .then( data => this.setState({ ...this.state, 
        countries: data.map( element => element.name ) }) )
    }

    readForm =( input, value )=>{ this.setState({ ...this.state,form:{ ...this.state.form, [input]:value }}) }
      
    submitForm =()=>{
        this.props.submitForm( "signup", this.state.form )
        .then( data => data.success && this.props.navigation.navigate("Home") )
    }


render(){
    return <ScrollView >
             <Layout style={ styles.mainContainer }>

             <Text style={styles.text} category='h1'>SignUp</Text>

            <View style={ styles.containers }>
                <Text style={styles.text} category='s1'>First name</Text>
                <Input placeholder='Place your Text' />
            </View>
            <View style={ styles.containers }>
                <Text style={styles.text} category='s1'>Last name</Text>
                <Input placeholder='Place your Text' />
            </View>
            <View style={ styles.containers }>
                <Text style={styles.text} category='s1'>Country</Text>
                <Select 
                        selectedIndex={this.state.selectedIndex}
                        onSelect={index => this.setState({...this.state, selectedIndex: index  })  }>
                        <SelectItem title='Select a country'/>
                        {   this.state.countries.length
                            ? this.state.countries.map( country => <SelectItem key={ country } title={ country } /> )
                            : null
                        }
                    </Select>
            </View>
            <View style={ styles.containers }>
                <Text style={styles.text} category='s1'>Picture</Text>
                <Input placeholder='Place your Text' />
            </View>
            <View>
                <Text style={styles.text} category='s1'>Email</Text>
                <Input placeholder='Place your Text' />
            </View>
            <View style={ styles.containers }>
                <Text style={styles.text} category='s1'>Password</Text>
                <Input placeholder='Place your Text' />
            </View>

            <Button style={styles.button} appearance='outline'>SignUp</Button>

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
    /* title:{
        fontSize:40,
        textAlign:"center",
        marginTop:10,
        marginBottom:20
    },
    placeHolders:{  
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
    }, */
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


/* <Text style={ styles.title }>SignUp</Text>

                    <View style={ styles.placeHolders }>
                    <Text style={styles.text} category='s1'>S1</Text>
                        <Text style={ styles.placeholder }>First Name</Text>
                        <Input onChangeText={( value => this.readForm("name",value) )  } style={ styles.input } />
                    </View>
                    <View style={ styles.placeHolders }>
                    <Text style={ styles.placeholder }>Last name</Text>
                        <Input onChangeText={( value => this.readForm("last_name",value) )  } style={ styles.input } />
                    </View>
                    <View style={ styles.placeHolders }>
                    <Text style={ styles.placeholder }>Country</Text>

                    <RNPickerSelect
                    placeholder={{ label:"Select a your country", value:"" }}
                    items={this.state.countries}
                    onValueChange={ value => this.readForm("country", value ) }
                    style={ styles }
                    />

                    <Select 
                        selectedIndex={this.state.selectedIndex}
                        onSelect={index => this.setState({...this.state, selectedIndex: index  })  }>
                        <SelectItem title='Option 1'/>
                        <SelectItem title='Option 2'/>
                        <SelectItem title='Option 3'/>
                    </Select>


                    </View>
                    <View style={ styles.placeHolders }>
                    <Text style={ styles.placeholder }>Picture</Text>
                        <Input onChangeText={( value => this.readForm("picture",value ) )} style={ styles.input } />
                    </View>
                    <View style={ styles.placeHolders }>
                    <Text style={ styles.placeholder }>Email</Text>
                        <Input onChangeText={( value => this.readForm("email",value ) )} style={ styles.input } />
                    </View>
                    <View style={ styles.placeHolders } >
                    <Text style={ styles.placeholder }>Password</Text>
                        <Input onChangeText={( value => this.readForm("password",value ) )} style={ styles.input } />
                    </View>
                    <View style={ styles.placeHolders }>
                    <TouchableOpacity style={ styles.buttonContainer } >
                        <Text onPress={ this.submitForm } style={ styles.send }>SignUp</Text>
                    </TouchableOpacity>
                    </View> 
*/