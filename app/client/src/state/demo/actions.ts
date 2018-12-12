import * as actionTypes from './actionTypes';
import { serviceDemo } from './services'

export const fetchDemoRequest = () => ({
    type: actionTypes.FETCH_TODO_REQUEST
});

export const fetchDemoSuccess = (data) => ({
    type: actionTypes.FETCH_TODO_SUCCESS,
    data
});

export const fetchDemoFailure = (err) => ({
    type: actionTypes.FETCH_TODO_FAILURE,
    err
})

export const fetchDemoData = () => {
    return async dispatch => {
        dispatch(fetchDemoRequest())
        try {
            let data = await serviceDemo.getData();
            dispatch(fetchDemoSuccess(data));
        } catch(e) {
            dispatch(fetchDemoFailure('err'));
        }
    }
}
