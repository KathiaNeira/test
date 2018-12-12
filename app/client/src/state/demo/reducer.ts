import * as actionTypes from './actionTypes';

interface State {
    data: any;
}

const initialState: State = {
    data: [],
}

export const Demo = (state: State = initialState, action): State => {
    switch(action.type) {
        case actionTypes.FETCH_TODO_REQUEST:
            return {
                ...state
            }
        
        case actionTypes.FETCH_TODO_FAILURE:
            return {
                ...state
            }
        
        case actionTypes.FETCH_TODO_SUCCESS:
            return {
                data: action.data
            }
        
        default:
            return state;
    }
}