
export default function reducer (state ={
    users: [],
    fetching: false,
    fetched: false,
    error: null

}, action){

    switch(action.type){
        case "FETCHING_USERS": {
            return {...state, fetching:true}
        }
        case "FETCHING_FAILED": {
            return {...state, fetching:false, error: action.payload}
        }
        case "USERS_RECEIVED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                users:action.payload
            }
        }
    }

    return state
}