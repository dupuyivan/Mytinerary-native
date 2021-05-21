
const authAction ={

    fetchCountries:()=>{
        return(dispatch)=>{
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
                if( data.success){ dispatch({ type:"LOGUSER", payload:data.result }) 
                    return { success:true }
                }
                else{
                    console.log( data )
                }
            })
            .catch( err => console.log( err ) )
        }
    }


}

export default authAction