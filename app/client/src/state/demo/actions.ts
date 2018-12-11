import * as actionTypes from './actionTypes';

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
    console.log('1111111111111111111111');
    return dispatch => {
        dispatch(fetchDemoRequest())
        return fetch('http://localhost:3000/posts')
            .then(res => res.json)
            .then(data => {
                console.log('data============>', data)
                //dispatch(fetchDemoSuccess(data.toString()))
                return 111
            })
            .catch(err => dispatch(fetchDemoFailure(err)))
    }
}
