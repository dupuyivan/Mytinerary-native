
const initialState ={
    cities:[],
    citiesFiltered:undefined
}

const citiesReducer = ( state =initialState , action )=>{
    
    switch (action.type) {
        case "LOADCITIES":
            return{
                ...state,
                cities:action.payload
            }
        case "SEARCH":
            return{
                ...state, 
                citiesFiltered: state.citiesFiltered 
                && state.cities.filter( city => city.city.trim().toLowerCase().indexOf( action.payload ) === 0 ).length 
                    ? state.cities.filter( city => city.city.trim().toLowerCase().indexOf( action.payload ) === 0 )
                    : false
        
            }
        default: return state
    }
}

export default citiesReducer