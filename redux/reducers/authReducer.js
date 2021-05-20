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
            break;
    
        default: return state
            break;
    }

}

export default authReducer