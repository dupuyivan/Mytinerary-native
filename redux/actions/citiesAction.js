

const CitiesAction ={

    fetchCities:()=>{
        return(dispatch)=>{
            return fetch("https://mytinerarydupuy.herokuapp.com/api/cities")
            .then( data => data.json() )
            .then( data => dispatch({ type:"LOADCITIES", payload: data.result }) )
            .catch( err => console.log( err ) )
        }
    },
    search:( value )=>{
        return(dispatch)=>{
            dispatch({ type:"SEARCH", payload:value.trim().toLowerCase() })
        }
    },
    fetchItinerary:(idCity)=>{
        return()=>{
            return fetch("https://mytinerarydupuy.herokuapp.com/api/itinerarybycity/"+ idCity )
            .then( data => data.json() )
            .then( data => data.result )
            .catch( err => console.log( err ) )
        }
    },
    fetchActivities:(idItinerary)=>{
        return()=>{
            return fetch("https://mytinerarydupuy.herokuapp.com/api/activitybyitinerary/"+ idItinerary)
            .then( data => data.json() )
            .then( data => data.result )
            .catch( err => console.log( err ) )
        }
    }
}

export default CitiesAction