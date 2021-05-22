const initialState ={
    userLogged:null
}

const authReducer = ( state = initialState , action )=>{

    switch (action.type) {
        case "LOGUSER":
           return {
                ...state,
                userLogged: action.payload
            }
        case "LOGOUT":
            return {
                     ...state,
                     userLogged: null
            }
    
        default: return state
    }

}

export default authReducer