import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as fetchMock from 'fetch-mock';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => fetchMock.restore())

  it('creates FETCH_TODO_SUCCESS when fetching todos has been done', () => {
        fetchMock.get('/posts', {
        body: { 
            data:[
                {
                    "id": 1,
                    "title": "json-server",
                    "author": "typicode"
                }
            ]
        },
        headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: actionTypes.FETCH_TODO_REQUEST },
      { type: actionTypes.FETCH_TODO_SUCCESS, 
        data: [
            {
              "id": 1,
              "title": "json-server",
              "author": "typicode"
            }
        ]
        }
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchDemoData()).then((data) => {
        console.log('DATA', data)
      // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
    })
  })
})