import AsyncStorage from '@react-native-async-storage/async-storage';

let token = ""
AsyncStorage.getItem("token").then( data => token = data )

const commentsAction ={
    sendComment:(idItinerary, comment )=>{
        return () =>{
           return fetch("http://mytinerarydupuy.herokuapp.com/api/comentary/"+ idItinerary ,{  
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
    deleteComment:(idItinerary,idComent)=>{
        return()=>{
        return fetch("http://mytinerarydupuy.herokuapp.com/api/comentary/" + idItinerary + "/" + idComent,{
            method:"DELETE",
            headers:{ "Authorization":"Bearer " + token }
        } )
        .then( data => data.json() )
        .then( data => data.result )
        .catch( err => console.log( err ) )   
        }
    },
    updateComment:(idItinerary,idComent, comment)=>{
        return()=>{
        return fetch("http://mytinerarydupuy.herokuapp.com/api/comentary/"+ idItinerary + "/" + idComent,{
            method:"PUT",
            headers:{ 
                "Authorization":"Bearer " + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "comment": comment })
        })
        .then( data => data.json() )
        .then( data => data.result )
        .catch( err => console.log( err ) )
        }
    },
    like_unlike:( id_Itinerary )=>{
        return ()=>{
          return fetch("https://mytinerarydupuy.herokuapp.com/api/like/" + id_Itinerary ,{ 
                method:"POST",
                headers:{ "Authorization":"Bearer " + token }
            })
            .then(data => data.json() )
            .then( data => data.result )   
            .catch( err => console.log( err ) )
        }
    }
}

export default commentsAction