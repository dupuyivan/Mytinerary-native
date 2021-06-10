
const initialState ={
    cities:[],
    citiesFiltered:[],
    value:""
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
                citiesFiltered: state.cities.filter( city => city.city.trim().toLowerCase().indexOf( action.payload ) === 0 ),
                value:action.payload    
        
            }
        default: return state
    }
}

export default citiesReducer