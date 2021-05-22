import AsyncStorage from '@react-native-async-storage/async-storage';

let token = ""

AsyncStorage.getItem("token").then( data => token = data )

const commentsAction ={
    sendComent:(idItinerary, comment )=>{
        return () =>{
            fetch("http://mytinerarydupuy.herokuapp.com/api/comentary/"+ idItinerary ,{  
        method:"POST",
        headers:{ 
        "Authorization":"Bearer " + token ,
        "Content-Type": 'application/json' },
        body: JSON.stringify({ "comment": comment })
        })
        .then( data => data.json() )
        .then( data => data.result )    
        .catch( err => console.log( err ) )

        }
    },
    deleteCommnet:(idItinerary,idComent)=>{
        return()=>{
        return fetch("http://mytinerarydupuy.herokuapp.com/api/comentary/" + idItinerary + "/" + idComent,{
            method:"DELETE",
            headers:{ "Authorization":"Bearer " + token }
        } )
        .then( data => data.json() )
        .then( data => console.log( data ) )
        .catch( err => console.log( err ) )   
        }
    },
    updateComent:(idItinerary,idComent, comment)=>{
        return()=>{
        return fetch("http://mytinerarydupuy.herokuapp.com/api/comentary/",{
            method:"PUT",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify({ comment })
        })
        .then( data => data.json() )
        .then( data => console.log( data ) )
        .catch( err => console.log( err ) )
        }
    }



}

export default commentsAction