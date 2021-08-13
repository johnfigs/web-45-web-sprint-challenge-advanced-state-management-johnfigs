import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_ERROR = 'ADD_ERROR';

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('http://localhost:3333/smurfs')
            .then(res=>{  
                dispatch(fetchSuccess(res.data));
            })
            .catch(err=> {
                dispatch(fetchFail());
                dispatch(addError(err.message));
            })
    }
}


export const fetchStart = () => {
    return({type: START_FETCH});
}

export const fetchSuccess = (res) => {
    return({type: FETCH_SUCCESS, payload: res})
}

export const fetchFail = () => {
    return({type: FETCH_FAIL})
}

export const addError = (err) => {
    return({type: ADD_ERROR, payload: err})
}

export const addSmurf = (smurf) => {
    return({type: ADD_SMURF, payload: smurf})
}





//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.