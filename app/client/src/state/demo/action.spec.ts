import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchDemoData } from './actions';
import * as actionTypes from './actionTypes';

const mock = [
    {
        "id": 1, 
        "body": "some comment", 
        "postId": 1
    }
]

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
// jest.setTimeout(5000);

beforeEach(() => moxios.install());
afterEach(() => moxios.uninstall());
describe('Data url', () => {
    it('fetching', (done) => {
        const initialState = {
            data: []
        }
        const store = mockStore(initialState);
        moxios.stubRequest('http://localhost:3000/comments', {
            status: 200,
            response: [
                {
                    "id": 1, 
                    "body": "some comment", 
                    "postId": 1
                }
            ]
        });
        return store.dispatch(fetchDemoData())
        .then(() => {
                console.log('MOCKK', store.getActions())
                const expectedActions = [
                    { type: actionTypes.FETCH_TODO_REQUEST },
                    { type: actionTypes.FETCH_TODO_SUCCESS, 
                    data: [
                        {
                            "id": 1,
                            "body": "some comment",
                            "postId": 1
                        }
                        ]
                    }
                ]
                // expect()
                expect(store.getActions()).toEqual(expectedActions);
                done();
            })
    })
})