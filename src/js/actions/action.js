import axios from "axios";

export function fetchUsers(){

    return function(dispatch){
        axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
            .then((response) => {
                dispatch({type: "USERS_RECEIVED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCHING_FAILED", payload: err})
            })
    }
}