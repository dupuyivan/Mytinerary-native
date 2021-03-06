import AsyncStorage from '@react-native-async-storage/async-storage';

const authAction ={
    fetchCountries:()=>{
        return()=>{
            return fetch("https://restcountries.eu/rest/v2/all")
            .then( data => data.json() )
            .then( data => data )
            .catch( err => console.log( err ) )
        }
    },
    submitForm:(endpoint,form)=>{
        return( dispatch)=>{
            return fetch("http://mytinerarydupuy.herokuapp.com/api/"+ endpoint, {
                method:"POST",
                headers:{ 'Content-Type': 'application/json'},
                body: JSON.stringify( form ) 
            } )
            .then( data => data.json() )
            .then( data =>{
                
                if( data.success ){
                    AsyncStorage.setItem("user", JSON.stringify( data.result ))
                    AsyncStorage.setItem("token",  data.result.token )
                    dispatch({ type:"LOGUSER", payload:data.result }) 
                    return { success:true }
                }
                else{ return { success:false, message:"The email or password is wrong" } }
            })
            .catch( err => console.log( err ) )
        }
    },
    logOut: ()=>{
        return (dispatch)=>{
            AsyncStorage.setItem("user","")
            AsyncStorage.setItem("token","")
            dispatch({ type:"LOGOUT" })
        }
    }


}

export default authAction